// necessary set
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoPath from "~assets/images/admin_logo.png";
import { ReactComponent as Search } from "~assets/images/svg/icon_search.svg";
import { ReactComponent as Close } from "~assets/images/svg/icon_close.svg";
import { ReactComponent as AllSearch } from "~assets/images/svg/icon_all_search.svg";
import { ReactComponent as AllSearchClose } from "~assets/images/svg/Icons-Icons15.svg";
import { ReactComponent as User } from "~assets/images/svg/icon_user.svg";
import { ReactComponent as Mini } from "~assets/images/svg/icon_mini.svg";
import { ReactComponent as Go } from "~assets/images/svg/icon_go.svg";
import { ReactComponent as ArrowRight } from "~assets/images/svg/icon_arrow_right.svg";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    openClose?: boolean;
}

// need style

/**
 * @author shinhanAI
 * @description
 * user-front: top GNB
 * user top gnb
 */

const Top: React.FC<IPageProps> = (props) => {
    const [openClose, setOpenClose] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <header className={props.openClose === true ? "menu-open" : ""}>
            <div className="top-content ">
                {/* <div
                    className="search"
                    onClick={() => setOpenClose(!openClose)}
                >
                    <IconButton
                        type="button"
                        aria-label="search"
                        className="icon-search"
                    >
                        {openClose ? <Close /> : <Search />}
                    </IconButton>
                </div> */}
                <div className="header-search">
                    <div className="search-area">
                        <TextField
                            className={`input-field ${
                                isFocused ? "focus" : ""
                            }`}
                            placeholder="검색어를 입력해주세요"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

                        <div className="search-history">
                            <div className="top">
                                <span>최근 검색어</span>
                                <button type="button">전체삭제</button>
                            </div>
                            <ul className="history-words">
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                                <li className="history-words-item">
                                    <a href="#">최근 검색어1</a>
                                    <button>최근 검색어 삭제</button>
                                </li>
                            </ul>
                        </div>
                        <IconButton
                            type="button"
                            aria-label="search"
                            className="icon-search"
                        >
                            <Search />
                        </IconButton>
                    </div>
                </div>
                <div className="user-setting">
                    <span className="go-admin">
                        AI Studio 관리자 바로가기 <Go fill="#fff" />
                    </span>
                    <span className="go-mini">
                        AI Studio Mini <Mini fill="#fff" />
                    </span>
                    <span className="nick-name">
                        <User className="icon-user" fill="#fff" />
                        <em>김멀더</em>
                        <ArrowRight className="icon-arrow-right" fill="#fff" />
                    </span>
                </div>
            </div>

            <div
                className={
                    openClose === true ? "search-layer open" : "search-layer"
                }
            >
                <div className="search-box">
                    <Paper component="form" className="search-form">
                        <TextField
                            hiddenLabel
                            variant="outlined"
                            placeholder="검색어를 입력해주세요."
                        />
                        <div className="icon-allsearch">
                            <AllSearch fill="#fff" />
                        </div>
                    </Paper>
                    <IconButton
                        className="search-close"
                        onClick={() => setOpenClose(false)}
                    >
                        <AllSearchClose fill="#fff " width={16} height={16} />
                    </IconButton>
                </div>
            </div>
        </header>
    );
};

export default Top;
