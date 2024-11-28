import React from "react";
import "./cardlist.scss";
import Badge from "../components/Badge";

export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}
const Cardlist: React.FC<IPageProps> = (props) => {
    return (
        <>
            <div className="card-list">
                <div className="card-title">
                    <div className="tit-sum">
                        <h2>{props.pageName}</h2>
                        <span className="sum">총 00건</span>
                    </div>
                </div>

                {props.pageName === "관리자메뉴 권한관리" && (
                    <ul>
                        <li className="card-item">
                            <a href="#">
                                <Badge value="ADM006" color="gray" />
                                <strong className="card-tit">
                                    스키너<span>국장</span>
                                </strong>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="#">
                                <Badge value="ADM006" color="gray" />
                                <strong className="card-tit">
                                    스키너<span>국장</span>
                                </strong>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="#">
                                <Badge value="ADM006" color="gray" />
                                <strong className="card-tit">
                                    스키너<span>국장</span>
                                </strong>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="#">
                                <Badge value="ADM006" color="gray" />
                                <strong className="card-tit">
                                    스키너<span>국장</span>
                                </strong>
                            </a>
                        </li>
                    </ul>
                )}

                {props.pageName === "권한그룹관리" && (
                    <ul>
                        <li className="card-item active">
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
                    </ul>
                )}
                <ul>
                    {/* <li className="card-item active">
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
                    </li> */}
                </ul>
            </div>
        </>
    );
};

export default Cardlist;
