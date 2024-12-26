// necessary set
import React from "react";

// need content
import Hash from "~/muiPublish/components/Hash";

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
 * user-front: TargetSelectInfor
 * TargetSelectInfor page
 * 선택한 추출의 모델 명 소개
 */
const TargetSelectInfor: React.FC<IPageProps> = (props) => {
    return (
        <>
            <div className="target-select-infor">
                <p className="tit">새희망 홀씨대출</p>
                <p className="txt">새희망 홀씨대출 신규 취급을 예측하는 모델</p>
                <div className="hash-wrap">
                    <Hash value="#TAG" type="type2" />
                    <Hash value="#TAG" type="type2" />
                    <Hash value="#TAG" type="type2" />
                    <Hash value="+5" type="type2" />
                </div>
            </div>
        </>
    );
};

export default TargetSelectInfor;
