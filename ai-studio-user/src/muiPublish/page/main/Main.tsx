// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Bookmark } from "~assets/images/svg/Icons-Bookmark.svg";
import { ReactComponent as BookmarkOn } from "~assets/images/svg/Icons-Bookmark-on.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Tab from "~/muiPublish/components/Tab";
import Badge from "~/muiPublish/components/Badge";
import Checkbox from "@mui/material/Checkbox";
import Hash from "~/muiPublish/components/Hash";
import IconButton from "@mui/material/IconButton";
import Slider from "react-slick";
import Button from "@mui/material/Button";
// need style
import "~/muiPublish/layout/layout.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    const [exSkeleton, setExSkeleton] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };
    const [activeTab, setActiveTab] = useState(0);
    const [activeMainTab, setactiveMainTab] = useState(0);
    const [useTab, setUseTab] = useState(0);
    useEffect(() => {
        setLoading(false);
        setTimeout(() => {
            setExSkeleton(false);
        }, 1500);
    }, []);
    const tabMenu = ["HOME"];
    const skeletonCard = "/images/skeleton-card.png";
    const skeletonTarget = "/images/skeleton-target.png";
    const skeletonModel = "/images/skeleton-model.png";
    const skeletonStudio = "/images/skeleton-studio.png";
    const skeletonNotice = "/images/skeleton-notice.png";
    const skeletonTop = "/images/skeleton-top10.png";
    const skeletonBookmark = "/images/skeleton-bookmark.png";
    const skeletonsingle1 = "/images/skeleton-single1.png";
    const skeletonsingle2 = "/images/skeleton-single2.png";
    return (
        <>
            <div className="tabs-area">
                <Tab menuName={tabMenu} />
            </div>
            <div className="tabs-contents main-wrap">
                <div className="main-tab">
                    <button
                        type="button"
                        className={activeMainTab === 0 ? "active" : ""}
                        onClick={() => setactiveMainTab(0)}
                    >
                        개인
                    </button>
                    <button
                        type="button"
                        className={activeMainTab === 1 ? "active" : ""}
                        onClick={() => setactiveMainTab(1)}
                    >
                        기업
                    </button>
                </div>
                <div className="main-contents">
                    <div className="main-left">
                        {activeMainTab === 0 && (
                            <div className="branch-crm">
                                <h2 className="main-ank-tit">
                                    <a href="#">영업점 싱글뷰</a>
                                </h2>
                                {exSkeleton ? (
                                    <div className="branch-card-box">
                                        <img
                                            src={skeletonCard}
                                            alt="로딩 중"
                                            className="skeleton-img"
                                        />
                                    </div>
                                ) : (
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
                                                    실적 별로 전행 평균과
                                                    비교했을 때 IRP 추가 불입에
                                                    대한 부분이 가장 낮습니다.
                                                    IRP 추가 불입 마케팅을
                                                    진행해보시는 것을 추천
                                                    합니다.
                                                </p>
                                            </div>
                                            <div className="branch-card-bottom">
                                                <p className="exclamation-txt white-blue">
                                                    전행 실적 평균 대비 점수가
                                                    낮은 항목의 타겟 리스트
                                                    입니다.
                                                </p>
                                                <button type="button">
                                                    타겟 추출
                                                </button>
                                            </div>
                                        </div>
                                        <div className="branch-card">
                                            <div className="card-tag">
                                                점주권
                                            </div>
                                            <div className="branch-card-top">
                                                <span className="point-tag">
                                                    점주권 맞춤 Point
                                                </span>
                                                <div className="card-tit">
                                                    <span className="card-tit-tag">
                                                        IRP
                                                    </span>
                                                    경찰 대출 보유 고객 중 IRP
                                                    가망 고객
                                                </div>
                                                <p className="card-txt">
                                                    지점별로 상위 30% 수준의
                                                    고가망 고객들을 추려서 비교
                                                    해 보았을 때 경찰 대출 보유
                                                    고객 중 IRP 가망 고객에
                                                    해당되는 고객수가 타 지점
                                                    대비 많습니다.
                                                </p>
                                            </div>
                                            <div className="branch-card-bottom">
                                                <p className="exclamation-txt white-orange">
                                                    전행 실적 평균 대비 점수가
                                                    낮은 항목의 타겟 리스트
                                                    입니다.
                                                </p>
                                                <button type="button">
                                                    타겟 추출
                                                </button>
                                            </div>
                                        </div>
                                        <div className="branch-card">
                                            <div className="card-tag">
                                                트렌드
                                            </div>
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
                                                    실적 별로 전행 평균과 비교
                                                    했을 때 외환에 대한 부분이
                                                    낮습니다. 환전 가망 고객을
                                                    진행해 보시는 걸 추천합니다.
                                                </p>
                                            </div>
                                            <div className="branch-card-bottom">
                                                <p className="exclamation-txt white-green">
                                                    전행 실적 평균 대비 점수가
                                                    낮은 항목의 타겟 리스트
                                                    입니다.
                                                </p>
                                                <button type="button">
                                                    타겟 추출
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {activeMainTab === 1 && (
                            <div className="branch-crm">
                                <h2 className="main-ank-tit">
                                    <a href="#">기업 고객 싱글뷰</a>
                                </h2>
                                <div className="single-box-wrap">
                                    {exSkeleton ? (
                                        <div className="single-ai-box">
                                            <img
                                                src={skeletonsingle1}
                                                alt="로딩 중"
                                                className="skeleton-img"
                                            />
                                        </div>
                                    ) : (
                                        <div className="single-ai-box">
                                            <div className="single-box-content">
                                                <div className="single-box">
                                                    <div className="single-view-box blue">
                                                        <div className="left">
                                                            <Badge
                                                                value="Profile 기반"
                                                                color="blue3"
                                                            />
                                                            <strong>
                                                                기업
                                                                퇴직연금DC형
                                                                신규 기업
                                                                퇴직연금DC형
                                                                신규
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-box">
                                                    <div className="single-view-box blue">
                                                        <div className="left">
                                                            <Badge
                                                                value="맥락 기반"
                                                                color="blue3"
                                                            />
                                                            <strong>
                                                                SOL 트래블 카드
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-box">
                                                    <div className="single-view-box blue">
                                                        <div className="left">
                                                            <Badge
                                                                value="전략 상품"
                                                                color="blue3"
                                                            />
                                                            <strong>
                                                                퇴직연금 IRP
                                                                추가 불입
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="between-box">
                                                <div className="single-box-txt">
                                                    <strong>
                                                        우선순위가 높은
                                                        타겟리스트입니다.
                                                    </strong>
                                                    <p>
                                                        지표 수준, 평가항목
                                                        중요도 등을 종합
                                                        고려하여 평가항목 관련
                                                        타겟리스트 중 추천 상위
                                                        3개의 항목입니다.
                                                    </p>
                                                </div>
                                                <Button variant="primary">
                                                    Sprut 연계
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                    {exSkeleton ? (
                                        <div className="single-ai-box">
                                            <img
                                                src={skeletonsingle2}
                                                alt="로딩 중"
                                                className="skeleton-img"
                                            />
                                        </div>
                                    ) : (
                                        <div className="single-box-content repeat-two">
                                            <div className="single-box">
                                                <div className="single-view-box">
                                                    <div className="left">
                                                        <Badge
                                                            value="건전성"
                                                            color="black"
                                                        />
                                                        <strong>
                                                            기업연체예측 관리
                                                        </strong>
                                                    </div>
                                                    <Button variant="smallSub1">
                                                        타겟 추출
                                                    </Button>
                                                </div>
                                                <div className="single-box-txt">
                                                    <strong>
                                                        기업의 연체가
                                                        예측됩니다.
                                                    </strong>
                                                    <div className="single-box-tip">
                                                        <p>
                                                            기업의 연체가 되지
                                                            않도록 각별한 주의가
                                                            필요합니다.
                                                        </p>
                                                        <div className="tip-box">
                                                            기업의 연체가 되지
                                                            않도록 각별한 주의가
                                                            필요합니다.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-box">
                                                <div className="single-view-box">
                                                    <div className="left">
                                                        <Badge
                                                            value="RM OneTeam"
                                                            color="black"
                                                        />

                                                        <strong>
                                                            BB+ 법인 중 CEO 예측
                                                            BB+ 법인 중 CEO 예측
                                                        </strong>
                                                    </div>
                                                    <Button variant="smallSub1">
                                                        타겟 추출
                                                    </Button>
                                                </div>
                                                <div className="single-box-txt">
                                                    <strong>
                                                        종합 솔루션 타겟
                                                        리스트입니다.
                                                    </strong>
                                                    <div className="single-box-tip">
                                                        <p>
                                                            종합 솔루션 타겟
                                                            리스트입니다.
                                                        </p>
                                                        <div className="tip-box">
                                                            종합 솔루션 타겟
                                                            리스트입니다.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="target-model-wrap">
                            {exSkeleton ? (
                                <div className="target-history">
                                    <h2 className="main-ank-tit">
                                        <a href="#">타겟 추출 내역</a>
                                    </h2>
                                    <img
                                        src={skeletonTarget}
                                        alt="로딩 중"
                                        className="skeleton-img"
                                    />
                                </div>
                            ) : (
                                <div className="target-history">
                                    <h2 className="main-ank-tit">
                                        <a href="#">타겟 추출 내역</a>
                                    </h2>
                                    <div className="target-history-box">
                                        <div className="target-count">
                                            <p>
                                                최근 3개월 동안 <br />
                                                추출 하신 타겟 수
                                            </p>
                                            <em>
                                                9999<span>개</span>
                                            </em>
                                        </div>
                                        <div className="target-recent">
                                            <p className="target-history-tit ">
                                                최근 생성된 타겟
                                            </p>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        개인형 IRP 가입 가능성
                                                        높은 고객 개인형 IRP
                                                        가입 가능성 높은 고객
                                                        개인형 IRP 가입 가능성
                                                        높은 고객
                                                    </a>
                                                    <div className="target-recent-info">
                                                        <span>김멀더</span>
                                                        <span>2024-02-22</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        개인형 IRP 가입 가능성
                                                        높은 고객
                                                    </a>
                                                    <div className="target-recent-info">
                                                        <span>김멀더</span>
                                                        <span>2024-02-22</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        개인형 IRP 가입 가능성
                                                        높은 고객
                                                    </a>
                                                    <div className="target-recent-info">
                                                        <span>김멀더</span>
                                                        <span>2024-02-22</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        개인형 IRP 가입 가능성
                                                        높은 고객
                                                    </a>
                                                    <div className="target-recent-info">
                                                        <span>김멀더</span>
                                                        <span>2024-02-22</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        개인형 IRP 가입 가능성
                                                        높은 고객
                                                    </a>
                                                    <div className="target-recent-info">
                                                        <span>김멀더</span>
                                                        <span>2024-02-22</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        개인형 IRP 가입 가능성
                                                        높은 고객
                                                    </a>
                                                    <div className="target-recent-info">
                                                        <span>김멀더</span>
                                                        <span>2024-02-22</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        개인형 IRP 가입 가능성
                                                        높은 고객
                                                    </a>
                                                    <div className="target-recent-info">
                                                        <span>김멀더</span>
                                                        <span>2024-02-22</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        개인형 IRP 가입 가능성
                                                        높은 고객
                                                    </a>
                                                    <div className="target-recent-info">
                                                        <span>김멀더</span>
                                                        <span>2024-02-22</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="target-history-box type2">
                                    <p className="target-history-tit ">
                                        타겟 추출 후 마케팅에 이용해 보세요
                                    </p>
                                    <div className="card-box-wrap">
                                        <div className="card-box">
                                            <a href="#" className="">
                                                <div className="book-mark">
                                                    <Checkbox
                                                        className="book-mark"
                                                        icon={<Bookmark />}
                                                        checkedIcon={
                                                            <BookmarkOn />
                                                        }
                                                        defaultChecked
                                                    />
                                                </div>
                                                <div className="badge-wrap">
                                                    <Badge
                                                        value="중분류중분류중분류"
                                                        color="navy "
                                                        classifi={true}
                                                    />
                                                </div>
                                                <p className="card-box-tit">
                                                    <strong>
                                                        프리빌트 된 항목에
                                                        대한제제제제제제제
                                                    </strong>
                                                </p>
                                                <p className="card-box-desc">
                                                    프리빌트된 항목에 대한
                                                    간략한 설명이 들어갑니다.
                                                    최대 2줄 까지 들어갑니다. 그
                                                    이후에는 말줄임표로
                                                    생략됩니다.
                                                </p>
                                                <div className="card-box-bottom">
                                                    <IconButton className="ico-circle20">
                                                        <Search12 />
                                                    </IconButton>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-box">
                                            <a href="#" className="">
                                                <div className="book-mark">
                                                    <Checkbox
                                                        className="book-mark"
                                                        icon={<Bookmark />}
                                                        checkedIcon={
                                                            <BookmarkOn />
                                                        }
                                                        defaultChecked
                                                    />
                                                </div>
                                                <div className="badge-wrap">
                                                    <Badge
                                                        value="중분류"
                                                        color="navy "
                                                        classifi={true}
                                                    />
                                                </div>
                                                <p className="card-box-tit">
                                                    <strong>
                                                        프리빌트 된 항목에
                                                        대한제제제제제제제
                                                    </strong>
                                                </p>
                                                <p className="card-box-desc">
                                                    프리빌트된 항목에 대한
                                                    간략한 설명이 들어갑니다.
                                                    최대 2줄 까지 들어갑니다. 그
                                                    이후에는 말줄임표로
                                                    생략됩니다.
                                                </p>
                                                <div className="card-box-bottom">
                                                    <IconButton className="ico-circle20">
                                                        <Search12 />
                                                    </IconButton>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="card-box">
                                            <a href="#" className="">
                                                <div className="book-mark">
                                                    <Checkbox
                                                        className="book-mark"
                                                        icon={<Bookmark />}
                                                        checkedIcon={
                                                            <BookmarkOn />
                                                        }
                                                        defaultChecked
                                                    />
                                                </div>
                                                <div className="badge-wrap">
                                                    <Badge
                                                        value="중분류"
                                                        color="navy "
                                                        classifi={true}
                                                    />
                                                </div>
                                                <p className="card-box-tit">
                                                    <strong>
                                                        프리빌트 된 항목에
                                                        대한제제제제제제제
                                                    </strong>
                                                </p>
                                                <p className="card-box-desc">
                                                    프리빌트된 항목에 대한
                                                    간략한 설명이 들어갑니다.
                                                    최대 2줄 까지 들어갑니다. 그
                                                    이후에는 말줄임표로
                                                    생략됩니다.
                                                </p>
                                                <div className="card-box-bottom">
                                                    <IconButton className="ico-circle20">
                                                        <Search12 />
                                                    </IconButton>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                            )}
                            {exSkeleton ? (
                                <div className="model-history">
                                    <h2 className="main-ank-tit">
                                        <a href="#">모델 생성 내역</a>
                                    </h2>
                                    <img
                                        src={skeletonModel}
                                        alt="로딩 중"
                                        className="skeleton-img"
                                    />
                                </div>
                            ) : (
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
                                                <em>26</em>
                                            </li>
                                            <li>
                                                <span>승인요청</span>
                                                <em>1</em>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="studio-notice-wrap">
                            {exSkeleton ? (
                                <div className="studio-box">
                                    <img
                                        src={skeletonStudio}
                                        alt="로딩 중"
                                        className="skeleton-img"
                                    />
                                </div>
                            ) : (
                                <div className="studio-box">
                                    <h2 className="main-ank-tit">
                                        AI Studio 현황
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className="top">프리빌트</div>
                                            <div className="bottom">
                                                <Badge
                                                    value="+12"
                                                    color="green"
                                                    size="large"
                                                />
                                                <div className="studio-current-count">
                                                    <sup>전체</sup>
                                                    <em>224</em>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="top">모델</div>
                                            <div className="bottom">
                                                <Badge
                                                    value="-5"
                                                    color="red"
                                                    size="large"
                                                />
                                                <div className="studio-current-count">
                                                    <sup>전체</sup>
                                                    <em>224</em>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="top">지수</div>
                                            <div className="bottom">
                                                <Badge
                                                    value="변동없음"
                                                    color="gray"
                                                    size="large"
                                                />
                                                <div className="studio-current-count">
                                                    <sup>전체</sup>
                                                    <em>224</em>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="top">필터</div>
                                            <div className="bottom">
                                                <Badge
                                                    value="+5"
                                                    color="green"
                                                    size="large"
                                                />
                                                <div className="studio-current-count">
                                                    <sup>전체</sup>
                                                    <em>224</em>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            {exSkeleton ? (
                                <div className="notice-task-box">
                                    <img
                                        src={skeletonNotice}
                                        alt="로딩 중"
                                        className="skeleton-img"
                                    />
                                </div>
                            ) : (
                                <div className="notice-task-box">
                                    <div className="contents-tab">
                                        <button
                                            type="button"
                                            className={
                                                activeTab === 0 ? "active" : ""
                                            }
                                            onClick={() => setActiveTab(0)}
                                        >
                                            공지
                                        </button>
                                        <button
                                            type="button"
                                            className={
                                                activeTab === 1 ? "active" : ""
                                            }
                                            onClick={() => setActiveTab(1)}
                                        >
                                            과제신청
                                        </button>
                                    </div>
                                    {activeTab === 0 && (
                                        <div className="contents-tab-panel">
                                            <ul className="notice-task-list">
                                                <li className="top-fixed">
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검 AI STUODIO
                                                            서비스 점검 AI
                                                            STUODIO 서비스 점검
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li className="top-fixed">
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            AI STUODIO 서비스
                                                            점검
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                    {activeTab === 1 && (
                                        <div className="contents-tab-panel">
                                            <ul className="notice-task-list">
                                                <li>
                                                    <a href="#">
                                                        <span className="txt is-file">
                                                            SOHO 우량고객 이탈
                                                            예측 과제 SOHO
                                                            우량고객 이탈 예측
                                                            과제 SOHO 우량고객
                                                            이탈 예측 과제 SOHO
                                                            우량고객 이탈 예측
                                                            과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="txt">
                                                            SOHO 우량고객 이탈
                                                            예측 과제
                                                        </span>
                                                    </a>
                                                    <span className="status-txt">
                                                        2024-02-22
                                                    </span>
                                                </li>
                                            </ul>
                                            {/* 데이터 없을때 */}
                                            {/* <div className="no-task">
                                            <p>과제신청 내역이 없습니다.</p>
                                        </div> */}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="main-right">
                        {exSkeleton ? (
                            <div className="use-top-target">
                                <img
                                    src={skeletonTop}
                                    alt="로딩 중"
                                    className="skeleton-img"
                                />
                            </div>
                        ) : (
                            <div className="use-top-target">
                                <h2>타겟 추출 사용량 TOP 10 </h2>
                                <div className="contents-tab">
                                    <button
                                        type="button"
                                        className={useTab === 0 ? "active" : ""}
                                        onClick={() => setUseTab(0)}
                                    >
                                        프리빌트
                                    </button>
                                    <button
                                        type="button"
                                        className={useTab === 1 ? "active" : ""}
                                        onClick={() => setUseTab(1)}
                                    >
                                        모델
                                    </button>
                                    <button
                                        type="button"
                                        className={useTab === 2 ? "active" : ""}
                                        onClick={() => setUseTab(2)}
                                    >
                                        지수
                                    </button>
                                    <button
                                        type="button"
                                        className={useTab === 3 ? "active" : ""}
                                        onClick={() => setUseTab(3)}
                                    >
                                        필터
                                    </button>
                                </div>
                                {useTab === 0 && (
                                    <div className="use-order-list-wrap">
                                        <ol className="use-order-list">
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객 개인형 IRP 가입 가능성
                                                    높은 고객 개인형 IRP 가입
                                                    가능성 높은 고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                        </ol>
                                    </div>
                                )}
                                {useTab === 1 && (
                                    <div className="use-order-list-wrap">
                                        <ol className="use-order-list">
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                        </ol>
                                    </div>
                                )}
                                {useTab === 2 && (
                                    <div className="use-order-list-wrap">
                                        <ol className="use-order-list">
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                        </ol>
                                    </div>
                                )}
                                {useTab === 3 && (
                                    <div className="use-order-list-wrap">
                                        <ol className="use-order-list">
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                            <li className="use-order-item">
                                                <a href="#">
                                                    개인형 IRP 가입 가능성 높은
                                                    고객
                                                </a>
                                            </li>
                                        </ol>
                                    </div>
                                )}
                            </div>
                        )}
                        {exSkeleton ? (
                            <div className="use-bookmark">
                                <img
                                    src={skeletonBookmark}
                                    alt="로딩 중"
                                    className="skeleton-img"
                                />
                            </div>
                        ) : (
                            <div className="use-bookmark">
                                <h2 className="main-ank-tit">
                                    <a href="#">즐겨 찾기</a>
                                </h2>
                                <ul className="use-bookmark-list">
                                    <li className="use-bookmark-item">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<Bookmark />}
                                            checkedIcon={<BookmarkOn />}
                                            defaultChecked
                                        />
                                        <a href="#">
                                            대출 상환 완료 모델대출 상환 완료
                                            모델대출 상환 완료 모델대출 상환
                                            완료 모델
                                        </a>
                                    </li>
                                    <li className="use-bookmark-item">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<Bookmark />}
                                            checkedIcon={<BookmarkOn />}
                                            defaultChecked
                                        />
                                        <a href="#">대출 상환 완료 모델</a>
                                    </li>
                                    <li className="use-bookmark-item">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<Bookmark />}
                                            checkedIcon={<BookmarkOn />}
                                            defaultChecked
                                        />
                                        <a href="#">대출 상환 완료 모델</a>
                                    </li>
                                    <li className="use-bookmark-item">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<Bookmark />}
                                            checkedIcon={<BookmarkOn />}
                                            defaultChecked
                                        />
                                        <a href="#">대출 상환 완료 모델</a>
                                    </li>
                                    <li className="use-bookmark-item">
                                        <Checkbox
                                            className="book-mark"
                                            icon={<Bookmark />}
                                            checkedIcon={<BookmarkOn />}
                                            defaultChecked
                                        />
                                        <a href="#">대출 상환 완료 모델</a>
                                    </li>
                                </ul>
                                {/* <div className="no-bookmark">
                                <p>
                                    자주 사용하는 지수나 모델을 즐겨찾기
                                    해보세요
                                </p>
                            </div> */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
