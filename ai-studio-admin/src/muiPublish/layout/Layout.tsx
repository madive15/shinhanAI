// necessary set
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
// import theme from "~/muiPublish/theme/theme";

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
        <Container className="flexible-side-layout">
            <div className="flexible-side-layout">asdasdasdasdasd</div>
        </Container>
    );
};

export default Layout;
