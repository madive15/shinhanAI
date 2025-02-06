// necessary set
import React, { useRef, useState } from "react";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Category from "~/muiPublish/components/category/Category";

// need content
import Hash from "~/muiPublish/components/Hash";
import Importance from "~/muiPublish/components/extractionPopup/Importance";
import LearningType from "~/muiPublish/components/extractionPopup/LearningType";

// need style

// Props type

/**
 * @author shinhanAI
 * @description
 * user-front: CreateExtractionPopup
 * CreateExtractionPopup
 * 모델 생성 팝업
 *
 */
const CreateExtractionPopup = (props: any) => {
    const [popupStauts, setPopupStauts] = React.useState(true);
    const popupOpen = () => {
        setPopupStauts(true);
    };
    const popupClose = () => {
        setPopupStauts(false);
    };

    const [radioGroup, setRadioGroup] = useState("신규");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };

    const [radioGroup2, setRadioGroup2] = useState("1개월");
    const radioGroupChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup2((event.target as HTMLInputElement).value);
    };

    const [radioGroup3, setRadioGroup3] = useState("거래기간 1개월 이상");
    const radioGroupChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup3((event.target as HTMLInputElement).value);
    };

    const [radioGroup4, setRadioGroup4] =
        useState("6개월 수신평잔 20만원 이상");
    const radioGroupChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup4((event.target as HTMLInputElement).value);
    };

    const [radioGroup5, setRadioGroup5] = useState("LGBM");
    const radioGroupChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup5((event.target as HTMLInputElement).value);
    };

    const [ageSelect, setAgeSelect] = useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };

    const [monthType, setMonthType] = useState(false); // true : 24개월, falce :12개월

    return (
        <Dialog
            className="layer-box l-large"
            open={popupStauts}
            onClose={popupClose}
        >
            <DialogTitle>{"모델 생성"}</DialogTitle>
            <DialogContent className="create-extraction-popup">
                <p className="popup-title">신용카드</p>
                <div className="model-add-tit">적금 신규 가입 예측 모델</div>
                <div className="hash-wrap">
                    <Hash value="#TAG" type="type2" />
                    <Hash value="#TAG" type="type2" />
                    <Hash value="#TAG" type="type2" />
                    <Hash value="+5" type="type2 bg" />
                </div>

                <TableContainer className="row-table" component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th">가입 구분</TableCell>
                                <TableCell colSpan={3}>
                                    <RadioGroup
                                        className="radio-group"
                                        row
                                        aria-labelledby="radio-group"
                                        name="group1"
                                        value={radioGroup}
                                        onChange={radioGroupChange}
                                    >
                                        <FormControlLabel
                                            value="신규"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="신규"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">기간</TableCell>
                                <TableCell colSpan={3}>
                                    <RadioGroup
                                        className="radio-group"
                                        row
                                        aria-labelledby="radio-group"
                                        name="group1"
                                        value={radioGroup2}
                                        onChange={radioGroupChange2}
                                    >
                                        <FormControlLabel
                                            value="1개월"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="1개월"
                                        />
                                        <FormControlLabel
                                            value="2개월"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="2개월"
                                        />
                                        <FormControlLabel
                                            value="3개월"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="3개월"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">고객요건1</TableCell>
                                <TableCell colSpan={3}>
                                    <RadioGroup
                                        className="radio-group"
                                        row
                                        aria-labelledby="radio-group"
                                        name="group1"
                                        value={radioGroup3}
                                        onChange={radioGroupChange3}
                                    >
                                        <FormControlLabel
                                            value="거래기간 1개월 이상"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="거래기간 1개월 이상"
                                        />
                                        <FormControlLabel
                                            value="거래기간 3개월 이상"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="거래기간 3개월 이상"
                                        />
                                        <FormControlLabel
                                            value="거래기간 6개월 이상"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="거래기간 6개월 이상"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">고객요건2</TableCell>
                                <TableCell colSpan={3}>
                                    <RadioGroup
                                        className="radio-group"
                                        row
                                        aria-labelledby="radio-group"
                                        name="group1"
                                        value={radioGroup4}
                                        onChange={radioGroupChange4}
                                    >
                                        <FormControlLabel
                                            value="6개월 수신평잔 20만원 이상"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="6개월 수신평잔 20만원 이상"
                                        />
                                        <FormControlLabel
                                            value="6개월 수신평잔 40만원 이상"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="6개월 수신평잔 40만원 이상"
                                        />
                                        <FormControlLabel
                                            value="6개월 수신평잔 80만원 이상"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="6개월 수신평잔 80만원 이상"
                                        />
                                        <FormControlLabel
                                            value="6개월 수신평잔 100만원 이상"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="6개월 수신평잔 100만원 이상"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">
                                    분류 모델 종류
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <RadioGroup
                                        className="radio-group"
                                        row
                                        aria-labelledby="radio-group"
                                        name="group1"
                                        value={radioGroup5}
                                        onChange={radioGroupChange5}
                                    >
                                        <FormControlLabel
                                            value="LGBM"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="LGBM"
                                        />
                                        <FormControlLabel
                                            value="XGBOOST"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="XGBOOST"
                                        />
                                        <FormControlLabel
                                            value="CATBOOST"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="CATBOOST"
                                        />
                                        <FormControlLabel
                                            value="DNN"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="DNN"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">
                                    중요도 설정
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <Importance
                                        monthType={monthType}
                                        setMonthType={setMonthType}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">
                                    학습 형태 분할
                                </TableCell>
                                <TableCell colSpan={3}>
                                    <LearningType
                                        monthType={monthType}
                                        setMonthType={setMonthType}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <div className="btn-wrap">
                    <Button variant="sub1" onClick={popupClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={popupClose}>
                        적용
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default CreateExtractionPopup;
