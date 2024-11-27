import React from "react";
import "./cardlist.scss";
import Badge from "../components/Badge";
const Cardlist = ({ data }: any) => {
  return (
    <>
      <div className="card-list">
        <div className="card-title">
          <div className="tit-sum">
            <h2>Card list</h2>
            <span className="sum">총 00건</span>
          </div>
        </div>
        <ul>
          <li className="card-item">
            <a href="#">
              <Badge value="사용중" color="green" />
              <strong className="card-tit">시스템 관리자</strong>
              <p className="card-subtit">시스템 관리자</p>
              <div className="card-date">
                <div className="card-regist">
                  <strong>등록</strong>
                  <span>240506 10:10:05</span>
                </div>
                <div className="card-modify">
                  <strong>수정</strong>
                  <span>240506 10:10:05</span>
                </div>
              </div>
            </a>
          </li>
          <li className="card-item">
            <a href="#">
              <Badge value="사용중" color="gray" />
              <strong className="card-tit">시스템 관리자</strong>
              <p className="card-subtit">시스템 관리자</p>
            </a>
          </li>
          <li className="card-item">
            <a href="#">
              <Badge value="ADM006" color="gray" />
              <strong className="card-tit">
                스키너<span>국장</span>
              </strong>
              <p className="card-subtit">신한 PWM 여의도 센터</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Cardlist;
