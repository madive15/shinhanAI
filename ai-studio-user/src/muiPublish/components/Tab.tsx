// necessary set
import React, { useState, useRef } from "react";
import { ReactComponent as ArrowRight } from "~assets/images/svg/icon_arrow_right2.svg";
import { ReactComponent as ArrowLeft } from "~assets/images/svg/icon_arrow_left2.svg";
import Slider from "react-slick";

// need style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./tab.scss";

/**
 * @author shinhanAI
 * @description
 * user-front: user Tab
 * user Tab page
 * 전체 탭
 */
const Tab = ({ menuName, ...props }: any) => {
    const settings = {
        infinite: false,
        variableWidth: true,
        swipeToSlide: false,
        dot: false,
        arrows: false,
        touchMove: false,
        afterChange: function (index: any) {
            // console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const tabActive = (i: number) => {
        setActiveIndex(i);
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

    return (
        <div className="tab">
            <Slider ref={(slider) => (slideRef.current = slider)} className="tab-box" {...settings}>
                {menuName.map((v: any, i: number) => {
                    return (
                        <div key={i} className={activeIndex == i ? "tab-content active" : "tab-content"}>
                            <a href="#" onClick={() => tabActive(i)}>
                                {v}
                                {i !== 0 && (
                                    <button type="button" className="admin-tab-btn">
                                        닫기
                                    </button>
                                )}
                            </a>
                        </div>
                    );
                })}
            </Slider>
            <div className="btn-slider">
                <button className="prev" onClick={previous}>
                    <ArrowLeft fill="#00236E" />{" "}
                </button>
                <button className="next" onClick={next}>
                    <ArrowRight fill="#00236E" />{" "}
                </button>
                {/*  */}
                <button className="all-close">전체 닫기</button>
            </div>
        </div>
    );
};

export default Tab;
