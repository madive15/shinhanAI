// necessary set
import React from "react";

// need content
import Top from "~/publish/layout/Top";
import MenuContainer from "~/publish/layout/MenuContainer";

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
const AdminLayout: React.FC<IPageProps> = () => {
    // loading
    //   const [loading, setLoading] = useState<boolean>(true)
    //   const useLoading = (onoff: boolean) => {
    //     setLoading(onoff)
    //   }

    return (
        <div className="flexible-side-layout">
            {/* {loading && <Loading />} */}
            <Top pageName={""} subName={""} />
            <div className="container">
                <MenuContainer pageName={""} subName={""} />
                <div className="content">asdasdasdasd</div>
            </div>
        </div>
    );
};

export default AdminLayout;
