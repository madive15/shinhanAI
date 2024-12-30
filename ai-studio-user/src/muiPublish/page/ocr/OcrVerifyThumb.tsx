// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Slider from "react-slick";

// need style
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Props type
export interface IPageProps {
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: OcrVerifyThumb
 * OcrVerifyThumb
 * ocr
 */
const OcrVerifyThumb: React.FC<IPageProps> = (props) => {
    const settings = {
        infinite: false,
        swipeToSlide: false,
        dot: false,
        arrows: false,
        touchMove: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        afterChange: (index: number) => {
            setCurrentSlide(index + 1);
        },
    };
    const [currentSlide, setCurrentSlide] = useState(1);
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
    const data = "/images/temp-ocr-verify.png";
    const data2 = "/images/temp-ocr-verify.png";
    return (
        <div className="ocr-verify-thumb">
            <div className="between-box">
                <h3>추천 리스트</h3>
            </div>
            <Slider
                ref={(slider) => (slideRef.current = slider)}
                className="thumb-box"
                {...settings}
            >
                <img src={data} alt="" />
                <img src={data2} alt="" />
            </Slider>
            <div className="slide-control">
                <button className="prev" onClick={previous}>
                    이전
                </button>
                <div className="pagination">{currentSlide}/2</div>
                <button className="next" onClick={next}>
                    다음
                </button>
                <button className="origin-view" onClick={next}>
                    원본 보기
                </button>
            </div>
        </div>
    );
};

export default OcrVerifyThumb;
