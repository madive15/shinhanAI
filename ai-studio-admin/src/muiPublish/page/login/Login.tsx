// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as StudioMini } from "~assets/images/svg/ico-studio-mini.svg";
import { ReactComponent as Show } from "~assets/images/svg/icon-eye-show.svg";
import { ReactComponent as ShowOff } from "~assets/images/svg/icon-eye-off.svg";
// need content
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: Login
 * Login page
 */
const Login: React.FC<IPageProps> = () => {
    const [isShow, setIsShow] = useState(true);
    const showToggle = () => {
        setIsShow((prev) => !prev); // 상태를 반전시킴
    };
    return (
        <div className="login-wrap">
            <div className="login-box">
                <div className="left">
                    <div className="login-tit">
                        <span>신한 AI Studio</span>
                        <strong>LOGIN</strong>
                    </div>
                    <p>
                        로그인하고 신한 AI Studio
                        <br />
                        서비스를 자유롭게 이용해보세요.
                    </p>
                </div>
                <div className="right">
                    <div className="id-area">
                        <label className="input-has-label" htmlFor="id1_1">
                            <span>ID</span>
                            <TextField
                                className="input-field "
                                id="id1_1"
                                placeholder="Canvas 아이디(행번) 입력"
                            />
                        </label>
                    </div>
                    <div className="password-area">
                        <label className="input-has-label" htmlFor="pass1_1">
                            <span>Password</span>
                            <TextField
                                className="input-field "
                                id="pass1_1"
                                type="password"
                                placeholder="••••••••••••"
                            />
                        </label>
                        <IconButton className="show-btn" onClick={showToggle}>
                            {isShow ? <Show /> : <ShowOff />}
                        </IconButton>
                    </div>
                    <div className="id-save-area">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="아이디(행번) 저장"
                        />
                        <Button variant="iconTxt" endIcon={<StudioMini />}>
                            AI Studio Mini
                        </Button>
                    </div>
                    <button className="mate-btn" type="button">
                        물리메이트 인증
                    </button>
                    <p className="error-circle">
                        입력하신 아이디 / 비밀번호가 확인되지 않습니다. 다시
                        확인해주세요.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
