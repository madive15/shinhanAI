// necessary set
import React from "react";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
import IconButton from "@mui/material/IconButton";

// need content
import Hash from "~/muiPublish/components/Hash";
import ModelAddPopup from "~/muiPublish/components/modelIndexFilter/ModelAddPopup";

// need style

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
 * user-front: TargetAddArea
 * TargetAddArea page
 * 선택한 추출 컨텐츠
 */
const TargetAddArea: React.FC<IPageProps> = (props) => {
    const [popupStauts, setPopupStauts] = React.useState(false);
    const popupOpen = () => {
        setPopupStauts(true);
    };
    const popupClose = () => {
        setPopupStauts(false);
    };

    return (
        <>
            <ModelAddPopup popupStauts={popupStauts} popupClose={popupClose} />
            <div className="target-add-area">
                <div className="target-add-box" onClick={popupOpen}>
                    <IconButton className="ico-rect23">
                        <Plus9 />
                    </IconButton>
                    <p>모델 추가</p>
                </div>
                <div className="target-add-box">
                    <IconButton className="ico-rect23">
                        <Plus9 />
                    </IconButton>
                    <p>지수 추가</p>
                </div>
                <div className="target-add-box">
                    <IconButton className="ico-rect23">
                        <Plus9 />
                    </IconButton>
                    <p>고객 필터 조건 추가</p>
                </div>
            </div>
        </>
    );
};

export default TargetAddArea;
