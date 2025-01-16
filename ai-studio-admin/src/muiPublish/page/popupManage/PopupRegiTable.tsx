// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as X } from "~assets/images/svg/Icons-x.svg";
// need content
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    heiTitSearch?: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: TaskRequestTable
 * 상품메타관리 page
 */
const TaskRequestTable: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    const [radioGroup, setRadioGroup] = React.useState("노출");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };
    const [radioGroup2, setRadioGroup2] = React.useState("파일 첨부");
    const radioGroupChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup2((event.target as HTMLInputElement).value);
    };

    const [timeSelect, setTimeSelect] = React.useState("");
    const selectTimeChange = (event: SelectChangeEvent) => {
        setTimeSelect(event.target.value as string);
    };
    const [timeSelect2, setTimeSelect2] = React.useState("");
    const selectTimeChange2 = (event: SelectChangeEvent) => {
        setTimeSelect2(event.target.value as string);
    };
    const [minuteSelect, setMinuteSelect] = React.useState("");
    const selectMinuteChange = (event: SelectChangeEvent) => {
        setMinuteSelect(event.target.value as string);
    };
    const [minuteSelect2, setMinuteSelect2] = React.useState("");
    const selectMinuteChange2 = (event: SelectChangeEvent) => {
        setMinuteSelect2(event.target.value as string);
    };

    const [startDate, setStartDate] = useState();
    useEffect(() => {
        setLoading(false);
    }, []);
    const data = "/images/temp-img-thumb.png";
    return (
        <TableContainer className="table-content view-table row-table">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th">팝업 명</TableCell>
                        <TableCell>
                            <TextField
                                className="input-field required"
                                placeholder="팝업 명을 입력해주세요."
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">팝업 설명</TableCell>
                        <TableCell>
                            <TextField
                                className="input-field required"
                                inputProps={{
                                    maxLength: 50,
                                }}
                                placeholder="팝업 설명을 입력해 주세요."
                            />
                            <span className="desc">
                                <i className="ico-exclamation"></i>이미지 alt와
                                title의 속성을 50자 이내로 입력해주세요.
                            </span>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">팝업 노출 여부</TableCell>
                        <TableCell>
                            <FormControl>
                                <RadioGroup
                                    className="radio-group"
                                    row
                                    aria-labelledby="radio-group"
                                    name="group1"
                                    value={radioGroup}
                                    onChange={radioGroupChange}
                                >
                                    <FormControlLabel
                                        value="노출"
                                        control={
                                            <Radio
                                                checkedIcon={<RadioChecked />}
                                                icon={<RadioDefault />}
                                            />
                                        }
                                        label="노출"
                                    />
                                    <FormControlLabel
                                        value="비노출"
                                        control={
                                            <Radio
                                                checkedIcon={<RadioChecked />}
                                                icon={<RadioDefault />}
                                            />
                                        }
                                        label="비노출"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">
                            팝업 노출 기간 설정
                        </TableCell>
                        <TableCell>
                            <div className="date-time-wrap">
                                <div className="date-tiem">
                                    <div className="date-picker-area">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date: any) =>
                                                setStartDate(date)
                                            }
                                            dropdownMode="select"
                                            dateFormat="yyyy-MM-dd"
                                            locale={ko}
                                            placeholderText="기간을 선택해주세요"
                                        />
                                    </div>
                                    <Select
                                        className="select-box"
                                        value={timeSelect}
                                        onChange={selectTimeChange}
                                        IconComponent={Arrow}
                                        displayEmpty
                                        MenuProps={{
                                            classes: {
                                                paper: "select-option-class",
                                            },
                                        }}
                                    >
                                        <MenuItem value="" disabled>
                                            00
                                        </MenuItem>
                                        <MenuItem value={"00"}>00</MenuItem>
                                        <MenuItem value={"01"}>01</MenuItem>
                                        <MenuItem value={"02"}>02</MenuItem>
                                        <MenuItem value={"03"}>03</MenuItem>
                                        <MenuItem value={"04"}>04</MenuItem>
                                        <MenuItem value={"05"}>05</MenuItem>
                                        <MenuItem value={"06"}>06</MenuItem>
                                        <MenuItem value={"07"}>07</MenuItem>
                                        <MenuItem value={"08"}>08</MenuItem>
                                        <MenuItem value={"09"}>09</MenuItem>
                                        <MenuItem value={"10"}>10</MenuItem>
                                        <MenuItem value={"11"}>11</MenuItem>
                                        <MenuItem value={"12"}>12</MenuItem>
                                        <MenuItem value={"13"}>13</MenuItem>
                                        <MenuItem value={"14"}>14</MenuItem>
                                        <MenuItem value={"15"}>15</MenuItem>
                                        <MenuItem value={"16"}>16</MenuItem>
                                        <MenuItem value={"17"}>17</MenuItem>
                                        <MenuItem value={"18"}>18</MenuItem>
                                        <MenuItem value={"19"}>19</MenuItem>
                                        <MenuItem value={"20"}>20</MenuItem>
                                        <MenuItem value={"21"}>21</MenuItem>
                                        <MenuItem value={"22"}>22</MenuItem>
                                        <MenuItem value={"23"}>23</MenuItem>
                                        <MenuItem value={"24"}>24</MenuItem>
                                    </Select>
                                    <Select
                                        className="select-box"
                                        value={minuteSelect}
                                        onChange={selectMinuteChange}
                                        IconComponent={Arrow}
                                        displayEmpty
                                        MenuProps={{
                                            classes: {
                                                paper: "select-option-class",
                                            },
                                        }}
                                    >
                                        <MenuItem value="" disabled>
                                            00
                                        </MenuItem>
                                        <MenuItem value={"00"}>00</MenuItem>
                                        <MenuItem value={"01"}>01</MenuItem>
                                        <MenuItem value={"02"}>02</MenuItem>
                                        <MenuItem value={"03"}>03</MenuItem>
                                        <MenuItem value={"04"}>04</MenuItem>
                                        <MenuItem value={"05"}>05</MenuItem>
                                        <MenuItem value={"06"}>06</MenuItem>
                                        <MenuItem value={"07"}>07</MenuItem>
                                        <MenuItem value={"08"}>08</MenuItem>
                                        <MenuItem value={"09"}>09</MenuItem>
                                        <MenuItem value={"10"}>10</MenuItem>
                                        <MenuItem value={"11"}>11</MenuItem>
                                        <MenuItem value={"12"}>12</MenuItem>
                                        <MenuItem value={"13"}>13</MenuItem>
                                        <MenuItem value={"14"}>14</MenuItem>
                                        <MenuItem value={"15"}>15</MenuItem>
                                        <MenuItem value={"16"}>16</MenuItem>
                                        <MenuItem value={"17"}>17</MenuItem>
                                        <MenuItem value={"18"}>18</MenuItem>
                                        <MenuItem value={"19"}>19</MenuItem>
                                        <MenuItem value={"20"}>20</MenuItem>
                                        <MenuItem value={"21"}>21</MenuItem>
                                        <MenuItem value={"22"}>22</MenuItem>
                                        <MenuItem value={"23"}>23</MenuItem>
                                        <MenuItem value={"24"}>24</MenuItem>
                                        <MenuItem value={"25"}>25</MenuItem>
                                        <MenuItem value={"26"}>26</MenuItem>
                                        <MenuItem value={"27"}>27</MenuItem>
                                        <MenuItem value={"28"}>28</MenuItem>
                                        <MenuItem value={"29"}>29</MenuItem>
                                        <MenuItem value={"30"}>30</MenuItem>
                                        <MenuItem value={"31"}>31</MenuItem>
                                        <MenuItem value={"32"}>32</MenuItem>
                                        <MenuItem value={"33"}>33</MenuItem>
                                        <MenuItem value={"34"}>34</MenuItem>
                                        <MenuItem value={"35"}>35</MenuItem>
                                        <MenuItem value={"36"}>36</MenuItem>
                                        <MenuItem value={"37"}>37</MenuItem>
                                        <MenuItem value={"38"}>38</MenuItem>
                                        <MenuItem value={"39"}>39</MenuItem>
                                        <MenuItem value={"40"}>40</MenuItem>
                                        <MenuItem value={"41"}>41</MenuItem>
                                        <MenuItem value={"42"}>42</MenuItem>
                                        <MenuItem value={"43"}>43</MenuItem>
                                        <MenuItem value={"44"}>44</MenuItem>
                                        <MenuItem value={"45"}>45</MenuItem>
                                        <MenuItem value={"46"}>46</MenuItem>
                                        <MenuItem value={"47"}>47</MenuItem>
                                        <MenuItem value={"48"}>48</MenuItem>
                                        <MenuItem value={"49"}>49</MenuItem>
                                        <MenuItem value={"50"}>50</MenuItem>
                                        <MenuItem value={"51"}>51</MenuItem>
                                        <MenuItem value={"52"}>52</MenuItem>
                                        <MenuItem value={"53"}>53</MenuItem>
                                        <MenuItem value={"54"}>54</MenuItem>
                                        <MenuItem value={"55"}>55</MenuItem>
                                        <MenuItem value={"56"}>56</MenuItem>
                                        <MenuItem value={"57"}>57</MenuItem>
                                        <MenuItem value={"58"}>58</MenuItem>
                                        <MenuItem value={"59"}>59</MenuItem>
                                        <MenuItem value={"60"}>60</MenuItem>
                                    </Select>
                                </div>
                                <span>~</span>
                                <div className="date-tiem">
                                    <div className="date-picker-area">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date: any) =>
                                                setStartDate(date)
                                            }
                                            dropdownMode="select"
                                            dateFormat="yyyy-MM-dd"
                                            locale={ko}
                                            placeholderText="기간을 선택해주세요"
                                        />
                                    </div>
                                    <Select
                                        className="select-box"
                                        value={timeSelect2}
                                        onChange={selectTimeChange2}
                                        IconComponent={Arrow}
                                        displayEmpty
                                        MenuProps={{
                                            classes: {
                                                paper: "select-option-class",
                                            },
                                        }}
                                    >
                                        <MenuItem value="" disabled>
                                            00
                                        </MenuItem>
                                        <MenuItem value={"00"}>00</MenuItem>
                                        <MenuItem value={"01"}>01</MenuItem>
                                        <MenuItem value={"02"}>02</MenuItem>
                                        <MenuItem value={"03"}>03</MenuItem>
                                        <MenuItem value={"04"}>04</MenuItem>
                                        <MenuItem value={"05"}>05</MenuItem>
                                        <MenuItem value={"06"}>06</MenuItem>
                                        <MenuItem value={"07"}>07</MenuItem>
                                        <MenuItem value={"08"}>08</MenuItem>
                                        <MenuItem value={"09"}>09</MenuItem>
                                        <MenuItem value={"10"}>10</MenuItem>
                                        <MenuItem value={"11"}>11</MenuItem>
                                        <MenuItem value={"12"}>12</MenuItem>
                                        <MenuItem value={"13"}>13</MenuItem>
                                        <MenuItem value={"14"}>14</MenuItem>
                                        <MenuItem value={"15"}>15</MenuItem>
                                        <MenuItem value={"16"}>16</MenuItem>
                                        <MenuItem value={"17"}>17</MenuItem>
                                        <MenuItem value={"18"}>18</MenuItem>
                                        <MenuItem value={"19"}>19</MenuItem>
                                        <MenuItem value={"20"}>20</MenuItem>
                                        <MenuItem value={"21"}>21</MenuItem>
                                        <MenuItem value={"22"}>22</MenuItem>
                                        <MenuItem value={"23"}>23</MenuItem>
                                        <MenuItem value={"24"}>24</MenuItem>
                                    </Select>
                                    <Select
                                        className="select-box"
                                        value={minuteSelect2}
                                        onChange={selectMinuteChange2}
                                        IconComponent={Arrow}
                                        displayEmpty
                                        MenuProps={{
                                            classes: {
                                                paper: "select-option-class",
                                            },
                                        }}
                                    >
                                        <MenuItem value="" disabled>
                                            00
                                        </MenuItem>
                                        <MenuItem value={"00"}>00</MenuItem>
                                        <MenuItem value={"01"}>01</MenuItem>
                                        <MenuItem value={"02"}>02</MenuItem>
                                        <MenuItem value={"03"}>03</MenuItem>
                                        <MenuItem value={"04"}>04</MenuItem>
                                        <MenuItem value={"05"}>05</MenuItem>
                                        <MenuItem value={"06"}>06</MenuItem>
                                        <MenuItem value={"07"}>07</MenuItem>
                                        <MenuItem value={"08"}>08</MenuItem>
                                        <MenuItem value={"09"}>09</MenuItem>
                                        <MenuItem value={"10"}>10</MenuItem>
                                        <MenuItem value={"11"}>11</MenuItem>
                                        <MenuItem value={"12"}>12</MenuItem>
                                        <MenuItem value={"13"}>13</MenuItem>
                                        <MenuItem value={"14"}>14</MenuItem>
                                        <MenuItem value={"15"}>15</MenuItem>
                                        <MenuItem value={"16"}>16</MenuItem>
                                        <MenuItem value={"17"}>17</MenuItem>
                                        <MenuItem value={"18"}>18</MenuItem>
                                        <MenuItem value={"19"}>19</MenuItem>
                                        <MenuItem value={"20"}>20</MenuItem>
                                        <MenuItem value={"21"}>21</MenuItem>
                                        <MenuItem value={"22"}>22</MenuItem>
                                        <MenuItem value={"23"}>23</MenuItem>
                                        <MenuItem value={"24"}>24</MenuItem>
                                        <MenuItem value={"25"}>25</MenuItem>
                                        <MenuItem value={"26"}>26</MenuItem>
                                        <MenuItem value={"27"}>27</MenuItem>
                                        <MenuItem value={"28"}>28</MenuItem>
                                        <MenuItem value={"29"}>29</MenuItem>
                                        <MenuItem value={"30"}>30</MenuItem>
                                        <MenuItem value={"31"}>31</MenuItem>
                                        <MenuItem value={"32"}>32</MenuItem>
                                        <MenuItem value={"33"}>33</MenuItem>
                                        <MenuItem value={"34"}>34</MenuItem>
                                        <MenuItem value={"35"}>35</MenuItem>
                                        <MenuItem value={"36"}>36</MenuItem>
                                        <MenuItem value={"37"}>37</MenuItem>
                                        <MenuItem value={"38"}>38</MenuItem>
                                        <MenuItem value={"39"}>39</MenuItem>
                                        <MenuItem value={"40"}>40</MenuItem>
                                        <MenuItem value={"41"}>41</MenuItem>
                                        <MenuItem value={"42"}>42</MenuItem>
                                        <MenuItem value={"43"}>43</MenuItem>
                                        <MenuItem value={"44"}>44</MenuItem>
                                        <MenuItem value={"45"}>45</MenuItem>
                                        <MenuItem value={"46"}>46</MenuItem>
                                        <MenuItem value={"47"}>47</MenuItem>
                                        <MenuItem value={"48"}>48</MenuItem>
                                        <MenuItem value={"49"}>49</MenuItem>
                                        <MenuItem value={"50"}>50</MenuItem>
                                        <MenuItem value={"51"}>51</MenuItem>
                                        <MenuItem value={"52"}>52</MenuItem>
                                        <MenuItem value={"53"}>53</MenuItem>
                                        <MenuItem value={"54"}>54</MenuItem>
                                        <MenuItem value={"55"}>55</MenuItem>
                                        <MenuItem value={"56"}>56</MenuItem>
                                        <MenuItem value={"57"}>57</MenuItem>
                                        <MenuItem value={"58"}>58</MenuItem>
                                        <MenuItem value={"59"}>59</MenuItem>
                                        <MenuItem value={"60"}>60</MenuItem>
                                    </Select>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">팝업 표시 위치</TableCell>
                        <TableCell>
                            <div className="popup-position-input">
                                <span>화면 위로부터</span>
                                <TextField
                                    className="input-field"
                                    placeholder="320"
                                />
                                <span>픽셀, 왼쪽부터</span>
                                <TextField
                                    className="input-field"
                                    placeholder="320"
                                />
                                <span>픽셀에서 노출</span>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">팝업 노출 페이지</TableCell>
                        <TableCell>
                            <p className="mb-6">
                                http://aistudio.soopdev.shinhan.com
                            </p>
                            <TextField
                                className="input-field"
                                placeholder="/"
                            />
                            <span className="desc">
                                <i className="ico-exclamation"></i>이미지 alt와
                                title의 속성을 50자 이내로 입력해주세요.
                            </span>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">팝업 창 크기</TableCell>
                        <TableCell>
                            <div className="popup-size-input">
                                <div>
                                    <TextField
                                        className="input-field"
                                        placeholder=""
                                    />
                                    <span>Width</span>
                                </div>
                                <span>X</span>
                                <div>
                                    <TextField
                                        className="input-field"
                                        placeholder=""
                                    />
                                    <span>Height</span>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">팝업 연결 URL</TableCell>
                        <TableCell>
                            <TextField className="input-field" placeholder="" />
                            <span className="desc">
                                <i className="ico-exclamation"></i>팝업 클릭시
                                연결할 URL을 입력해주세요.
                            </span>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="required" component="th">
                            팝업 이미지 등록/편집
                        </TableCell>
                        <TableCell>
                            <div className="popup-image-wrap">
                                <FormControl>
                                    <RadioGroup
                                        className="radio-group"
                                        row
                                        aria-labelledby="radio-group"
                                        name="group1"
                                        value={radioGroup2}
                                        onChange={radioGroupChange2}
                                    >
                                        <FormControlLabel
                                            value="파일 첨부"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="파일 첨부"
                                        />
                                        <FormControlLabel
                                            value="이미지 편집"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="이미지 편집"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <span className="desc">
                                    <i className="ico-exclamation"></i>첨부된
                                    이미지 또는 작성된 내용 삭제 후 변경 할 수
                                    있습니다.
                                </span>
                                <div className="file-area">
                                    <div className="input-file">
                                        <label htmlFor="file1-2">
                                            파일 첨부
                                            <input
                                                type="file"
                                                name=""
                                                id="file1-2"
                                            />
                                        </label>
                                        <div className="file-list">
                                            <span className="no-file">
                                                등록된 파일이 없습니다.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="file-volume">
                                        <span>0</span>개<span> / </span>
                                        <span>0</span>Ktyte
                                    </div>
                                    <span className="desc">
                                        <i className="ico-exclamation"></i>
                                        팝업창 크기 이하의 이미지를
                                        등록해주세요.
                                    </span>
                                </div>
                                <div className="editor-wrap">
                                    <ul className="thumb-wrap">
                                        <li className="active">
                                            <img src={data} alt="" />
                                        </li>
                                        <li>
                                            <img src={data} alt="" />
                                        </li>
                                    </ul>
                                    <div className="editor">에디터 영역</div>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TaskRequestTable;
