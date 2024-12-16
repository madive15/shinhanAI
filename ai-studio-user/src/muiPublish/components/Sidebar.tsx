import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
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

import "~/muiPublish/components/sidebar.scss";

const Sidebar = () => {
    const [openClose, setOpenClose] = useState<boolean>(false);

    return (
        <div className={openClose ? "sidebar open" : "sidebar"}>
            <div className="logo-menu">
                <Logo className="logo" fill="#0046FF" />
                <Button className="btn-menu" onClick={() => setOpenClose(!openClose)}>
                    {openClose ? <LeftDouble fill="#0046FF" /> : <RightDouble fill="#0046FF" />}
                </Button>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className="home active">
                        <Home fill="#fff" />
                        <span>홈</span>
                    </li>
                    <li className="my active">
                        <Mypage fill="#0046ff99" />
                        <span>마이페이지</span>
                    </li>
                    <li className="target">
                        <Target fill="#0046ff99" />
                        <span>타겟 추출</span>
                    </li>
                    <li className="model">
                        <Model fill="#0046ff99" />
                        <span>모델 생성</span>
                    </li>
                    <li className="single">
                        <Single fill="#0046ff99" />
                        <span>싱글뷰</span>
                    </li>
                    <li className="ocr">
                        <Ocr fill="#0046ff99" />
                        <span>AI-OCR검증</span>
                    </li>
                    <li className="Assignment">
                        <Assignment fill="#0046ff99" />
                        <span>과제신청/공지</span>
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
