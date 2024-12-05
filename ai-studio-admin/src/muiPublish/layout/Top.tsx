// necessary set
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoPath from "~assets/images/admin_logo.png";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";
import { ReactComponent as Setting } from "~assets/images/svg/Icons-set.svg";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

// import Button from "~/publish/components/Button";

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
 * admin-front: top GNB
 * admin top gnb
 */

const Top: React.FC<IPageProps> = (props) => {
    // console.log('Top pageName ===>', props.pageName)
    // console.log('Top subName ===>', props.subName)
    // const testLogout = () => {
    //   window.sessionStorage.removeItem('authToken')
    //   window.location.href = '/'
    // }

    return (
        <header>
            <h1 className="logo">
                <NavLink to={"/"}>
                    <img src={logoPath} alt="logo" />
                </NavLink>
            </h1>
            <div className="top-content">
                <div className="search">
                    <TextField hiddenLabel variant="outlined" placeholder="메뉴검색" />
                    <IconButton type="button" aria-label="search" className="icon-search">
                        <Search />
                    </IconButton>
                </div>
                <div className="user-setting">
                    <div className="user-time">
                        <span>59:59</span>
                        <IconButton type="button" aria-label="시간연장">
                            시간연장
                        </IconButton>
                    </div>
                    <span className="nick-name">
                        <em>김멀더(MulderKim)</em> 님
                    </span>
                    <span className="setting-box">
                        <IconButton type="button" aria-label="search" className="icon-set">
                            <Setting />
                        </IconButton>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Top;
