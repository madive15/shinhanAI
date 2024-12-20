// necessary set
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { ReactComponent as Logo } from "~assets/images/svg/icon_logo.svg";
import { ReactComponent as RightDouble } from "~assets/images/svg/icon_right_double.svg";
import { ReactComponent as LeftDouble } from "~assets/images/svg/icon_left_double.svg";
import { ReactComponent as Home } from "~assets/images/svg/icon_home.svg";
import { ReactComponent as Mypage } from "~assets/images/svg/icon_mypage.svg";
import { ReactComponent as Target } from "~assets/images/svg/icon_target.svg";
import { ReactComponent as Model } from "~assets/images/svg/icon_model.svg";
import { ReactComponent as Single } from "~assets/images/svg/icon_single.svg";
import { ReactComponent as Ocr } from "~assets/images/svg/icon_ocr.svg";
import { ReactComponent as Assignment } from "~assets/images/svg/icon_assignment.svg";
import { ReactComponent as Sitemap } from "~assets/images/svg/icon_sitemap.svg";

// need style
import "~/muiPublish/components/sidebar.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    openClose?: boolean;
    setOpenClose?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: user Sidebar
 * user Sidebar
 * 전체 메뉴
 */
const Sidebar: React.FC<IPageProps> = (props) => {
    const menuOpenClose = (onOff: boolean) => {
        if (props.setOpenClose) {
            props.setOpenClose(onOff);
        }
    };
    return (
        <div className={props.openClose ? "sidebar open" : "sidebar"}>
            <div className="logo-menu">
                <NavLink to={"/"}>
                    <Logo className="logo" fill="#0046FF" />
                </NavLink>
                <Button className="btn-menu" onClick={() => menuOpenClose(!props.openClose)}>
                    {props.openClose ? <LeftDouble fill="#0046FF" /> : <RightDouble fill="#0046FF" />}
                </Button>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className="active">
                        <div className="menu home">
                            <Home fill="#fff" />
                            <span>홈</span>
                        </div>
                    </li>
                    <li className="">
                        <div className="menu my">
                            <Mypage fill="#0046ff99" />
                            <span>마이페이지</span>
                        </div>
                        <ul className="sub-menu">
                            <li>2Depth 마이페이지</li>
                            <li>2Depth 마이페이지</li>
                            <li>2Depth 마이페이지</li>
                        </ul>
                    </li>
                    <li className="">
                        <div className="menu target">
                            <Target fill="#0046ff99" />
                            <span>타겟 추출</span>
                        </div>
                    </li>
                    <li className="">
                        <div className="menu model">
                            <Model fill="#0046ff99" />
                            <span>모델 생성</span>
                        </div>
                    </li>
                    <li className="">
                        <div className="menu single">
                            <Single fill="#0046ff99" />
                            <span>싱글뷰</span>
                        </div>
                    </li>
                    <li className="">
                        <div className="menu ocr">
                            <Ocr fill="#0046ff99" />
                            <span>AI-OCR검증</span>
                        </div>
                    </li>
                    <li className="active">
                        <div className="menu Assignment">
                            <Assignment fill="#0046ff99" />
                            <span>과제신청/공지</span>
                        </div>
                        <ul className="sub-menu">
                            <li>2Depth 마이페이지</li>
                            <li>2Depth 마이페이지</li>
                            <li>2Depth 마이페이지</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="site-map">
                <Sitemap fill="#666666" />
                <span>사이트맵</span>
            </div>
        </div>
    );
};

export default Sidebar;
