import React, { useEffect, useState } from "react";
import "./Adminsidebarone.scss";
import Button from "~/publish/components/Button";

const Adminsidebar = () => {
    return (
        <div className="admin-sidebar">
            <div className="sidebar-tab">
                <Button value="메뉴" viewType="type3" />
                <Button value="즐겨찾기" />
            </div>
            <nav className="sidebar-nav">
                <ul className="sidebar-menu">
                    <li className="sidebar-item active">
                        <a href="#" className="sidebar-link">
                            원뎁스
                        </a>
                        <ul className="two-depth">
                            <li className="active ">
                                <a href="#1" className="two-depth-link">
                                    투뎁스
                                </a>
                                <ul className="three-depth">
                                    <li className="">
                                        <a href="#19" className="three-depth-link active">
                                            쓰리뎁스
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#20" className="three-depth-link">
                                            쓰리뎁스 2
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="no-three-depth">
                                <a href="#2" className="two-depth-link">
                                    투뎁스 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            AI 타겟 추출
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            AI 모델 만들기
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            고객성향 지수
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            마이페이지
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            SingleView
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            게시판
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            유틸리티
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            시스템 관리
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Adminsidebar;
