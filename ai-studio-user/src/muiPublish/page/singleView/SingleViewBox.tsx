// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Badge from "~/muiPublish/components/Badge";
// need style

// Props type
export interface IPageProps {
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: SingleViewBox
 * SingleViewBox
 * 싱글뷰
 */
const SingleViewBox: React.FC<IPageProps> = (props) => {
    return (
        // 싱글뷰 타입1
        <div className="single-box-wrap">
            <div className="single-ai-box">
                <h2>AI 상품 추천</h2>
                <div className="single-box-content">
                    <div className="single-box">
                        <div className="single-view-box blue">
                            <div className="left">
                                <Badge value="Profile 기반" color="blue3" />
                                <p>
                                    <strong>골드리슈</strong>
                                </p>
                            </div>
                            <div className="right">
                                <em>87%</em>
                                <span>(N등급)</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-box">
                        <div className="single-view-box blue">
                            <div className="left">
                                <Badge value="맥락 기반" color="blue3" />
                                <p>
                                    <strong>SOL 트래블 카드</strong>
                                </p>
                            </div>
                            <div className="right">
                                <em>87%</em>
                                <span>(N등급)</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-box">
                        <div className="single-view-box blue">
                            <div className="left">
                                <Badge value="전략 상품" color="blue3" />
                                <p>
                                    <strong>퇴직연금 IRP 추가 불입</strong>
                                </p>
                            </div>
                            <div className="right">
                                <em>87%</em>
                                <span>(N등급)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-box-txt">
                    <strong>최근 유동성 평찬이 증가하고 있습니다.</strong>
                    <p>
                        유동성의 평잔이 최근 6개월간 지속적으로 증가하고
                        있습니다. 과거 상품 가입 이력을 고려했을 때, 골드리슈
                        상품을 추천 해 보세요.
                    </p>
                </div>
            </div>

            <h2>{`김*더`} 고객의 주요 관리 사항 </h2>
            <div className="single-box-content">
                <div className="single-box">
                    <div className="single-view-box red">
                        <div className="left">
                            <Badge value="고갹 관리" color="red " />
                            <p>
                                <strong>ISA 중도 해지</strong>
                            </p>
                        </div>
                        <div className="right">
                            <em>87%</em>
                            <span>(N등급)</span>
                        </div>
                    </div>
                    <div className="single-box-txt">
                        <strong>
                            최근 ISA 평가금액이 줄어들고 있어 이탈 조짐이
                            보입니다.
                        </strong>
                        <p>ISA 중도 해지를 하지 않게 각별히 관리해주세요.</p>
                    </div>
                </div>
                <div className="single-box">
                    <div className="single-view-box">
                        <div className="left">
                            <Badge value="고객 성향" color="black" />
                            <p>
                                <strong>반려동물</strong>
                            </p>
                        </div>
                        <div className="right">
                            <em>87%</em>
                            <span>(N등급)</span>
                        </div>
                    </div>
                    <div className="single-box-txt">
                        <strong>
                            반려 동물에 관심이 있을 것으로 추정됩니다.
                        </strong>
                        <p>
                            반려동물을 테마로 간단한 Small Talk으로 대화를
                            시작해보세요.
                        </p>
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
        //                         <Badge
        //                             value="Profile 기반 추천"
        //                             color="blue3 "
        //                         />
        //                         <p>
        //                             <strong>골드리슈</strong>
        //                         </p>
        //                     </div>
        //                     <div className="right">
        //                         <em>87%</em>
        //                         <span>(N등급)</span>
        //                     </div>
        //                 </div>
        //                 <div className="single-box blue">
        //                     <div className="left">
        //                         <Badge value="맥락 기반" color="blue3 " />
        //                         <p>
        //                             <strong>SOL 트래블 카드</strong>
        //                         </p>
        //                     </div>
        //                     <div className="right">
        //                         <em>87%</em>
        //                         <span>(N등급)</span>
        //                     </div>
        //                 </div>
        //                 <div className="single-box green">
        //                     <div className="left">
        //                         <Badge value="전략 상품" color="green" />
        //                         <p>
        //                             <strong>퇴직연금 IRP 추가 불입</strong>
        //                         </p>
        //                     </div>
        //                     <div className="right">
        //                         <em>87%</em>
        //                         <span>(N등급)</span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="right">
        //                 <div className="single-txt-box">
        //                     <h3>AI가 추천합니다.</h3>
        //                     <p>
        //                         <strong>골드리슈 : </strong>
        //                         최근 유동성의 평잔이 증가하고 있습니다. 과거
        //                         상품 가입 이력을 고려했을 때 골드리슈 상품이
        //                         적합합니다.
        //                     </p>
        //                     <p>
        //                         <strong>SOL 트래블 카드 : </strong>
        //                         최근 1년 내 해외여행 관련 항공권, 숙박 예약
        //                         내역이 다수 확인되었습니다. 이런 경우 SOL 트래블
        //                         카드를 추천해보세요.
        //                     </p>
        //                     <p>
        //                         <strong>퇴직연금 IRP 추가 불입 : </strong>
        //                         안정적인 투자 성향이며, 높은 수신 평잔을
        //                         유지하고 있습니다. 이런 경우 퇴직연금 IRP 추가
        //                         불입을 추천 해 보세요.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="single-box-item">
        //             <div className="left">
        //                 <div className="single-box">
        //                     <div className="left">
        //                         <Badge
        //                             value="고객 주요 관심사"
        //                             color="black "
        //                         />
        //                         <p>
        //                             <strong>반려 동물</strong>
        //                         </p>
        //                     </div>
        //                     <div className="right">
        //                         <em>87%</em>
        //                         <span>(N등급)</span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="right">
        //                 <div className="single-txt-box">
        //                     <p>
        //                         <strong>반려동물 : </strong>
        //                         반려 동물에 관심이 있을 것으로 추정 됩니다. 반려
        //                         동물을 테마로 간단한 Samll Talk으로 대화를
        //                         시작해보세요.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="single-box-item">
        //             <div className="left">
        //                 <div className="single-box">
        //                     <div className="left">
        //                         <Badge
        //                             value="Profile 기반 추천"
        //                             color="blue3 "
        //                         />
        //                         <p>
        //                             <strong>골드리슈</strong>
        //                         </p>
        //                     </div>
        //                     <div className="right">
        //                         <em>87%</em>
        //                         <span>(N등급)</span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="right">
        //                 <div className="single-txt-box gray">
        //                     <p>
        //                         <strong>반려동물 : </strong>
        //                         반려 동물에 관심이 있을 것으로 추정 됩니다. 반려
        //                         동물을 테마로 간단한 Samll Talk으로 대화를
        //                         시작해보세요.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SingleViewBox;
