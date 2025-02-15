// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import IndiviCompany from "~/muiPublish/components/indiviCompany/IndiviCompany";
import Category from "~/muiPublish/components/category/Category";
import NoData from "~/muiPublish/components/noData/noData";
import Badge from "~/muiPublish/components/Badge";
import SingleViewBox from "~/muiPublish/page/singleView/SingleViewBox";
import SingleViewTable from "~/muiPublish/page/singleView/SingleViewTable";
import SingleViewTable2 from "~/muiPublish/page/singleView/SingleViewTable2";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    subTabs?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: SingleView
 * SingleView page
 * 싱글뷰
 */
const SingleView: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);
    const [activeTab, setActiveTab] = useState(0);
    //tabMenu 탭
    const tabMenu = ["HOME", "싱글뷰"];

    return (
        <>
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents">
                <div className="single-content">
                    <SubTitleNavTabs
                        subTabs={false}
                        pageName={props.pageName}
                        search={true}
                    />
                    <div className="scroll-content-area single-view">
                        <SingleViewBox />
                        {/* <Category /> */}
                        <div className="contents-tab type2">
                            <button
                                type="button"
                                className={activeTab === 0 ? "active" : ""}
                                onClick={() => setActiveTab(0)}
                            >
                                AI 추천
                            </button>
                            <button
                                type="button"
                                className={activeTab === 1 ? "active" : ""}
                                onClick={() => setActiveTab(1)}
                            >
                                상품
                            </button>
                            <button
                                type="button"
                                className={activeTab === 2 ? "active" : ""}
                                onClick={() => setActiveTab(2)}
                            >
                                서비스
                            </button>
                            <button
                                type="button"
                                className={activeTab === 3 ? "active" : ""}
                                onClick={() => setActiveTab(3)}
                            >
                                고객 성향
                            </button>
                            <button
                                type="button"
                                className={activeTab === 4 ? "active" : ""}
                                onClick={() => setActiveTab(4)}
                            >
                                건정성
                            </button>
                            <button
                                type="button"
                                className={activeTab === 5 ? "active" : ""}
                                onClick={() => setActiveTab(5)}
                            >
                                내부통제
                            </button>
                            <button
                                type="button"
                                className={activeTab === 6 ? "active" : ""}
                                onClick={() => setActiveTab(6)}
                            >
                                고객관리
                            </button>
                            <button
                                type="button"
                                className={activeTab === 7 ? "active" : ""}
                                onClick={() => setActiveTab(7)}
                            >
                                마케팅
                            </button>
                        </div>
                        {activeTab === 0 && <SingleViewTable />}
                        {activeTab === 1 && <SingleViewTable2 />}
                        {activeTab === 2 && <div>3</div>}
                        {activeTab === 3 && <div>4</div>}
                        {activeTab === 4 && <div>5</div>}
                        {activeTab === 5 && <div>6</div>}
                        {activeTab === 6 && <div>7</div>}
                        {activeTab === 7 && <div>8</div>}
                        {/* <div className="no-data type2">
                            <div className="no-data-box type1">
                                <p>
                                    <strong>고객 번호</strong> 또는
                                    <strong> 사업자 등록번호</strong>로 <br />
                                    검색해주세요.
                                </p>
                            </div>
                            <div className="no-data-box type2">
                                <p className="txt-type2">
                                    정보가 일치하는
                                    <br />
                                    <strong>고객이 없습니다.</strong>
                                </p>
                            </div>
                        </div> */}
                        {/* <div className="no-marketing">
                            <div className="no-marketing-box">
                                <strong>
                                    마케딩 활용에 동의하지 않으시거나 <br/>
                                    데이터가 없는 고객님입니다.
                                </strong>
                                <p>
                                    오늘 마케팅 활용 동의를 받으시면 <br/>
                                    내일부터 고객님의 정보 확인이 가능합니다.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleView;
