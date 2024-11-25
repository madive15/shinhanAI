import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./pubilsh.scss";

export default function PubIndex() {
    return (
        <div className="index-wrap">
            <div className="title">
                <h1>퍼블리싱 작업 리스트</h1>
            </div>

            <ul className="index-list">
                <li>
                    <h2>
                        <NavLink to={"/publish/guide"}>1. 가이드</NavLink>
                    </h2>
                </li>
                <li>
                    <h2>
                        <NavLink to={"/publish/adminlayout"}>2. 어드민 레이아웃 샘플</NavLink>
                    </h2>
                </li>
            </ul>
        </div>
    );
}
