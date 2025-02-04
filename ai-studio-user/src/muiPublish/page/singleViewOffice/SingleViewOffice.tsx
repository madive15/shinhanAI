// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SubTitleNavTabs from "~/muiPublish/components/subTitleNavTabs/SubTitleNavTabs";
import NoData from "~/muiPublish/components/noData/noData";
import Badge from "~/muiPublish/components/Badge";
import SingleViewOfficeBox from "~/muiPublish/page/singleViewOffice/SingleViewOfficeBox";
import SingleViewOfficeTable from "~/muiPublish/page/singleViewOffice/SingleViewOfficeTable";
import SingleViewOfficeTable2 from "~/muiPublish/page/singleViewOffice/SingleViewOfficeTable2";
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
 * user-front: SingleViewOffice
 * SingleViewOffice page
 * 싱글뷰
 */
const SingleViewOffice: React.FC<IPageProps> = (props) => {
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
                        search={false}
                    />
                    <div className="scroll-content-area single-view">
                        <div className="single-office-name">
                            <strong>{"서소문"}</strong> 지점
                        </div>
                        <SingleViewOfficeBox />
                        <div className="contents-tab type2">
                            <button
                                type="button"
                                className={activeTab === 0 ? "active" : ""}
                                onClick={() => setActiveTab(0)}
                            >
                                실적
                            </button>
                            <button
                                type="button"
                                className={activeTab === 1 ? "active" : ""}
                                onClick={() => setActiveTab(1)}
                            >
                                점주권
                            </button>
                            <button
                                type="button"
                                className={activeTab === 2 ? "active" : ""}
                                onClick={() => setActiveTab(2)}
                            >
                                트렌드
                            </button>
                        </div>
                        {activeTab === 0 && <SingleViewOfficeTable />}
                        {activeTab === 1 && <SingleViewOfficeTable2 />}
                        {activeTab === 2 && <SingleViewOfficeTable2 />}
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
                                    마케팅 활용에 동의하지 않으신 고객님입니다.
                                </strong>
                                <p>
                                    오늘 동의를 받으면, <br />
                                    내일 부터 고객님의 정보를 확인하실 수
                                    있어요.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleViewOffice;
