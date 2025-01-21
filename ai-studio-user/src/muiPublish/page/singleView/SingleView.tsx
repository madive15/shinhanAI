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
                        <Category />
                        <SingleViewTable />
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

export default SingleView;
