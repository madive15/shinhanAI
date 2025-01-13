// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as WhiteStar } from "~assets/images/svg/icon-white-star.svg";
// need content
import Badge from "~/muiPublish/components/Badge";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    heiTitSearch?: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: MyModelPerformance
 * MyModelPerformance
 */
const MyModelPerformance: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    return (
        <div className="model-performance">
            <h3>모델 성능</h3>
            <div className="model-performance-box">
                <div className="confusion-matrix">
                    <p>Confusion Matrix</p>
                    <div className="matrix-box">
                        <div className="top-label">
                            <span>T</span>
                            <span>예측값</span>
                            <span>F</span>
                        </div>
                        <div className="side-label">
                            <span>T</span>
                            <span>실제값</span>
                            <span>F</span>
                        </div>
                        <div className="matrix">
                            <div className="matrix-item">
                                <Badge value="FN" color="blue3" />
                                <p className="value">12134</p>
                            </div>
                            <div className="matrix-item ">
                                <Badge value="TP" color="blue3" />
                                <p className="value">15265</p>
                            </div>
                            <div className="matrix-item ">
                                <Badge value="FP" color="blue3" />
                                <p className="value">234850</p>
                            </div>
                            <div className="matrix-item">
                                <Badge value="TN" color="blue3" />
                                <p className="value">3551890</p>
                            </div>
                        </div>
                    </div>
                    <div className="matrix-circle-box">
                        <div className="matrix-circle-item">
                            <div className="matrix-circle">0.8699</div>
                            <p className="matrix-circle-txt">Roc Auc</p>
                        </div>
                        <div className="matrix-circle-item">
                            <div className="matrix-circle">0.1102</div>
                            <p className="matrix-circle-txt">F1_score</p>
                        </div>
                        <div className="matrix-circle-item">
                            <div className="matrix-circle">0.9352</div>
                            <p className="matrix-circle-txt">Accuracy</p>
                        </div>
                    </div>
                </div>
                <div className="lift">
                    <p>Lift</p>
                    <div className="lift-chart">lift 차트 영역</div>
                    <div className="lift-result">
                        <div className="lift-result-star">
                            <WhiteStar />
                            <WhiteStar />
                            <WhiteStar />
                        </div>
                        <div className="lift-result-txt">
                            <span>AI 추천 최적 고객 비율은</span>
                            <br />
                            <strong>상위 1.3% 구간입니다.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyModelPerformance;
