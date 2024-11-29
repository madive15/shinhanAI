// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import AdminTab from "~/publish/components/AdminTab";
import SubTitle from "~/publish/components/SubTitle";
import SearchContent from "~/publish/components/SearchContent";
import TableSample from "~/publish/components/TableSample";
import Cardlist from "~/publish/components/Cardlist";
import Treelist from "~/publish/components/Treelist";
import Button from "~/publish/components/Button";
import ButtonWrap from "~/publish/components/ButtonWrap";

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
 * admin-front: Manager 관리자메뉴 권한관리
 * Manager
 */
const Manager: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  //어드민 탭
  const adminMenu = ["관리자메뉴 권한관리", "메뉴2", "메뉴3", "메뉴4"];

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
                <Treelist pageName="관리자메뉴 목록" />
              </div>
              <ButtonWrap viewType="end">
                <Button value="변경 취소" viewType="sub1" />
                <Button value="변경 사항 저장" viewType="primary" />
              </ButtonWrap>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
