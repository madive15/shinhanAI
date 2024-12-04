import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "~/muiPublish/guide/guide.scss";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as ChkDisabled } from "~assets/images/svg/Icons-chk-disabled.svg";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as RadioDisabled } from "~assets/images/svg/Icons-radio-disabled.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
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
  const [value, setValue] = React.useState(6);
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
      >
        <Tab label="Color" {...a11yProps(0)} />
        <Tab label="Text" {...a11yProps(1)} />
        <Tab label="Button" {...a11yProps(2)} />
        <Tab label="Input" {...a11yProps(3)} />
        <Tab label="CheckBox" {...a11yProps(4)} />
        <Tab label="Radio" {...a11yProps(5)} />
        <Tab label="TextArea" {...a11yProps(6)} />
        <Tab label="Select" {...a11yProps(7)} />
        <Tab label="DatePicker" {...a11yProps(8)} />
        <Tab label="Modal" {...a11yProps(9)} />
        <Tab label="LayerPopup" {...a11yProps(10)} />
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
          본문 비활성 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 14px
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
        <Button variant="primary">버튼 텍스트</Button>
        <Button variant="secondary">버튼 텍스트</Button>
        <Button variant="sub1">버튼 텍스트</Button>
        <Button variant="sub2">버튼 텍스트</Button>
        <Button variant="primaryBig">버튼 텍스트</Button>
        <Button variant="small">버튼 텍스트</Button>

        <Button variant="contained" disabled>
          Disabled
        </Button>
        <ToggleButton
          className="toggle-btn"
          value="check"
          selected={selected}
          onChange={() => setSelected((prevSelected) => !prevSelected)}
        >
          토글 버튼
        </ToggleButton>
        <Switch className="switch-btn" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        인폿 가이드 추가
      </TabPanel>
      {/* 체크박스 */}
      <TabPanel value={value} index={4}>
        <div>
          <Checkbox
            icon={<ChkDefault />}
            checkedIcon={<ChkChecked />}
            defaultChecked
          />
          <Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />
          <Checkbox
            icon={<ChkDefault />}
            checkedIcon={<ChkChecked />}
            disabled
          />
        </div>

        <div>
          <FormGroup row className="chk-group">
            <FormControlLabel
              control={
                <Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />
              }
              label="Label"
            />
            <FormControlLabel
              required
              control={
                <Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />
              }
              label="Required"
            />
            <FormControlLabel
              disabled
              control={
                <Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />
              }
              label="Disabled"
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
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div className="text-area ">
          {/* <TextField multiline /> */}
          <textarea name="" id=""></textarea>
        </div>
        <div className="text-area required">
          <textarea name="" id=""></textarea>
        </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
        셀렉트 가이드 추가
      </TabPanel>
      <TabPanel value={value} index={8}>
        데이터픽커 가이드 추가
      </TabPanel>
      <TabPanel value={value} index={9}>
        모달 가이드 추가
      </TabPanel>
      <TabPanel value={value} index={10}>
        레이어팝업 가이드 추가
      </TabPanel>
    </Box>
  );
}
