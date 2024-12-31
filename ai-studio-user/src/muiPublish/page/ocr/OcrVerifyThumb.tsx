// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
// need content
import Slider from "react-slick";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
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

    const [popupStauts, setpopupStauts] = React.useState(false);
    const popupOpen = () => {
        setpopupStauts(true);
    };
    const popupClose = () => {
        setpopupStauts(false);
    };
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
                <button className="origin-view" onClick={popupOpen}>
                    원본 보기
                </button>
            </div>
            {/* 레이어팝업 */}
            <Dialog
                className="layer-box xx-large"
                open={popupStauts}
                onClose={popupClose}
            >
                <DialogTitle>AI-OCR검증 원본보기</DialogTitle>
                <DialogContent>
                    <img src={data} alt="" />
                </DialogContent>
                {/* <DialogActions>
                    <Button variant="sub2" onClick={popupClose}>
                        닫기
                    </Button>
                    <Button variant="primary">확인</Button>
                </DialogActions> */}
                <IconButton
                    className="dialog-close ico-rect23 x"
                    onClick={popupClose}
                >
                    <Plus9 />
                </IconButton>
            </Dialog>
        </div>
    );
};

export default OcrVerifyThumb;
