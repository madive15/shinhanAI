import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./pubilsh.scss";
import {} from "date-fns/locale";

export default function PubIndex() {
  const pubListHeader = ["No", "화면아이디", "화면명", "링크", "비고"];
  const pubList = [
    {
      id: "화면아이디",
      name: "가이드",
      link: "/publish/guide",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "폼요소 샘플",
      link: "/publish/sampleform",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "테이블 샘플",
      link: "/publish/table",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "권한관리",
      link: "/publish/auth",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "관리자메뉴 권한관리",
      link: "/publish/manager",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "권한그룹관리",
      link: "/publish/permission",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "회원관리",
      link: "/publish/member",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "AI-OCR 검증 결과 관리",
      link: "/publish/ocr",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "상품메타관리",
      link: "/publish/meta",
      etc: "",
    },
    {
      id: "화면아이디",
      name: "과제 신청",
      link: "/publish/task",
      etc: "",
    },
  ];
  return (
    <div className="index-wrap">
      <div className="title">
        <h1>퍼블리싱 BO작업 리스트</h1>
      </div>
      <table className="pub-list-table">
        <colgroup>
          <col style={{ width: "120px" }} />
          <col style={{ width: "200px" }} />
          <col style={{ width: "200px" }} />
          <col style={{ width: "300px" }} />
          <col style={{ width: "" }} />
        </colgroup>
        <thead>
          <tr>
            {pubListHeader.map((v, i) => (
              <th key={i}>{v}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pubList.map((v, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>
                <NavLink target="_blank" to={v.link}>
                  {v.link}
                </NavLink>
              </td>
              <td>{v.etc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul className="index-list">
        <li>
          <h2>
            <NavLink to={"/publish/guide"}>1. 가이드</NavLink>
          </h2>
        </li>
        <li>
          <h2>
            <NavLink to={"/publish/table"}>2. 어드민 레이아웃 샘플</NavLink>
          </h2>
        </li>
      </ul> */}
    </div>
  );
}
