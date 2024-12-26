// necessary set
import React from "react";

// need content
import TargetAddArea from "~/muiPublish/components/modelIndexFilter/TargetAddArea";
import TargetSelectInfor from "~/muiPublish/components/modelIndexFilter/TargetSelectInfor";
import ConditionList from "~/muiPublish/components/modelIndexFilter/ConditionList";
import NoData from "~/muiPublish/components/noData/noData";

// need style
import "~/muiPublish/components/modelIndexFilter/modelIndexFilter.scss";

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
 * user-front: ModelIndexFilter
 * ModelIndexFilter page
 * 선택한 추출 컨텐츠
 */
const ModelIndexFilter: React.FC<IPageProps> = (props) => {
    return (
        <>
            <TargetSelectInfor />
            <ConditionList />
            {/* no data :  <NoData pageName={props.pageName} /> */}
        </>
    );
};

export default ModelIndexFilter;
