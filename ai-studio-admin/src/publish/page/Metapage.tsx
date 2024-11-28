// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import AdminTab from "~/publish/components/AdminTab";
import SubTitle from "~/publish/components/SubTitle";
import SearchContent from "~/publish/components/SearchContent";
import Cardlist from "~/publish/components/Cardlist";
import RowTable from "~/publish/components/RowTable";

// need style
import "~/publish/layout/layout.scss";

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
 * admin-front: Sample table
 * Sample table page
 */
const SampleTablePage: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  //table 탭
  const adminMenu = ["상품 메타관리", "메뉴2", "메뉴3", "메뉴4"];

  return (
    <>
      <div className="tabs-area">
        <AdminTab menuName={adminMenu} />
      </div>
      <div className="tabs-contents">
        <SubTitle pageName={props.pageName} />
        <div className="tabs-scroll-area">
          <SearchContent pageName={props.pageName} />
          <div className="card-table">
            <Cardlist pageName={props.pageName} />
            <RowTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleTablePage;
