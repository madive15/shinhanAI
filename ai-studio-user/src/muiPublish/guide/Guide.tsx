import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "~/muiPublish/guide/guide.scss";
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as Bookmark } from "~assets/images/svg/Icons-Bookmark.svg";
import { ReactComponent as BookmarkOn } from "~assets/images/svg/Icons-Bookmark-on.svg";
import { ReactComponent as ChkDisabled } from "~assets/images/svg/Icons-chk-disabled.svg";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as RadioDisabled } from "~assets/images/svg/Icons-radio-disabled.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Badge from "~/muiPublish/components/Badge";
import Hash from "~/muiPublish/components/Hash";
import SvgSample from "~/muiPublish/components/SvgSample";
import Tooltip from "@mui/material/Tooltip";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
} from "@mui/material";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Download } from "~assets/images/svg/Icons-download.svg";
import { ReactComponent as DownloadBlue } from "~assets/images/svg/icons-download-blue.svg";
import { ReactComponent as X } from "~assets/images/svg/Icons-x.svg";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
import { ReactComponent as Positive } from "~assets/images/svg/Icons-positive-14.svg";
import { ReactComponent as Error } from "~assets/images/svg/Icons-error-14.svg";
import InputAdornment from "@mui/material/InputAdornment";
import ProgressBar from "~/muiPublish/components/ProgressBar";
import { Pagination, PaginationItem } from "@mui/material";
import { ReactComponent as Next } from "~assets/images/svg/icon-page-next.svg";
import { ReactComponent as Prev } from "~assets/images/svg/icon-page-prev.svg";
import { ReactComponent as First } from "~assets/images/svg/icon-page-first.svg";
import { ReactComponent as Last } from "~assets/images/svg/icon-page-last.svg";
//
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    guideName?: string;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, guideName, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            className={guideName}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(3);
    const [selected, setSelected] = React.useState(false);
    const tabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const [selectedValue, setSelectedValue] = React.useState("a");
    const radioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const [radioGroup, setRadioGroup] = React.useState("female");
    const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup((event.target as HTMLInputElement).value);
    };
    const [radioGroup2, setRadioGroup2] = React.useState("인기/추천");
    const radioGroupChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup2((event.target as HTMLInputElement).value);
    };

    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };

    //팝업
    const [alertStauts, setAlertStauts] = React.useState(false);
    const alertOpen = () => {
        setAlertStauts(true);
    };
    const alertClose = () => {
        setAlertStauts(false);
    };
    const [confirmStauts, setConfirmStauts] = React.useState(false);
    const confirmOpen = () => {
        setConfirmStauts(true);
    };
    const confirmClose = () => {
        setConfirmStauts(false);
    };
    const [popupStauts, setpopupStauts] = React.useState(false);
    const popupOpen = () => {
        setpopupStauts(true);
    };
    const popupClose = () => {
        setpopupStauts(false);
    };

    const [startDate, setStartDate] = useState();

    const [dateRange, setDateRange] = useState([null, null]);
    const [rangeStartDate, rangeEndDate]: any = dateRange;
    const [tooltipOpen, setTooltipOpen] = React.useState(false);

    const TooltipClose = () => {
        setTooltipOpen(false);
    };

    const TooltipOpen = () => {
        setTooltipOpen(true);
    };
    const tooptipText = (
        <div className="tooltip-wrap">
            <div className="tooltip-top">
                <h3>과제명</h3>
                <IconButton className="ico-rect23 x" onClick={TooltipClose}>
                    <Plus9 />
                </IconButton>
            </div>
            <div className="tooltip-content">
                주요 AI 소개를 참고하여, 원하는 기능의 신청 과제명 및 내용을
                작성해주세요.
            </div>
            <div className="btn-wrap end">
                {/* <Button variant="sub2">자세히보기</Button> */}
                <a href="#" className="ank sub2">
                    자세히보기
                </a>
            </div>
        </div>
    );

    const [alignment, setAlignment] = React.useState("개인 고객");

    const toggleBtnSwitch = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    //파일 업로드

    return (
        <Box
            className="guide-wrap"
            sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 224,
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={tabChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
                className="tabs-left"
            >
                <Tab label="Color" {...a11yProps(0)} />
                <Tab label="Text" {...a11yProps(1)} />
                <Tab label="Button" {...a11yProps(2)} />
                <Tab label="Input" {...a11yProps(3)} />
                <Tab label="CheckBox" {...a11yProps(4)} />
                <Tab label="Radio" {...a11yProps(5)} />
                <Tab label="TextArea" {...a11yProps(6)} />
                <Tab label="Select" {...a11yProps(7)} />
                <Tab label="RowTable" {...a11yProps(8)} />
                <Tab label="Popup" {...a11yProps(9)} />
                <Tab label="datepicker" {...a11yProps(10)} />
                <Tab label="Badge" {...a11yProps(11)} />
                <Tab label="HashTag" {...a11yProps(12)} />
                <Tab label="SvgIcon" {...a11yProps(13)} />
                <Tab label="ToolTip" {...a11yProps(14)} />
                <Tab label="타겟추출" {...a11yProps(15)} />
                <Tab label="싱글뷰 " {...a11yProps(16)} />
                <Tab label="인풋파일" {...a11yProps(17)} />
                <Tab label="페이지네이션" {...a11yProps(18)} />
            </Tabs>
            {/* color */}
            <TabPanel value={value} index={0}>
                <div className="guide-color">
                    <strong>Primary color</strong>
                    <div className="color-box">
                        <div className="sample-color-box color-box1"></div>
                        <div className="sample-color-box color-box2"></div>
                        <div className="sample-color-box color-box3"></div>
                    </div>
                    <strong>Secondary color</strong>
                    <div className="color-box">
                        <div className="sample-color-box sub-color-box1"></div>
                        <div className="sample-color-box sub-color-box2"></div>
                        <div className="sample-color-box sub-color-box3"></div>
                        <div className="sample-color-box sub-color-box4"></div>
                    </div>
                    <strong>Text Color</strong>
                    <div className="color-box">
                        <div className="sample-color-box text-color-box1"></div>
                        <div className="sample-color-box text-color-box2"></div>
                        <div className="sample-color-box text-color-box3"></div>
                    </div>
                    <strong>Boder Color</strong>
                    <div className="color-box">
                        <div className="sample-color-box border-color-box1"></div>
                        <div className="sample-color-box border-color-box2"></div>
                        <div className="sample-color-box border-color-box3"></div>
                        <div className="sample-color-box border-color-box4"></div>
                    </div>
                    <strong>Background Color</strong>
                    <div className="color-box">
                        <div className="sample-color-box bg-color-box1"></div>
                        <div className="sample-color-box bg-color-box2"></div>
                        <div className="sample-color-box bg-color-box3"></div>
                        <div className="sample-color-box bg-color-box4"></div>
                    </div>
                    <strong>Positive/Negative</strong>
                    <div className="color-box">
                        <div className="sample-color-box positive-box"></div>
                        <div className="sample-color-box negative-box"></div>
                    </div>
                </div>
            </TabPanel>
            {/* 텍스트 */}
            <TabPanel value={value} index={1} guideName={"guide-text"}>
                <h1>h1 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 20px</h1>
                <h2>h2 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 16px</h2>
                <h3>h3 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 14px</h3>
                <div className="text1">
                    본문 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 14px
                </div>
                <div className="text1 disabled">
                    본문 비활성 신한은행 Ai스튜디오에 오신것을 환영합니다. --
                    14px
                </div>
                <div className="text2">
                    보조 Ai스튜디오에 오신것을 환영합니다. -- 13px
                </div>
                <div className="text3">
                    캡션 Ai스튜디오에 오신것을 환영합니다. -- 12px
                </div>
                <div className="text4">
                    작은글자 Ai스튜디오에 오신것을 환영합니다. -- 10px
                </div>
            </TabPanel>
            {/* 버튼 */}
            <TabPanel value={value} index={2} guideName={"guide-btn"}>
                <Button variant="primary" fullWidth>
                    full Width
                </Button>
                <br />
                <br />
                <Button variant="primary">버튼 텍스트</Button>
                <br />
                <br />
                <Button variant="secondary">버튼 텍스트</Button>
                <br />
                <br />
                <Button variant="sub1">버튼 텍스트</Button>
                <br />
                <br />
                <Button variant="sub2">버튼 텍스트</Button>
                <br />
                <br />
                {/* <Button variant="primaryBig">버튼 텍스트</Button>
        <br />
        <br /> */}
                <Button variant="small">버튼 텍스트</Button>
                <br />
                <br />
                <Button variant="smallSub1">버튼 텍스트</Button>
                <br />
                <br />

                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <br />
                <br />
                <Button
                    variant="iconDashed"
                    startIcon={<Download fill="#888" />}
                >
                    버튼 텍스트
                </Button>
                <Button variant="iconLine" startIcon={<Download fill="#333" />}>
                    Icon Button
                </Button>
                <br />
                <br />
                <Button variant="iconDashed" endIcon={<Download fill="#888" />}>
                    버튼 텍스트
                </Button>
                <Button variant="iconLine" endIcon={<Download fill="#333" />}>
                    버튼 텍스트
                </Button>
                <Button variant="iconLineBlue" endIcon={<DownloadBlue />}>
                    과제명파일명.png
                </Button>
                <Button variant="iconTxt" endIcon={<DownloadBlue />}>
                    과제명파일명.png
                </Button>
                <br />
                <br />

                <ToggleButton
                    className="toggle-btn"
                    value="check"
                    selected={selected}
                    onChange={() =>
                        setSelected((prevSelected) => !prevSelected)
                    }
                >
                    토글 버튼
                </ToggleButton>
                <br />
                <br />
                <ToggleButtonGroup
                    className="toggle-group"
                    value={alignment}
                    exclusive
                    onChange={toggleBtnSwitch}
                >
                    <ToggleButton value="개인 고객">개인 고객</ToggleButton>
                    <ToggleButton value="기업 고객">기업 고객</ToggleButton>
                </ToggleButtonGroup>
                <br />
                <br />
                <Switch className="switch-btn " />
                <Switch className="switch-btn view-type" />
                <br />
                <br />
                <IconButton>
                    <X fill="#333" />
                </IconButton>
                <IconButton>
                    <Download fill="#333" />
                </IconButton>
                <IconButton>
                    <Search fill="#333" />
                </IconButton>
                <IconButton className="ico-circle20">
                    <Search12 />
                </IconButton>
                <IconButton className="ico-rect23">
                    <Plus9 />
                </IconButton>
                <IconButton className="ico-rect23 x">
                    <Plus9 />
                </IconButton>
            </TabPanel>
            {/* 인풋 텍스트 */}
            <TabPanel value={value} index={3}>
                <div className="input-area">
                    <TextField
                        className="input-field"
                        fullWidth
                        placeholder="Full Width"
                    />
                </div>
                <br />
                <div className="input-area">
                    <TextField
                        className="input-field"
                        placeholder="Max Width 480"
                    />
                </div>
                <br />
                <div className="input-area">
                    <TextField
                        className="input-field required"
                        placeholder="상품 명 입력"
                    />
                </div>
                <br />
                <div className="input-area">
                    <TextField
                        className="input-field required"
                        placeholder="상품 명 입력"
                        disabled
                    />
                </div>
                <br />
                <div className="input-area">
                    <TextField
                        className="input-field"
                        id="text1"
                        placeholder="상품 명 입력"
                    />
                    <p className="positive-ico-txt">체크 완료</p>
                </div>
                <br />
                <div className="input-area">
                    <TextField
                        className="input-field"
                        id="text1"
                        placeholder="상품 명 입력"
                    />
                    <p className="error-ico-txt">경고 표시</p>
                </div>
                <br />
                <div className="input-area inner-txt-btn">
                    <TextField
                        className="input-field"
                        id="text1"
                        placeholder="상품 명 입력"
                    />
                </div>
                <br />
                <label className="input-has-label" htmlFor="txt1_1">
                    <span>label</span>
                    <TextField
                        className="input-field "
                        id="txt1_1"
                        placeholder="상품 명 입력"
                    />
                </label>
            </TabPanel>
            {/* 체크박스 */}
            <TabPanel value={value} index={4}>
                <div>
                    <Checkbox
                        icon={<ChkDefault />}
                        checkedIcon={<ChkChecked />}
                        defaultChecked
                    />
                    <Checkbox
                        icon={<ChkDefault />}
                        checkedIcon={<ChkChecked />}
                    />
                    <Checkbox
                        icon={<ChkDefault />}
                        checkedIcon={<ChkChecked />}
                        disabled
                    />
                    <Checkbox
                        className="book-mark"
                        icon={<Bookmark />}
                        checkedIcon={<BookmarkOn />}
                        defaultChecked
                    />
                </div>

                <div>
                    <FormGroup row className="chk-group">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Label"
                        />
                        <FormControlLabel
                            required
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Required"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    icon={<ChkDefault />}
                                    checkedIcon={<ChkChecked />}
                                />
                            }
                            label="Disabled"
                        />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup row className="filter-chk">
                        <FormControlLabel control={<Checkbox />} label="전체" />
                        <FormControlLabel control={<Checkbox />} label="ㄱ" />
                        <FormControlLabel control={<Checkbox />} label="ㄴ" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="ㄷ"
                            disabled
                        />
                    </FormGroup>
                </div>
            </TabPanel>
            {/* 라디오 */}
            <TabPanel value={value} index={5}>
                <div>
                    <Radio
                        checked={selectedValue === "a"}
                        onChange={radioChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                        checkedIcon={<RadioChecked />}
                        icon={<RadioDefault />}
                    />
                    <Radio
                        checked={selectedValue === "b"}
                        onChange={radioChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "B" }}
                        checkedIcon={<RadioChecked />}
                        icon={<RadioDefault />}
                    />
                    <Radio
                        checked={selectedValue === "c"}
                        onChange={radioChange}
                        value="c"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "C" }}
                        checkedIcon={<RadioChecked />}
                        icon={<RadioDefault />}
                        disabled
                    />
                </div>
                <div>
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
                                value="female"
                                control={
                                    <Radio
                                        checkedIcon={<RadioChecked />}
                                        icon={<RadioDefault />}
                                    />
                                }
                                label="Female"
                            />
                            <FormControlLabel
                                className="cr-label"
                                value="male"
                                control={
                                    <Radio
                                        checkedIcon={<RadioChecked />}
                                        icon={<RadioDefault />}
                                    />
                                }
                                label="Male"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <RadioGroup
                            className="filter-radio"
                            row
                            aria-labelledby="radio-group"
                            name="group2"
                            value={radioGroup2}
                            onChange={radioGroupChange2}
                        >
                            <FormControlLabel
                                value="인기/추천"
                                control={<Radio />}
                                label="인기/추천"
                            />
                            <FormControlLabel
                                value="전체"
                                control={<Radio />}
                                label="전체"
                            />
                            <FormControlLabel
                                value="예적금"
                                control={<Radio />}
                                label="예적금"
                            />
                            <FormControlLabel
                                value="외환"
                                control={<Radio />}
                                label="외환"
                            />
                            <FormControlLabel
                                value="퇴직연금"
                                control={<Radio />}
                                label="퇴직연금"
                            />
                            <FormControlLabel
                                value="투자상품"
                                control={<Radio />}
                                label="투자상품"
                            />
                            <FormControlLabel
                                value="보험/방카"
                                control={<Radio />}
                                label="보험/방카"
                            />
                            <FormControlLabel
                                value="대출"
                                control={<Radio />}
                                label="대출"
                            />
                            <FormControlLabel
                                value="급여"
                                control={<Radio />}
                                label="급여"
                            />
                            <FormControlLabel
                                value="연금"
                                control={<Radio />}
                                label="연금"
                            />
                            <FormControlLabel
                                value="고자산"
                                control={<Radio />}
                                label="고자산"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </TabPanel>
            {/* 텍스트 에어리어 */}
            <TabPanel value={value} index={6}>
                <div className="text-area ">
                    <textarea name="" id=""></textarea>
                </div>
                <div className="text-area required">
                    <textarea name="" id=""></textarea>
                </div>
                <div className="text-area required">
                    <textarea name="" id="" disabled></textarea>
                </div>
                <label className="input-has-label" htmlFor="txtarea1-1">
                    <span>label</span>
                    <div className="text-area required">
                        <textarea name="" id="txtarea1-1"></textarea>
                    </div>
                </label>
            </TabPanel>
            {/* 셀렉트 */}
            <TabPanel value={value} index={7}>
                <div>
                    <Select
                        className="select-box small"
                        value={ageSelect}
                        onChange={selectChange}
                        IconComponent={Arrow}
                        displayEmpty
                        MenuProps={{
                            classes: {
                                paper: "select-option-class",
                            },
                        }}
                    >
                        <MenuItem value="" disabled>
                            전체
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>TwentyTwenty</MenuItem>
                    </Select>
                    <br />
                    <br />
                    <Select
                        className="select-box"
                        value={ageSelect}
                        onChange={selectChange}
                        IconComponent={Arrow}
                        displayEmpty
                        MenuProps={{
                            classes: {
                                paper: "select-option-class",
                            },
                        }}
                    >
                        <MenuItem value="" disabled>
                            전체
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                    <br />
                    <br />
                    <Select
                        className="select-box required"
                        value={ageSelect}
                        onChange={selectChange}
                        IconComponent={Arrow}
                        displayEmpty
                        MenuProps={{
                            classes: {
                                paper: "select-option-class",
                            },
                        }}
                    >
                        7
                        <MenuItem value="" disabled>
                            전체
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                    <br />
                    <br />
                    <Select
                        className="select-box"
                        value={ageSelect}
                        onChange={selectChange}
                        IconComponent={Arrow}
                        displayEmpty
                        MenuProps={{
                            classes: {
                                paper: "select-option-class",
                            },
                        }}
                        disabled
                    >
                        <MenuItem value="" disabled>
                            전체
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                    <br />
                    <br />
                    <Select
                        className="select-box required"
                        value={ageSelect}
                        onChange={selectChange}
                        IconComponent={Arrow}
                        displayEmpty
                        MenuProps={{
                            classes: {
                                paper: "select-option-class",
                            },
                        }}
                        disabled
                    >
                        <MenuItem value="" disabled>
                            전체
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                </div>
            </TabPanel>
            {/* 로우 테이블 */}
            <TabPanel value={value} index={8}>
                <TableContainer className="row-table" component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th">상품 분류</TableCell>
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
                                            value="female"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            className="cr-label"
                                            value="male"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="Male"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">상위 분류</TableCell>
                                <TableCell colSpan={3}>
                                    <div className="select-group">
                                        <FormControl fullWidth>
                                            <Select
                                                className="select-box"
                                                value={ageSelect}
                                                onChange={selectChange}
                                                IconComponent={Arrow}
                                                displayEmpty
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class",
                                                    },
                                                }}
                                            >
                                                <MenuItem value="" disabled>
                                                    전체
                                                </MenuItem>
                                                <MenuItem value={10}>
                                                    Ten
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    Twenty
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <Select
                                                className="select-box"
                                                value={ageSelect}
                                                onChange={selectChange}
                                                IconComponent={Arrow}
                                                displayEmpty
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class",
                                                    },
                                                }}
                                            >
                                                <MenuItem value="" disabled>
                                                    전체
                                                </MenuItem>
                                                <MenuItem value={10}>
                                                    Ten
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    Twenty
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <Select
                                                className="select-box"
                                                value={ageSelect}
                                                onChange={selectChange}
                                                IconComponent={Arrow}
                                                displayEmpty
                                                MenuProps={{
                                                    classes: {
                                                        paper: "select-option-class",
                                                    },
                                                }}
                                            >
                                                <MenuItem value="" disabled>
                                                    전체
                                                </MenuItem>
                                                <MenuItem value={10}>
                                                    Ten
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    Twenty
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">상품 코드</TableCell>
                                <TableCell colSpan={3}>
                                    <div className="text-area required">
                                        <textarea name="" id=""></textarea>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">상품 명</TableCell>
                                <TableCell colSpan={3}>
                                    <div className="input-area">
                                        <TextField
                                            className="input-field"
                                            id="text1"
                                            placeholder="상품 명 입력"
                                            fullWidth
                                        />
                                        <p className="positive-ico-txt">
                                            체크 완료
                                        </p>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">사용 여부</TableCell>
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
                                            value="female"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            className="cr-label"
                                            value="male"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="Male"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">
                                    전략 상품 여부
                                </TableCell>
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
                                            value="female"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            className="cr-label"
                                            value="male"
                                            control={
                                                <Radio
                                                    checkedIcon={
                                                        <RadioChecked />
                                                    }
                                                    icon={<RadioDefault />}
                                                />
                                            }
                                            label="Male"
                                        />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">등록 일시</TableCell>
                                <TableCell>2024-05-06 10:10:05</TableCell>
                                <TableCell component="th">등록자</TableCell>
                                <TableCell>김멀더 (MulderKim)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">수정 일시</TableCell>
                                <TableCell>2024-05-06 10:10:05</TableCell>
                                <TableCell component="th">수정자</TableCell>
                                <TableCell>김멀더 (MulderKim)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>
            {/* 팝업 */}
            <TabPanel value={value} index={9}>
                <Button variant="primary" onClick={alertOpen}>
                    얼럿
                </Button>
                &nbsp;
                <Button variant="primary" onClick={confirmOpen}>
                    컨펌
                </Button>
                &nbsp;
                <Button variant="primary" onClick={popupOpen}>
                    레이어 팝업
                </Button>
                {/* 얼럿 */}
                <Dialog
                    className="alert-box"
                    open={alertStauts}
                    onClose={alertClose}
                >
                    <DialogContent>
                        본문 내용이 들어갑니다. 본문 내용이 들어갑니다.본문
                        내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다. 본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다. 본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.
                    </DialogContent>
                    <DialogActions>
                        <Button variant="sub2" onClick={alertClose}>
                            닫기
                        </Button>
                    </DialogActions>
                    <IconButton className="dialog-close" onClick={alertClose}>
                        <Icons15 fill="#222 " />
                    </IconButton>
                </Dialog>
                {/* 컨펌 */}
                <Dialog
                    className="confirm-box"
                    open={confirmStauts}
                    onClose={confirmClose}
                >
                    <DialogTitle>{"타이틀"}</DialogTitle>
                    <DialogContent>
                        본문 내용이 들어갑니다. 본문 내용이 들어갑니다.본문
                        내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다. 본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다. 본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.본문 내용이
                        들어갑니다.본문 내용이 들어갑니다.
                    </DialogContent>
                    <DialogActions>
                        <Button variant="sub2" onClick={confirmClose}>
                            닫기
                        </Button>
                        <Button variant="primary">확인</Button>
                    </DialogActions>
                    <IconButton className="dialog-close" onClick={confirmClose}>
                        <Icons15 fill="#222 " />
                    </IconButton>
                </Dialog>
                {/* 레이어팝업 */}
                <Dialog
                    className="layer-box "
                    open={popupStauts}
                    onClose={popupClose}
                >
                    <DialogTitle>{"타이틀"}</DialogTitle>
                    <DialogContent>
                        <div>
                            <Select
                                className="select-box"
                                value={ageSelect}
                                onChange={selectChange}
                                IconComponent={Arrow}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    전체
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                            </Select>
                        </div>
                        <div className="text-area ">
                            <textarea name="" id=""></textarea>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="sub2" onClick={popupClose}>
                            닫기
                        </Button>
                        <Button variant="primary">확인</Button>
                    </DialogActions>
                    <IconButton className="dialog-close" onClick={popupClose}>
                        <Icons15 fill="#222 " />
                    </IconButton>
                </Dialog>
            </TabPanel>
            {/* 데이터픽커 */}
            <TabPanel value={value} index={10}>
                <p>range픽커</p>
                <div className="date-picker-area">
                    <DatePicker
                        selectsRange={true}
                        startDate={rangeStartDate}
                        endDate={rangeEndDate}
                        onChange={(update: any) => {
                            setDateRange(update);
                        }}
                        // isClearable={true}
                        dateFormat="yyyy-MM-dd"
                        locale={ko}
                    />
                    <div className="date-month-btn">
                        <button type="button" className="active">
                            3개월
                        </button>
                        <button type="button">6개월</button>
                        <button type="button">1년</button>
                        <button type="button">3년</button>
                        <button type="button">5년</button>
                    </div>
                </div>
                <br />
                <div className="date-picker-area">
                    <DatePicker
                        selected={startDate}
                        onChange={(date: any) => setStartDate(date)}
                        dropdownMode="select"
                        dateFormat="yyyy-MM-dd"
                        locale={ko}
                        placeholderText="기간을 선택해주세요"
                    />
                    <div className="date-month-btn">
                        <span className="date-ym-radio">
                            <input type="radio" name="date1" id="3m" />
                            <label htmlFor="3m">3개월</label>
                        </span>
                        <span className="date-ym-radio">
                            <input type="radio" name="date1" id="6m" />
                            <label htmlFor="6m">6개월</label>
                        </span>
                        <span className="date-ym-radio">
                            <input type="radio" name="date1" id="1y" />
                            <label htmlFor="1y">1년</label>
                        </span>
                        <span className="date-ym-radio">
                            <input type="radio" name="date1" id="3y" />
                            <label htmlFor="3y">3년</label>
                        </span>
                        <span className="date-ym-radio">
                            <input type="radio" name="date1" id="5y" />
                            <label htmlFor="5y">5년</label>
                        </span>
                    </div>
                </div>
                <br />
                <div className="date-picker-area">
                    <DatePicker
                        selected={startDate}
                        onChange={(date: any) => setStartDate(date)}
                        dropdownMode="select"
                        dateFormat="yyyy-MM-dd"
                        locale={ko}
                        placeholderText="기간을 선택해주세요"
                    />
                </div>
                <br />
                <div className="date-picker-area">
                    <DatePicker
                        selected={startDate}
                        onChange={(date: any) => setStartDate(date)}
                        dropdownMode="select"
                        dateFormat="yyyy-MM-dd"
                        locale={ko}
                        placeholderText="기간을 선택해주세요"
                        disabled
                    />
                </div>
            </TabPanel>
            {/* 뱃지 */}
            <TabPanel value={value} index={11}>
                <Badge value="ADM006" color="gray" />
                <Badge value="사용중" color="green" />
                <Badge value="사용중중중중중중중중중중" color="green" />
                <Badge value="사용중" color="green" size="large" />
                <Badge value="과제 종료" color="gray" size="large" />
                <Badge value="반려" color="red" size="large" />
                <br />
                <br />
                <div className="badge-wrap">
                    <Badge value="반응률" color="green" />
                    <Badge value="인기" color="blue" />
                    <Badge value="중분류" color="navy " />
                    <Badge value="추천" color="black " />
                    <Badge value="지수" color="orange" />
                    <Badge value="필터" color="purple" />
                    <Badge value="모델" color="blue2" />
                    <Badge value="고객성향" color="blue3" />
                    <Badge value="고객정보" color="blue4" />
                    <Badge value="N" color="red" />
                </div>
                <br />
                <p>
                    <strong>큰 사이즈</strong>
                </p>
                <div className="badge-wrap">
                    <Badge value="사용중" color="green" size="large" />
                    <Badge value="과제 종료" color="gray" size="large" />
                    <Badge value="반려" color="red" size="large" />
                </div>
                <br />
                <p>
                    <strong>라인 형</strong>
                </p>
                <div className="badge-wrap">
                    {/* <Badge value="과제 신청" color="blue" type="line" /> */}
                    <Badge value="과제 신청" color="blue2" type="line" />
                    <Badge value="검토중" color="blue2" type="line" />
                    <Badge value="진행중" color="blue2" type="line" />
                    <Badge value="과제 종료" color="gray" type="line" />
                    <Badge value="미채택" color="red" type="line" />
                </div>
            </TabPanel>
            {/* 해시태그 */}
            <TabPanel value={value} index={12}>
                <div className="hash-wrap">
                    <Hash value="#해시태그" />
                    <Hash value="#해시태그" del={true} />
                    <Hash value="#해시태그" type="type2" />
                    <Hash value="+5" type="type2" />
                </div>
            </TabPanel>
            {/* SVG */}
            <TabPanel value={value} index={13}>
                <SvgSample />
            </TabPanel>
            {/* 툴팁 */}
            <TabPanel value={value} index={14}>
                <Tooltip
                    onClose={TooltipClose}
                    open={tooltipOpen}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={tooptipText}
                    placement="bottom-start"
                    slotProps={{
                        popper: {
                            disablePortal: true,
                        },
                    }}
                >
                    <i className="ico-text" onClick={TooltipOpen}>
                        ?
                    </i>
                </Tooltip>
            </TabPanel>
            {/* 타겟추출카드 */}
            <TabPanel value={value} index={15}>
                <div className="card-box-wrap">
                    <div className="card-box">
                        <a href="#" className="active">
                            <div className="book-mark">
                                <Checkbox
                                    className="book-mark"
                                    icon={<Bookmark />}
                                    checkedIcon={<BookmarkOn />}
                                    defaultChecked
                                />
                            </div>
                            <div className="badge-wrap">
                                <Badge value="전략" color="black " />
                                <Badge value="중분류" color="navy " />
                                <Badge value="N" color="red" />
                            </div>
                            <p className="card-box-tit">
                                <strong>
                                    프리빌트 된 항목에 대한제제제제제제제
                                </strong>
                            </p>
                            <p className="card-box-desc">
                                프리빌트된 항목에 대한 간략한 설명이 들어갑니다.
                                최대 2줄 까지 들어갑니다. 그 이후에는 말줄임표로
                                생략됩니다.
                            </p>
                            <div className="card-box-bottom">
                                <div className="hash-wrap">
                                    <Hash value="#TAG" type="type2" />
                                    <Hash value="#TAG" type="type2" />
                                    <Hash value="#TAG" type="type2" />
                                    <Hash value="+5" type="type2" />
                                </div>
                                <IconButton className="ico-circle20">
                                    <Search12 />
                                </IconButton>
                            </div>
                        </a>
                    </div>
                    {[1, 2, 3, 4, 5].map((v, i) => (
                        <div className="card-box" key={i}>
                            <a href="#" className="">
                                <div className="book-mark">
                                    <Checkbox
                                        icon={<Bookmark />}
                                        checkedIcon={<BookmarkOn />}
                                        defaultChecked
                                    />
                                </div>
                                <div className="badge-wrap">
                                    <Badge value="전략" color="black " />
                                    <Badge value="중분류" color="navy " />
                                    <Badge value="N" color="red" />
                                </div>
                                <p className="card-box-tit">
                                    <strong>
                                        프리빌트 된 항목에 대한제제제제제제제
                                    </strong>
                                </p>
                                <p className="card-box-desc">
                                    프리빌트된 항목에 대한 간략한 설명이
                                    들어갑니다. 최대 2줄 까지 들어갑니다. 그
                                    이후에는 말줄임표로 생략됩니다.
                                </p>
                                <div className="card-box-bottom">
                                    <div className="hash-wrap">
                                        <Hash
                                            value="#한글한글한글"
                                            type="type2"
                                        />
                                        <Hash
                                            value="#한글한글한글"
                                            type="type2"
                                        />
                                        <Hash value="+2" type="type2" />
                                    </div>
                                    <IconButton className="ico-circle20">
                                        <Search12 />
                                    </IconButton>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <br />
                <div className="target-add-box">
                    <IconButton className="ico-rect23">
                        <Plus9 />
                    </IconButton>
                    <p>모델 추가</p>
                </div>
                <br />
                <div className="item-box">
                    <div className="top">
                        <Badge value="지수" color="orange" />
                        <strong>자린고비 지수</strong>
                    </div>
                    <p className="desc">
                        1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                    </p>
                </div>
                <br />
                <div className="simulation-box">
                    <strong>시뮬레이션</strong>
                    <div className="middle-box">
                        <div className="success-rate">
                            <span>예상 성공률</span>
                            <em>00.00%</em>
                        </div>
                        <div className="bench-contrast">
                            <span>벤치마크 대비</span>
                            <em>0.00% ↓</em>
                        </div>
                    </div>
                    <div className="bench-success-rate">
                        <span>벤치마크 예상 성공률</span>
                        <em>00.00%</em>
                    </div>
                </div>
                <br />
                <div className="error-box">
                    LMS 대량 발송이 불가합니다. (최대 2,000건)
                </div>
            </TabPanel>
            {/* 싱글뷰 */}
            <TabPanel value={value} index={16}>
                <div className="single-view-box blue">
                    <div className="left">
                        <Badge value="Profile 기반 추천" color="blue3 " />
                        <p>
                            <strong>골드리슈</strong>
                        </p>
                    </div>
                    <div className="right">
                        <em>87%</em>
                        <span>(N등급)</span>
                    </div>
                </div>
                <div className="single-view-box red">
                    <div className="left">
                        <Badge value="Profile 기반 추천" color="red " />
                        <p>
                            <strong>골드리슈</strong>
                        </p>
                    </div>
                    <div className="right">
                        <em>87%</em>
                        <span>(N등급)</span>
                    </div>
                </div>
                <div className="single-view-box green">
                    <div className="left">
                        <Badge value="Profile 기반 추천" color="green " />
                        <p>
                            <strong>골드리슈</strong>
                        </p>
                    </div>
                    <div className="right">
                        <em>87%</em>
                        <span>(N등급)</span>
                    </div>
                </div>
                <div className="single-view-box">
                    <div className="left">
                        <Badge value="Profile 기반 추천" color="black " />
                        <p>
                            <strong>골드리슈</strong>
                        </p>
                    </div>
                    <div className="right">
                        <em>87%</em>
                        <span>(N등급)</span>
                    </div>
                </div>
                <br />

                <ProgressBar percent={60} />
            </TabPanel>
            {/* 인풋 파일 */}
            <TabPanel value={value} index={17}>
                <div className="file-area">
                    <div className="input-file">
                        <label htmlFor="file1-1">
                            파일 선택
                            <input type="file" name="" id="file1-1" />
                        </label>
                        <div className="file-list">
                            <div className="delete-item">
                                <span>과제명파일명.png</span>
                                <IconButton>
                                    <X />
                                </IconButton>
                            </div>
                            <div className="delete-item">
                                <span>과제명파일명2.png</span>
                                <IconButton>
                                    <X />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <div className="file-volume">
                        <span>2</span>개<span> / </span>
                        <span>1,124</span>Ktyte
                    </div>
                </div>
                <br />
                <div className="file-area">
                    <div className="input-file">
                        <label htmlFor="file1-2">
                            파일 선택
                            <input type="file" name="" id="file1-2" />
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
                </div>
                <br />
            </TabPanel>
            {/* 페이지네이션 */}
            <TabPanel value={value} index={18}>
                <Pagination
                    className="pagination"
                    count={10}
                    showFirstButton
                    showLastButton
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{
                                previous: Prev,
                                next: Next,
                                first: First,
                                last: Last,
                            }}
                            {...item}
                        />
                    )}
                />
            </TabPanel>
        </Box>
    );
}
