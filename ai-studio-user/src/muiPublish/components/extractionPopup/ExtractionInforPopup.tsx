// necessary set
import React, { useRef } from "react";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Slider from "react-slick";

// need content
import extractionInforPopup1 from "~assets/images/extractionInforPopup1.png";
import extractionInforPopup2 from "~assets/images/extractionInforPopup2.png";
import extractionInforPopup3 from "~assets/images/extractionInforPopup3.png";
import extractionInforPopup4 from "~assets/images/extractionInforPopup4.png";

// need style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Props type

/**
 * @author shinhanAI
 * @description
 * user-front: ExtractionInforPopup
 * ExtractionInforPopup
 * 직접추출 소개 팝업
 *
 */
const ExtractionInforPopup = (props: any) => {
    const [popupStauts, setPopupStauts] = React.useState(true);
    const popupOpen = () => {
        setPopupStauts(true);
    };
    const popupClose = () => {
        setPopupStauts(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <Dialog className="layer-box semi-large" open={popupStauts} onClose={popupClose}>
            <DialogContent className="extra-infor-popup" style={{ overflow: "hidden" }}>
                <Slider ref={(slider) => (slideRef.current = slider)} {...settings}>
                    <div>
                        <p className="tit">01</p>
                        <p className="tit2">AI가 상품/업무별 가망 고객을 추천해드려요</p>
                        <p className="tit3">
                            흩어져 있는 정보를 조합하여 원하는 상품/업무의 타겟 고객 리스트를 만들어보세요.
                        </p>
                        <p>
                            <img src={`${extractionInforPopup1}`} />
                        </p>
                    </div>
                    <div>
                        <p className="tit">02</p>
                        <p className="tit2">AI가 상품/업무별 가망 고객을 추천해드려요</p>
                        <p className="tit3">
                            흩어져 있는 정보를 조합하여 원하는 상품/업무의 타겟 고객 리스트를 만들어보세요.
                        </p>
                        <p>
                            <img src={`${extractionInforPopup2}`} />
                        </p>
                    </div>
                    <div>
                        <p className="tit">03</p>
                        <p className="tit2">AI가 상품/업무별 가망 고객을 추천해드려요</p>
                        <p className="tit3">
                            흩어져 있는 정보를 조합하여 원하는 상품/업무의 타겟 고객 리스트를 만들어보세요.
                        </p>
                        <p>
                            <img src={`${extractionInforPopup3}`} />
                        </p>
                    </div>
                    <div>
                        <p className="tit">04</p>
                        <p className="tit2">AI가 상품/업무별 가망 고객을 추천해드려요</p>
                        <p className="tit3">
                            흩어져 있는 정보를 조합하여 원하는 상품/업무의 타겟 고객 리스트를 만들어보세요.
                        </p>
                        <p>
                            <img src={`${extractionInforPopup4}`} />
                        </p>
                    </div>
                </Slider>
            </DialogContent>
            <DialogActions className="extra-infor-btn">
                <FormGroup row className="chk-group">
                    <FormControlLabel
                        control={<Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />}
                        label="다시 보지 않기"
                    />
                </FormGroup>
                <div>
                    <Button variant="sub1" className="prev" onClick={previous}>
                        이전
                    </Button>
                    <Button variant="sub1" className="next" onClick={next}>
                        다음
                    </Button>
                    <Button variant="primary" onClick={popupClose}>
                        닫기
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default ExtractionInforPopup;
