// necessary set
import React, { useState, useEffect } from "react";
import { Stack, styled, Container } from "@mui/material";
// import theme from "~/muiPublish/theme/theme";

// need content
import Loading from "~/muiPublish/loading/Loading";
import Top from "~/muiPublish/layout/Top";
import MenuContainer from "~/muiPublish/layout/MenuContainer";
import Main from "~/muiPublish/page/main/Main";

// need style
import "~/muiPublish/layout/layout.scss";
import LayoutStyle from "~/muiPublish/theme/LayoutStyle";

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
 * user-front: user Layout
 * user Layout
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
    <LayoutStyle className="flexible-side-layout">
      {loading && <Loading />}
      <MenuContainer pageName={""} subName={""} />
      <div className="container">
        <Top pageName={""} subName={""} />
        <div className="content">
          <div className="tabs-area">tabs</div>
          <div className="tabs-contents">
            {props.pageName === "MAIN" && <Main pageName={props.pageName} />}
          </div>
          {/* Tab contents Page */}

          {/* {props.pageName === "샘플폼" && <SampleForm pageName={props.pageName} />}
                    {props.pageName === "상품메타관리" && <ProductMeta pageName={props.pageName} />} */}
        </div>
      </div>
    </LayoutStyle>
  );
};

export default Layout;
