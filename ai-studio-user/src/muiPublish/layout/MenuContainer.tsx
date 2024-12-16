// necessary set
import React from "react";

// need content
import Sidebar from "~/muiPublish/components/Sidebar";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

// need style

/**
 * @author shinhanAI
 * @description
 * user-front: user MenuContainer
 * user MenuContainer
 */

const MenuContainer: React.FC<IPageProps> = (props) => {
    return (
        <div className="side-content">
            <Sidebar />
        </div>
    );
};

export default MenuContainer;
