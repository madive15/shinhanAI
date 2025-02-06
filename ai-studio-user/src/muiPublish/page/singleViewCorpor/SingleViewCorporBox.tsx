// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Badge from "~/muiPublish/components/Badge";
import Button from "@mui/material/Button";
// need style

// Props type
export interface IPageProps {
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: SingleViewCorporBox
 * SingleViewCorporBox
 * 싱글뷰
 */
const SingleViewCorporBox: React.FC<IPageProps> = (props) => {
    return (
        // 싱글뷰 타입1
        <div className="single-box-wrap">
            <div className="single-ai-box">
                <h2>AI 추천 타겟</h2>
                <div className="single-box-content">
                    <div className="single-box">
                        <div className="single-view-box blue">
                            <div className="left">
                                <Badge
                                    value="퇴진연금 기반 고객"
                                    color="blue3"
                                />
                                <p>
                                    <strong>
                                        퇴직연금 기반고객의 최상위 프리빌트
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="single-box">
                        <div className="single-view-box blue">
                            <div className="left">
                                <Badge value="외형순증" color="blue3" />
                                <p>
                                    <strong>
                                        외형순증의 최상위 프리빌트명
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="single-box">
                        <div className="single-view-box blue">
                            <div className="left">
                                <Badge value="외환영업" color="blue3" />
                                <p>
                                    <strong>
                                        외환영업 수익의 최상위 프리빌트
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="between-box">
                    <div className="single-box-txt">
                        <strong>우선순위가 높은 타겟리스트입니다.</strong>
                        <p>
                            지표 수준, 평가항목 중요도 등을 종합 고려하여
                            평가항목 관련 타겟리스트 중 추천 상위 3개의
                            항목입니다.
                        </p>
                    </div>
                    <Button variant="primary">Sprut 연계</Button>
                </div>
            </div>

            <h2>{`김*더`} 고객의 주요 관리 사항 </h2>
            <div className="single-box-content">
                <div className="single-box">
                    <div className="single-view-box wrap">
                        <div className="left">
                            <Badge value="건전성" color="black" />
                            <p>
                                <strong>기업연체예측 관리</strong>
                            </p>
                        </div>
                        <Button fullWidth variant="sub2">
                            타겟 추출
                        </Button>
                    </div>
                    <div className="single-box-txt">
                        <strong>기업의 연체가 예측됩니다.</strong>
                        <p>
                            기업의 연체가 되지 않도록 각별한 주의가 필요합니다.
                        </p>
                    </div>
                </div>
                <div className="single-box">
                    <div className="single-view-box wrap">
                        <div className="left">
                            <Badge value="RM OneTeam" color="black" />
                            <p>
                                <strong>BB+ 법인 중 CEO 예측</strong>
                            </p>
                        </div>
                        <Button fullWidth variant="sub2">
                            타겟 추출
                        </Button>
                    </div>
                    <div className="single-box-txt">
                        <strong>종합 솔루션 타겟 리스트입니다.</strong>
                        <p>종합 솔루션 타겟 리스트입니다.</p>
                    </div>
                </div>
            </div>
        </div>

        // 싱글뷰 타입2
        // <div className="single-box-wrap">
        //     <div className="single-box-area">
        //         <h2>AI 상품 추천</h2>
        //         <div className="single-box-item">
        //             <div className="left">
        //                 <div className="single-box blue">
        //                     <div className="left">
        //                         <p>
        //                             <strong>퇴진연금 기반 고객</strong>
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="single-box blue">
        //                     <div className="left">
        //                         <p>
        //                             <strong>외형순증</strong>
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="single-box blue">
        //                     <div className="left">
        //                         <p>
        //                             <strong>외환영업 수익</strong>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="right">
        //                 <div className="single-txt-box">
        //                     <h3>AI가 추천합니다.</h3>
        //                     <p>
        //                         <strong>퇴직연금 기반 고객 : </strong>
        //                         최근 유동성의 평잔이 증가하고 있습니다. 과거
        //                         상품 가입 이력을 고려했을 때 골드리슈 상품이
        //                         적합합니다.
        //                     </p>
        //                     <p>
        //                         <strong>외형순증 : </strong>
        //                         최근 1년 내 해외여행 관련 항공권, 숙박 예약
        //                         내역이 다수 확인되었습니다. 이런 경우 SOL 트래블
        //                         카드를 추천해보세요.
        //                     </p>
        //                     <p>
        //                         <strong>외환영업 수익 : </strong>
        //                         안정적인 투자 성향이며, 높은 수신 평잔을
        //                         유지하고 있습니다. 이런 경우 퇴직연금 IRP 추가
        //                         불입을 추천 해 보세요.
        //                     </p>
        //                     <Button variant="primary">Sprut 연계</Button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="single-box-item">
        //             <div className="left">
        //                 <div className="single-box">
        //                     <div className="left">
        //                         <Badge value="건전성" color="black " />
        //                         <p>
        //                             <strong>기업연체예측 관리</strong>
        //                         </p>
        //                     </div>
        //                     <div className="right">
        //                         <Button variant="smallSub1">타겟 추출</Button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="right">
        //                 <div className="single-txt-box">
        //                     <p>
        //                         <strong>기업연체예측 관리 : </strong>
        //                         기업의 연체가 예측됩니다. 기업의 연체가 되지
        //                         않도록 각별한 주의가 필요합니다.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="single-box-item">
        //             <div className="left">
        //                 <div className="single-box">
        //                     <div className="left">
        //                         <Badge value="RM OneTeam" color="blue3 " />
        //                         <p>
        //                             <strong>BB+ 법인 중 CEO 예측</strong>
        //                         </p>
        //                     </div>
        //                     <div className="right">
        //                         <Button variant="smallSub1">타겟 추출</Button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="right">
        //                 <div className="single-txt-box gray">
        //                     <p>
        //                         <strong>BB+ 법인 중 CEO 예측 : </strong>
        //                         종합 솔루션 타겟 리스트입니다.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SingleViewCorporBox;
