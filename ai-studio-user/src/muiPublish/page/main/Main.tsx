// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import SearchContent from "~/muiPublish/components/SearchContent";

// import Cardlist from "~/publish/components/Cardlist";

// need style
import "~/muiPublish/layout/layout.scss";

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
 * admin-front: Main
 * Main page
 */
const Main: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="main-wrap">
            <div className="main-left">
                <div className="ai-target-model">
                    <div className="ai-target">
                        <h2 className="sub-tit ">
                            <a href="#">AI타겟추출</a>
                        </h2>
                        <div>
                            <div>카드1</div>
                            <div>카드2</div>
                            <div>카드3</div>
                        </div>
                    </div>
                    <div className="ai-model">
                        <h2>
                            <a href="#">AI모델학습</a>
                        </h2>
                        <div>
                            <div>카드1</div>
                            <div>카드2 </div>
                        </div>
                    </div>
                </div>
                <div className="branch-crm">
                    <h2 className="sub-tit ">
                        <a href="#">Branch CRM Guide</a>
                    </h2>
                    <div>
                        <div>AI 추천 타겟 리스트</div>
                        <div>KPI기준 타겟리스트</div>
                        <div>MART 타겟 리스트</div>
                    </div>
                </div>
                <div className="ai-model-notice ">
                    <div>
                        <h2 className="sub-tit ">
                            <a href="#">AI 모델 현황</a>
                        </h2>
                        <ul>
                            <li>타겟추출 리스트</li>
                            <li>AI모델</li>
                            <li>고객성향지수</li>
                        </ul>
                    </div>
                    <div>공지사항 q&a 탭</div>
                </div>
            </div>
            <div className="main-right">
                <div className="use-top-target">
                    <h2>사용량 TOP5 타겟 리스트</h2>
                    <ol>
                        <li className="blue">개인형 IRP 가입 가능성 높은 고객 리스트</li>
                        <li className="blue">주택담보대출 만기 도래 고객 리스트</li>
                        <li className="blue">신용카드 발급 가능성 높은 고객 리스트</li>
                        <li>예·적금 만기 도래 고객 리스트</li>
                        <li>펀드 투자 관심 고객 리스트</li>
                    </ol>
                </div>
                <div className="use-top-target">
                    <h2>사용량 TOP5 타겟 리스트</h2>
                    <ol>
                        <li className="blue">개인형 IRP 가입 가능성 높은 고객 리스트</li>
                        <li className="b lue">주택담보대출 만기 도래 고객 리스트</li>
                        <li className="blue">신용카드 발급 가능성 높은 고객 리스트</li>
                        <li>예·적금 만기 도래 고객 리스트</li>
                        <li>펀드 투자 관심 고객 리스트</li>
                    </ol>
                </div>
                <div className="use-top-target">
                    <h2>사용량 TOP5 타겟 리스트</h2>
                    <ol>
                        <li className="blue">개인형 IRP 가입 가능성 높은 고객 리스트</li>
                        <li className="blue">주택담보대출 만기 도래 고객 리스트</li>
                        <li className="blue">신용카드 발급 가능성 높은 고객 리스트</li>
                        <li>예·적금 만기 도래 고객 리스트</li>
                        <li>펀드 투자 관심 고객 리스트</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Main;
