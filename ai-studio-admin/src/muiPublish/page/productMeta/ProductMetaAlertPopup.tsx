// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";

// need style
import "~/muiPublish/layout/layout.scss";
import { Typography } from "@mui/material";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    alertStauts: boolean;
    setAlertStauts: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: ProductMeta
 * 상품메타관리 page
 */
const ProductMetaAlertPopup: React.FC<IPageProps> = (props) => {
    const alertClose = () => {
        props.setAlertStauts(false);
    };

    return (
        <Dialog className="alert-box" open={props.alertStauts} onClose={alertClose}>
            <DialogContent>
                <Typography className="alert-txt">저장이 완료 되었습니다.</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="sub2" onClick={alertClose}>
                    닫기
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductMetaAlertPopup;
