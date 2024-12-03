import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "~/muiPublish/guide/guide.scss";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
      <TabPanel value={value} index={0}>
        컬러 가이드 추가
      </TabPanel>
      <TabPanel value={value} index={1}>
        텍스트 가이드 추가
      </TabPanel>
      <TabPanel value={value} index={2}>
        버튼 가이드 추가
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
