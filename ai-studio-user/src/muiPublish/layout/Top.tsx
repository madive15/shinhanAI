// necessary set
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoPath from "~assets/images/admin_logo.png";
import { ReactComponent as Search } from "~assets/images/svg/icon_search.svg";
import { ReactComponent as Close } from "~assets/images/svg/icon_close.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

// need style

/**
 * @author shinhanAI
 * @description
 * user-front: top GNB
 * user top gnb
 */

const Top: React.FC<IPageProps> = (props) => {
    const [openClose, setOpenClose] = useState<boolean>(false);

    return (
        <header>
            <div className="top-content">
                <div className="search" onClick={() => setOpenClose(!openClose)}>
                    <IconButton type="button" aria-label="search" className="icon-search">
                        {openClose ? <Close /> : <Search />}
                    </IconButton>
                </div>
                <div className="user-setting">
                    <span className="go-admin">AI Studio 관리자 바로가기</span>
                    <span className="go-mini">AI Studio Mini</span>
                    <span className="nick-name">
                        <em>김멀더</em>
                    </span>
                </div>
            </div>

            <div className={openClose === true ? "search-layer open" : "search-layer"}>
                <div className="search-box">
                    <TextField hiddenLabel variant="outlined" placeholder="메뉴검색" />
                </div>
            </div>
        </header>
    );
};

export default Top;
