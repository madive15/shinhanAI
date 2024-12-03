// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import Top from "~/publish/layout/Top";
import MenuContainer from "~/publish/layout/MenuContainer";
import Auth from "~/publish/page/Auth";
import Manager from "~/publish/page/Manager";
import SampleTablePage from "~/publish/page/SampleTablePage";
import PermissionGroup from "~/publish/page/PermissionGroup";
import Member from "~/publish/page/Member";
import Ocrpage from "~/publish/page/Ocrpage";
import Metapage from "~/publish/page/Metapage";
import SampleForm from "~/publish/page/SampleForm";
import Taskpage from "~/publish/page/Taskpage";

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
 * admin-front: AdminLayout
 * AdminLayout
 */
const Layout: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flexible-side-layout">
      {loading && <Loading />}
      <Top pageName={""} subName={""} />
      <div className="container">
        <MenuContainer pageName={""} subName={""} />
        <div className="content">
          {/* Tab contents Page */}
          {props.pageName === "샘플폼" && (
            <SampleForm pageName={props.pageName} />
          )}
          {props.pageName === "샘플테이블" && (
            <SampleTablePage pageName={props.pageName} />
          )}
          {props.pageName === "권한관리" && <Auth pageName={props.pageName} />}
          {props.pageName === "관리자메뉴 권한관리" && (
            <Manager pageName={props.pageName} />
          )}
          {props.pageName === "권한그룹관리" && (
            <PermissionGroup pageName={props.pageName} />
          )}
          {props.pageName === "회원관리" && (
            <Member pageName={props.pageName} />
          )}
          {props.pageName === "AI-OCR 검증 결과 관리" && (
            <Ocrpage pageName={props.pageName} />
          )}
          {props.pageName === "상품 메타관리" && (
            <Metapage pageName={props.pageName} />
          )}
          {props.pageName === "과제 신청" && (
            <Taskpage pageName={props.pageName} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
