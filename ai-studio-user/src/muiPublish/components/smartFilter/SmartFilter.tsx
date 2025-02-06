// necessary set
import React, { useRef, useEffect, useState } from "react";

// need content
import Button from "@mui/material/Button";
import { ReactComponent as Filter } from "~assets/images/svg/Icons-filter.svg";
import Hash from "~/muiPublish/components/Hash";
import SmartFilterPopup from "~/muiPublish/components/smartFilter/SmartFilterPopup";

// need style
import "~/muiPublish/components/smartFilter/smartFilter.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: SmartFilter
 * SmartFilter
 * 스마트 필터
 *
 */
const SmartFilter: React.FC<IPageProps> = (props) => {
    const [popupStauts, setPopupStauts] = React.useState(false);
    const popupOpen = () => {
        setPopupStauts(true);
    };

    const [moreOnOff, setMoreOnOff] = useState<boolean>(true);

    return (
        <>
            {popupStauts === true && (
                <SmartFilterPopup
                    popupStauts={popupStauts}
                    setPopupStauts={setPopupStauts}
                />
            )}
            <div className="smart-filter">
                <div className="smart-box">
                    <Button
                        onClick={popupOpen}
                        className="btn-smart"
                        variant="iconLine"
                        endIcon={<Filter fill="#333" />}
                    >
                        상세 검색
                    </Button>
                    <div
                        className={
                            moreOnOff === true
                                ? "hash-wrap smart-filer-view open"
                                : "hash-wrap smart-filer-view"
                        }
                    >
                        <div className="filer-box">
                            <Hash value="개인" type="check" />
                            <Hash value="상품 > 퇴직연금 > IRP" type="check" />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                            <Hash value="재유입" del={true} />
                        </div>
                        <div className="btn-box">
                            {moreOnOff !== true && (
                                <Button
                                    className="btn-close"
                                    variant="small"
                                    onClick={() => setMoreOnOff(true)}
                                >
                                    전체보기
                                </Button>
                            )}

                            <Button variant="small">전체삭제</Button>
                            {moreOnOff === true && (
                                <Button
                                    // className="btn-close"
                                    variant="small"
                                    onClick={() => setMoreOnOff(false)}
                                >
                                    닫기
                                </Button>
                            )}
                            {/* <Button variant="small">적용</Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmartFilter;
