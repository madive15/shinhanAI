// necessary set
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoPath from "~assets/images/admin_logo.png";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";
import Button from "~/publish/components/Button";

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
        <header className={""}>
            <h1 className="logo">
                <NavLink to={"/"}>
                    <img src={logoPath} alt="logo" />
                </NavLink>
            </h1>
            <div className="top-content">
                <label className="search">
                    <input type="text" placeholder="메뉴검색" />
                    <Search className="icon-search" />
                </label>
                <div className="user-setting">
                    <div>
                        <span>59:59</span>
                        <Button value="시간연장" viewType="type3" />
                    </div>
                    <div>sett</div>
                </div>
            </div>
        </header>
    );
};

export default Top;
