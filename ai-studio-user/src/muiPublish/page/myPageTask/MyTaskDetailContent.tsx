// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as DownloadBlue } from "~assets/images/svg/icons-download-blue.svg";

// need content
import Button from "@mui/material/Button";
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
 * admin-front: MyTaskDetailContent
 * MyTaskDetailContent
 */
const MyTaskDetailContent: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const [showAll, setShowAll] = useState<boolean>(false);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="board-detail-content ">
            <h3>과제 진행 내용</h3>
            <div className="board-detail-tit">
                <Badge value="과제종료" color="gray" type="line" />
                <strong>SOHO 우량고객 이탈 예측 과제</strong>
            </div>
            <div className="board-detail-info">
                <p className="name">
                    <span>작성자</span>
                    <span>김멀더</span>
                </p>
                <p className="date">
                    <span>등록일</span>
                    <span>2024-11-25</span>
                </p>
                <p className="view">
                    <span>조회수</span>
                    <span>10</span>
                </p>
            </div>
            <div className="ql-editor">
                <p>
                    <strong>1.프로젝트명</strong> : 프로젝트명을 입력해주세요.
                    <br />
                    예) SOHO 우량고객 이탈 예측
                </p>
                <br />
                <p>
                    <strong>2.담당자</strong> : 부서명, 직급/성함을
                    입력해주세요.
                    <br />
                    예) 디지털전략부 김신한 수석
                </p>
                <br />
                <p>
                    <strong>3.추진배경</strong> : 프로젝트 목적을 입력해주세요.
                    <br />
                    예) SOHO 우량고객 이탈 예측을 통한 사전 관리로 전행 수익성
                    제고 및 업무효율화
                </p>
                <br />
                <p>
                    <strong>4.추진요건</strong> : 과제를 수행하는데 필요한
                    요건들을 상세히 기술해주세요.
                    <br />
                    예) 최근 3개월 이내 SOHO 우량고객의 여신 이탈 확률을 예측
                    <br />
                    - 예측 대상 : SOHO 우량고객
                    <br />
                    - 예측 목표 : 이탈여부
                    <br />
                    - 예측 범위 : 최근 3개월 이내
                    <br />
                    - 기준
                    <br />
                    &nbsp - 분석대상 고객 : 활동성 고객
                    <br />
                    &nbsp - 이탈여부 : 여신 이탈 시 이탈로 정의
                    <br />
                    &nbsp - 우량기준 : 잔액 1억원 이상
                </p>
                <br />
                <p>
                    <strong>5.활용방안</strong>
                    <br />
                    활용채널 : 예) 통합단말
                    <br />
                    활용주기 : 예) 매월
                    <br />
                    배포대상 : 예) 대직원, 전체고객, SOHO 고객, PWM 예상 가능
                    고객 등
                </p>
                <br />
                <p>
                    <strong>6.정성적 기대효과</strong> : 과제 수행 시 예쌍되는
                    기대효과를 정성적 측면에서 작성해주세요
                </p>
                <br />
                <p>
                    <strong>7.정량적 기대효과</strong>
                    <br />- 수익창출 예) 연 평균 ooo 원 절감 가능 - 인력효율화
                    (시간절감) 예) 연 평균 ooo 시간 절감 가능
                </p>
                <br />
                <p>
                    <strong>8.성과평가</strong>
                    <br />
                    - 이행 후 AI 서비스 성과평가, 성과측정 기준 및 지표 <br />-
                    "AI SOHO 우량고객 여신 이탈 예층모델" 활용 이전 대비 활용 후{" "}
                    <u>접촉고객 중 이탈률 감소</u>로 성과 평가
                </p>
                <br />
                <p>
                    <strong>9.완료기한</strong> : 과제 완료 요청기한을
                    입력해주세요
                </p>
                <br />
                <p>
                    <strong>10.기타</strong> : 기타 필요한 사항을 입력해주세요
                </p>
            </div>
            <div className="board-detail-file">
                <span>첨부파일</span>
                <div className="file-list">
                    <Button variant="iconLineBlue" endIcon={<DownloadBlue />}>
                        과제명파일명.png
                    </Button>
                    <Button variant="iconLineBlue" endIcon={<DownloadBlue />}>
                        과제명파일명.png
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default MyTaskDetailContent;
