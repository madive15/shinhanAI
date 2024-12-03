import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "~/muiPublish/guide/guide.scss";
import Button from "@mui/material/Button";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
        onChange={handleChange}
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
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </TabPanel>
      <TabPanel value={value} index={3}>
        인폿 가이드 추가
      </TabPanel>
      <TabPanel value={value} index={4}>
        체크박스 가이드 추가
      </TabPanel>
      <TabPanel value={value} index={5}>
        라디오 가이드 추가
      </TabPanel>
      <TabPanel value={value} index={6}>
        텍스트에어리어 가이드 추가
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
