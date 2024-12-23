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
        <div className="single-box-wrap">
            <h2>{`김*더`} 고객님을 위한 추천</h2>
            <div className="single-box-content">
                <div className="single-box">
                    <div className="single-view-box blue">
                        <div className="left">
                            <Badge value="Profile 기반 추천" color="blue3 " />
                            <p>
                                <strong>골드리슈</strong>
                            </p>
                        </div>
                        <div className="right">
                            <em>87%</em>
                            <span>(N등급)</span>
                        </div>
                    </div>
                    <div className="single-box-txt">
                        <strong>최근 유동성 평찬이 증가하고 있습니다.</strong>
                        <p>
                            과거 상품 가입 이력을 고려했을 때 골드리슈 상품을
                            추천해보세요.
                        </p>
                    </div>
                </div>
                <div className="single-box">
                    <div className="single-view-box red">
                        <div className="left">
                            <Badge value="Profile 기반 추천" color="red " />
                            <p>
                                <strong>골드리슈</strong>
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
                    <div className="single-view-box green">
                        <div className="left">
                            <Badge value="Profile 기반 추천" color="green " />
                            <p>
                                <strong>골드리슈</strong>
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
                <div className="single-box">
                    <div className="single-view-box">
                        <div className="left">
                            <Badge value="Profile 기반 추천" color="black " />
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
            </div>
        </div>
    );
};

export default SingleViewBox;
