import React, { useState } from "react";
import "./treelist.scss";
import Button from "../components/Button";
import ButtonWrap from "../components/ButtonWrap";
const Treelist = ({ data, ...props }: any) => {
  const [toggleswitch, setToggleSwitch] = useState(false);
  const btnSwitch = () => {
    setToggleSwitch(!toggleswitch);
  };
  return (
    <div className="tree-list">
      <div className="tree-title">
        <div className="tit-sum">
          <h2>{props.pageName}</h2>
        </div>
      </div>
      <ul>
        <li>
          <div className="tree-main-item">
            <div className="tree-left">
              <button type="button" className="tree-btn"></button>
              <strong className="tree-menu-name">메타관리(S-빌더)</strong>
            </div>
            <Button
              viewType={`switch ${toggleswitch ? "on" : ""}`}
              onClick={btnSwitch}
            />
          </div>
        </li>
        <li className="active">
          <div className="tree-main-item">
            <div className="tree-left">
              <button type="button" className="tree-btn"></button>
              <strong className="tree-menu-name">메타관리(S-빌더)</strong>
            </div>
            <Button
              viewType={`switch ${toggleswitch ? "on" : ""}`}
              onClick={btnSwitch}
            />
          </div>
          <ul className="tree-sub-item">
            <li>
              권한관리
              <Button
                viewType={`switch ${toggleswitch ? "on" : ""}`}
                onClick={btnSwitch}
              />
            </li>
            <li>
              관리자메뉴 권한관리
              <Button
                viewType={`switch ${toggleswitch ? "on" : ""}`}
                onClick={btnSwitch}
              />
            </li>
            <li>
              사용자메뉴 권한관리
              <Button
                viewType={`switch ${toggleswitch ? "on" : ""}`}
                onClick={btnSwitch}
              />
            </li>
            <li>
              권한그룹 관리
              <Button
                viewType={`switch ${toggleswitch ? "on" : ""}`}
                onClick={btnSwitch}
              />
            </li>
            <li>
              회원관리
              <Button
                viewType={`switch ${toggleswitch ? "on" : ""}`}
                onClick={btnSwitch}
              />
            </li>
          </ul>
        </li>
        <li>
          <div className="tree-main-item">
            <div className="tree-left">
              <button type="button" className="tree-btn"></button>
              <strong className="tree-menu-name">메타관리(S-빌더)</strong>
            </div>
            <Button
              viewType={`switch ${toggleswitch ? "on" : ""}`}
              onClick={btnSwitch}
            />
          </div>
        </li>
        <li>
          <div className="tree-main-item">
            <div className="tree-left">
              <button type="button" className="tree-btn"></button>
              <strong className="tree-menu-name">메타관리(S-빌더)</strong>
            </div>
            <Button
              viewType={`switch ${toggleswitch ? "on" : ""}`}
              onClick={btnSwitch}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Treelist;
