// necessary set
import React from "react";

// need content
import Sidebar from "~/muiPublish/components/Sidebar";

// need style

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    openClose?: boolean;
    setOpenClose?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: user MenuContainer
 * user MenuContainer
 * layout 사이드영역
 */

const MenuContainer: React.FC<IPageProps> = (props) => {
    return (
        <div className="side-content">
            <Sidebar
                openClose={props.openClose}
                setOpenClose={props.setOpenClose}
            />
        </div>
    );
};

export default MenuContainer;
