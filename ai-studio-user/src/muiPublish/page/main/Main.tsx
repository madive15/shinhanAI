// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";

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
    const tabMenu = ["HOME"];
    return (
        <>
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents main-wrap">
                <div className="main-tab">
                    <button type="button" className="active">
                        개인
                    </button>
                    <button type="button">기업</button>
                </div>
                <div className="main-contents">
                    <div className="main-left">
                        <div className="branch-crm">
                            <h2 className="main-ank-tit">
                                <a href="#">영업점 싱글뷰</a>
                            </h2>
                            <div className="branch-card-box">
                                <div className="branch-card">
                                    <div className="card-tag">실적</div>
                                    <div className="branch-card-top">
                                        <span className="point-tag">
                                            실적 달성 Point
                                        </span>
                                        <div className="card-tit">
                                            <span className="card-tit-tag">
                                                IRP
                                            </span>
                                            IRP 추가 불입 마케팅
                                        </div>
                                        <p className="card-txt">
                                            실적 별로 전행 평균과 비교했을 때
                                            IRP 추가 불입에 대한 부분이 가장
                                            낮습니다. IRP 추가 불입 마케팅을
                                            진행해보시는 것을 추천 합니다.
                                        </p>
                                    </div>
                                    <div className="branch-card-bottom">
                                        <p className="exclamation-txt white-blue">
                                            전행 실적 평균 대비 점수가 낮은
                                            항목의 타겟 리스트 입니다.
                                        </p>
                                        <button type="button">타겟 추출</button>
                                    </div>
                                </div>
                                <div className="branch-card">
                                    <div className="card-tag">점주권</div>
                                    <div className="branch-card-top">
                                        <span className="point-tag">
                                            점주권 맞춤 Point
                                        </span>
                                        <div className="card-tit">
                                            <span className="card-tit-tag">
                                                IRP
                                            </span>
                                            경찰 대출 보유 고객 중 IRP 가망 고객
                                        </div>
                                        <p className="card-txt">
                                            지점별로 상위 30% 수준의 고가망
                                            고객들을 추려서 비교 해 보았을 때
                                            경찰 대출 보유 고객 중 IRP 가망
                                            고객에 해당되는 고객수가 타 지점
                                            대비 많습니다.
                                        </p>
                                    </div>
                                    <div className="branch-card-bottom">
                                        <p className="exclamation-txt white-orange">
                                            전행 실적 평균 대비 점수가 낮은
                                            항목의 타겟 리스트 입니다.
                                        </p>
                                        <button type="button">타겟 추출</button>
                                    </div>
                                </div>
                                <div className="branch-card">
                                    <div className="card-tag">트렌드</div>
                                    <div className="branch-card-top">
                                        <span className="point-tag">
                                            트렌드 Point
                                        </span>
                                        <div className="card-tit">
                                            <span className="card-tit-tag">
                                                외환
                                            </span>
                                            환전 가망 고객 타겟 리스트
                                        </div>
                                        <p className="card-txt">
                                            실적 별로 전행 평균과 비교 했을 때
                                            외환에 대한 부분이 낮습니다. 환전
                                            가망 고객을 진행해 보시는 걸
                                            추천합니다.
                                        </p>
                                    </div>
                                    <div className="branch-card-bottom">
                                        <p className="exclamation-txt white-green">
                                            전행 실적 평균 대비 점수가 낮은
                                            항목의 타겟 리스트 입니다.
                                        </p>
                                        <button type="button">타겟 추출</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="target-history-wrap">
                            <div className="target-history">
                                <h2 className="main-ank-tit">
                                    <a href="#">타겟 추출 내역</a>
                                </h2>
                                <div className="target-history-box">
                                    <div className="target-count">카드1</div>
                                    <div className="target-recent">
                                        <p className="target-recent-tit">
                                            최근 생성된 타겟
                                        </p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                                <div className="target-recent-info">
                                                    <span>김멀더</span>
                                                    <span>2024-02-22</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                                <div className="target-recent-info">
                                                    <span>김멀더</span>
                                                    <span>2024-02-22</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                                <div className="target-recent-info">
                                                    <span>김멀더</span>
                                                    <span>2024-02-22</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                                <div className="target-recent-info">
                                                    <span>김멀더</span>
                                                    <span>2024-02-22</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                                <div className="target-recent-info">
                                                    <span>김멀더</span>
                                                    <span>2024-02-22</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                                <div className="target-recent-info">
                                                    <span>김멀더</span>
                                                    <span>2024-02-22</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                                <div className="target-recent-info">
                                                    <span>김멀더</span>
                                                    <span>2024-02-22</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                                <div className="target-recent-info">
                                                    <span>김멀더</span>
                                                    <span>2024-02-22</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="model-history">
                                <h2 className="main-ank-tit">
                                    <a href="#">모델 생성 내역</a>
                                </h2>
                                <div className="model-history-box">
                                    <ul>
                                        <li>
                                            <span>승인요청</span>
                                            <em>1</em>
                                        </li>
                                        <li>
                                            <span>승인요청</span>
                                            <em>1</em>
                                        </li>
                                        <li>
                                            <span>승인요청</span>
                                            <em>1</em>
                                        </li>
                                        <li>
                                            <span>승인요청</span>
                                            <em>1</em>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="ai-model-notice">
                            <div>
                                <h2 className="main-ank-tit">
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
                                <li className="blue">
                                    개인형 IRP 가입 가능성 높은 고객 리스트
                                </li>
                                <li className="blue">
                                    주택담보대출 만기 도래 고객 리스트
                                </li>
                                <li className="blue">
                                    신용카드 발급 가능성 높은 고객 리스트
                                </li>
                                <li>예·적금 만기 도래 고객 리스트</li>
                                <li>펀드 투자 관심 고객 리스트</li>
                            </ol>
                        </div>
                        <div className="use-top-target">
                            <h2>사용량 TOP5 타겟 리스트</h2>
                            <ol>
                                <li className="blue">
                                    개인형 IRP 가입 가능성 높은 고객 리스트
                                </li>
                                <li className="blue">
                                    주택담보대출 만기 도래 고객 리스트
                                </li>
                                <li className="blue">
                                    신용카드 발급 가능성 높은 고객 리스트
                                </li>
                                <li>예·적금 만기 도래 고객 리스트</li>
                                <li>펀드 투자 관심 고객 리스트</li>
                            </ol>
                        </div>
                        <div className="use-top-target">
                            <h2>사용량 TOP5 타겟 리스트</h2>
                            <ol>
                                <li className="blue">
                                    개인형 IRP 가입 가능성 높은 고객 리스트
                                </li>
                                <li className="blue">
                                    주택담보대출 만기 도래 고객 리스트
                                </li>
                                <li className="blue">
                                    신용카드 발급 가능성 높은 고객 리스트
                                </li>
                                <li>예·적금 만기 도래 고객 리스트</li>
                                <li>펀드 투자 관심 고객 리스트</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
