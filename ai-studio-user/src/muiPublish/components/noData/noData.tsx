// necessary set
import React from "react";

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
 * user-front: noData
 * noData page
 * 데이터 없음
 */
const noData: React.FC<IPageProps> = (props) => {
    return (
        <div className="no-data">
            {props.pageName === "타겟추출" && (
                <div>
                    <div className="no-data-img"></div>
                    <strong>AI가 미리 생성해놓은 조건</strong>을 선택해서
                    <br /> 타겟을 추출하세요.
                </div>
            )}
        </div>
    );
};

export default noData;
