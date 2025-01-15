// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ArrowRight } from "~assets/images/svg/icon_arrow_right2.svg";
import { ReactComponent as ArrowLeft } from "~assets/images/svg/icon_arrow_left2.svg";
import { ReactComponent as Bookmark } from "~assets/images/svg/Icons-Bookmark.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";
import { ReactComponent as BookmarkOn } from "~assets/images/svg/Icons-Bookmark-on.svg";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Slider from "react-slick";

// need content
import Loading from "~/muiPublish/loading/Loading";
import NoData from "~/muiPublish/components/noData/noData";
import Badge from "~/muiPublish/components/Badge";
import Hash from "~/muiPublish/components/Hash";

// need style
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
 * user-front: SearchSlider
 * SearchSlider
 */
const SearchSlider: React.FC<IPageProps> = (props) => {
    const settings = {
        infinite: true,
        variableWidth: true,
        swipeToSlide: false,
        dot: false,
        arrows: false,
        touchMove: false,
        afterChange: function (index: any) {
            // console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    const slideRef = useRef<Slider | null>();

    const previous = () => {
        if (slideRef.current) {
            slideRef.current.slickPrev();
        }
    };

    const next = () => {
        if (slideRef.current) {
            slideRef.current.slickNext();
        }
    };

    const tumbnail: any[] = [
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
    ];

    return (
        <>
            <div className="recom-list">
                <div className="recom-tit">추천 타겟 리스트</div>
                {tumbnail.length > 0 ? (
                    <>
                        <Slider
                            ref={(slider) => (slideRef.current = slider)}
                            className="recom-list-box"
                            {...settings}
                        >
                            {[1, 2, 3, 4, 5].map((v: any, i: number) => {
                                return (
                                    <div className="card-box" key={i}>
                                        <a href="#" className="">
                                            <div className="book-mark">
                                                <Checkbox
                                                    className="book-mark"
                                                    icon={<Bookmark />}
                                                    checkedIcon={<BookmarkOn />}
                                                    defaultChecked
                                                />
                                            </div>
                                            <div className="badge-wrap">
                                                <Badge
                                                    value="전략"
                                                    color="black "
                                                />
                                                <Badge
                                                    value="중분류"
                                                    color="navy "
                                                />
                                                <Badge value="N" color="red" />
                                            </div>
                                            <p className="card-box-tit">
                                                <strong>
                                                    프리빌트 된 항목에
                                                    대한제제제제제제제
                                                </strong>
                                            </p>
                                            <p className="card-box-desc">
                                                프리빌트된 항목에 대한 간략한
                                                설명이 들어갑니다. 최대 2줄 까지
                                                들어갑니다. 그 이후에는
                                                말줄임표로 생략됩니다.
                                            </p>
                                            <div className="card-box-bottom">
                                                <div className="hash-wrap">
                                                    <Hash
                                                        value="#TAG"
                                                        type="type2"
                                                    />
                                                    <Hash
                                                        value="#TAG"
                                                        type="type2"
                                                    />
                                                    <Hash
                                                        value="#TAG"
                                                        type="type2"
                                                    />
                                                    <Hash
                                                        value="+5"
                                                        type="type2"
                                                    />
                                                </div>
                                                <IconButton className="ico-circle20">
                                                    <Search12 />
                                                </IconButton>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </Slider>
                        <button className="prev" onClick={previous}>
                            <ArrowLeft fill="#fff" />{" "}
                        </button>
                        <button className="next" onClick={next}>
                            <ArrowRight fill="#fff" />{" "}
                        </button>
                    </>
                ) : (
                    <NoData pageName={"타겟추출리스트"} />
                )}
            </div>
        </>
    );
};

export default SearchSlider;
