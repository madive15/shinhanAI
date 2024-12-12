// necessary set
import React, { useState, useEffect, useRef } from "react";

// need content
import Loading from "~/muiPublish/loading/Loading";
import AdminTab from "~/muiPublish/components/AdminTab";
import SubTitle from "~/muiPublish/components/SubTitle";
import SearchContent from "~/muiPublish/components/SearchContent";
import ProductMetaTable from "~/muiPublish/page/productMeta/ProductMetaTable";
import ProductMetaFormTable from "~/muiPublish/page/productMeta/ProductMetaFormTable";
import Button from "@mui/material/Button";

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
 * admin-front: ProductMeta
 * 상품메타관리 page
 */
const TaskRequest: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
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
          </div>
          <ProductMetaTable
            pageName={props.pageName}
            heiTitSearch={leftHeight}
          />
        </div>
      </div>
    </>
  );
};

export default TaskRequest;
