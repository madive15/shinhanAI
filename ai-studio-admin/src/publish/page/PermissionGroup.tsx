// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import AdminTab from "~/publish/components/AdminTab";
import SubTitle from "~/publish/components/SubTitle";
import SearchContent from "~/publish/components/SearchContent";
import TableSample from "~/publish/components/TableSample";
import Cardlist from "~/publish/components/Cardlist";

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
 * admin-front: PermissionGroup 관리자메뉴 권한관리
 * PermissionGroup
 */
const PermissionGroup: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  //어드민 탭
  const adminMenu = ["권한그룹관리", "메뉴2", "메뉴3", "메뉴4"];

  return (
    <>
      <div className="tabs-area">
        <AdminTab menuName={adminMenu} />
      </div>
      <div className="tabs-contents">
        <SubTitle pageName={props.pageName} />
        <div className="tabs-scroll-area">
          <SearchContent />
          <div className="card-table">
            <div className="left">
              <Cardlist pageName={props.pageName} />
            </div>
            <div className="right">
              <div className="right-scroll-area">
                <TableSample pageName={props.pageName} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PermissionGroup;
