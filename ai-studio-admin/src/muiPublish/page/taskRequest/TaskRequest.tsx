// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import AdminTab from "~/muiPublish/components/AdminTab";
import SubTitle from "~/muiPublish/components/SubTitle";
import SearchContent from "~/muiPublish/components/SearchContent";
import TaskRequestTable from "~/muiPublish/page/taskRequest/TaskRequestTable";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import Cardlist from "~/publish/components/Cardlist";

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
 * admin-front: TaskRequest
 * 상품메타관리 page
 */
const TaskRequest: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };
  const [ageSelect, setAgeSelect] = React.useState("");
  const selectChange = (event: SelectChangeEvent) => {
    setAgeSelect(event.target.value as string);
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  //table 탭
  const adminMenu = [props.pageName, "메뉴2", "메뉴3", "메뉴4"];

  // subtitle search height, btn content height
  const [leftHeight, setLeftHeight] = useState<number>(0);
  const [rightHeight, setRightHeight] = useState<number>(0);
  const subTitSearch = useRef<HTMLDivElement | null>(null);
  const subTitleLeft = useRef<HTMLDivElement | null>(null);
  const subTitleRight = useRef<HTMLDivElement | null>(null);
  const subBtnCheck = useRef<HTMLDivElement | null>(null);
  const [heiTitSearch, setHeiTitSearch] = useState<number>(190);
  useEffect(() => {
    if (subTitSearch.current) {
      // 조회 영역
      const subTitSearchHeight = subTitSearch.current.offsetHeight;

      // left subtitle check
      if (subTitleLeft.current) {
        const titleLeftHeight = subTitleLeft.current.offsetHeight;
        setLeftHeight(subTitSearchHeight + titleLeftHeight + 206);
      } else {
        setLeftHeight(subTitSearchHeight + 190);
      }

      // right subtitle check
      if (subTitleRight.current) {
        const titleRightHeight = subTitleRight.current.offsetHeight;
        // right btn check
        if (subBtnCheck?.current) {
          const subBtnHeight = subBtnCheck.current.offsetHeight;
          setRightHeight(
            subTitSearchHeight + titleRightHeight + subBtnHeight + 214
          );
        } else {
          setRightHeight(subTitSearchHeight + titleRightHeight + 206);
        }
      } else {
        // right btn check
        if (subBtnCheck?.current) {
          const subBtnHeight = subBtnCheck.current.offsetHeight;
          setRightHeight(subTitSearchHeight + subBtnHeight + 214);
        } else {
          setRightHeight(subTitSearchHeight + 190);
        }
      }
    }
  }, [
    subTitSearch?.current?.offsetHeight,
    subTitleLeft?.current?.offsetHeight,
    subTitleRight?.current?.offsetHeight,
    subBtnCheck?.current?.offsetHeight,
    rightHeight,
    leftHeight,
  ]);
  useEffect(() => {
    if (subTitSearch.current) {
      const offsetHeight = subTitSearch.current.offsetHeight;
      const offsetWidth = subTitSearch.current.offsetWidth;
      console.log("Height:", offsetHeight + 190, "Width:", offsetWidth);
      setHeiTitSearch(offsetHeight + 190);
    }
  }, [subTitSearch?.current?.offsetHeight, heiTitSearch]);
  return (
    <>
      <div className="tabs-area">
        <AdminTab menuName={adminMenu} />
      </div>
      <div className="tabs-contents">
        <div className="sub-tit-search" ref={subTitSearch}>
          <SubTitle pageName={props.pageName} />
          <SearchContent pageName={props.pageName} />
        </div>
        <div className="tabs-scroll-area">
          <div className="table-title" ref={subTitleLeft}>
            <div className="tit-sum">
              <h2>{props.pageName}</h2>
              <span className="sum">총 00건</span>
            </div>
            <div className="table-title-right">
              <Select
                className="select-box "
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
                  등록일 ↑
                </MenuItem>
                <MenuItem value={10}>등록일 ↑</MenuItem>
                <MenuItem value={20}>↑</MenuItem>
              </Select>
              <Button variant="sub1">선택 삭제</Button>
            </div>
          </div>
          <TaskRequestTable
            heiTitSearch={leftHeight}
            pageName={props.pageName}
          />
        </div>
      </div>
    </>
  );
};

export default TaskRequest;
