// necessary set
import React, { useState, useEffect, useRef } from "react";
import Hash from "~/muiPublish/components/Hash";

// need style

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
 * user-front: PrebulitMetaInfo
 * PrebulitMetaInfo
 */
const PrebulitMetaInfo: React.FC<IPageProps> = (props) => {
    return (
        <div className="detail-info-list">
            <div className="detail-info-box ">
                <strong>상세 설명</strong>
                <p className="ellipsis2">
                    프리빌트의 상세 설명입니다. 입력된 상세 설명을 두 줄로 보여
                    줍니다. 프리빌트의 상세 설명입니다. 입력된 상세 설명을 두
                    줄로 보여 줍니다.
                </p>
            </div>
            <div className="detail-info-box ">
                <strong>태그</strong>
                <div className="hash-wrap">
                    <Hash value="#TAG" type="type2" />
                    <Hash value="#TAG" type="type2" />
                    <Hash value="#TAG" type="type2" />
                    <Hash value="+5" type="type2" />
                </div>
            </div>
            <div className="detail-info-box half">
                <div>
                    <strong>노출 여부</strong>
                    <p className="ellipsis2">사용</p>
                </div>
                <div>
                    <strong>노출 여부</strong>
                    <p className="ellipsis2">사용</p>
                </div>
            </div>
        </div>
    );
};

export default PrebulitMetaInfo;
