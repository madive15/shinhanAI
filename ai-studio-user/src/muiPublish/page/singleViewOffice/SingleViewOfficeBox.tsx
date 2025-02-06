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
 * user-front: SingleViewOfficeBox
 * SingleViewOfficeBox
 * 싱글뷰
 */
const SingleViewOfficeBox: React.FC<IPageProps> = (props) => {
    return (
        <div className="single-office-card-wrap">
            <div className="tit-area">
                <h2>맞춤 타겟 리스트</h2>
                <p className="desc">
                    서소문 지점에 가장 적합한 CRM 타겟 리스트는 아래와 같습니다.
                </p>
            </div>
            <div className="office-card-area">
                <div className="office-card">
                    <div className="card-tag">실적</div>
                    <div className="office-card-top">
                        <span className="point-tag">트렌드 Point</span>
                        <div className="card-tit">
                            <span className="card-tit-tag">외환</span>
                            환전 가망 고객 타겟 리스트
                        </div>
                        <div className="single-box-txt">
                            <p>
                                실적 별로 전행 평균과 비교했을 때 IRP 추가
                                불입에 대한 부분이 가장 낮습니다. IRP 추가 불입
                                마케팅을 진행해보시는 것을 추천 합니다.
                            </p>
                        </div>
                    </div>
                    <div className="office-card-bottom">
                        <p className="exclamation-txt blue-white">
                            전행 실적 평균 대비 점수가 낮은 항목의 타겟 리스트
                            입니다.
                        </p>
                        <Button variant="sub1">타겟 추출</Button>
                    </div>
                </div>
                <div className="office-card">
                    <div className="card-tag">실적</div>
                    <div className="office-card-top">
                        <span className="point-tag">점주권 맞춤 Point</span>
                        <div className="card-tit">
                            <span className="card-tit-tag">IRP</span>
                            경찰 대출 보유 고객 중 IRP 가망 고객
                        </div>
                        <div className="single-box-txt">
                            <p>
                                지점별로 상위 30% 수준의 고가망 고객들을 추려서
                                비교 해 보았을 때 경찰 대출 보유 고객 중 IRP
                                가망 고객에 해당되는 고객수가 타 지점 대비
                                많습니다.
                            </p>
                        </div>
                    </div>
                    <div className="office-card-bottom">
                        <p className="exclamation-txt blue-white">
                            전행 실적 평균 대비 점수가 낮은 항목의 타겟 리스트
                            입니다.
                        </p>
                        <Button variant="sub1">타겟 추출</Button>
                    </div>
                </div>
                <div className="office-card">
                    <div className="card-tag">실적</div>
                    <div className="office-card-top">
                        <span className="point-tag">트렌드 Point</span>
                        <div className="card-tit">
                            <span className="card-tit-tag">
                                지금 뜨는 타겟 리스트
                            </span>
                            교직원 대출 보유 고객 중 IRP 가망 고객
                        </div>
                        <div className="single-box-txt">
                            <p>
                                최근 3개월간 교직원 대출 보유 고객 중 IRP 가망
                                고객이 가장 많이 조회되고, 가장 많이 타겟 추출이
                                이루어지고 있습니다.
                            </p>
                        </div>
                    </div>
                    <div className="office-card-bottom">
                        <p className="exclamation-txt white-blue">
                            전행 실적 평균 대비 점수가 낮은 항목의 타겟 리스트
                            입니다.
                        </p>
                        <Button variant="sub1">타겟 추출</Button>
                    </div>
                </div>
            </div>
            {/* <div className="no-target">
                <p>
                    추출할 타겟리스트가 없습니다.
                    <br />
                    최근 추출한 타겟 리스트를 확인 할까요?
                </p>
                <Button variant="sub1">타겟 추출 내역</Button>
            </div> */}
        </div>
    );
};

export default SingleViewOfficeBox;
