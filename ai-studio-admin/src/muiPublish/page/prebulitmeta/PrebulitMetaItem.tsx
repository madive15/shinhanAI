// necessary set
import React, { useState, useEffect, useRef } from "react";
import Badge from "~/muiPublish/components/Badge";

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
 * user-front: PrebulitMetaItem
 * PrebulitMetaItem
 */
const PrebulitMetaItem: React.FC<IPageProps> = (props) => {
    return (
        <div className="item-view-list">
            <div className="view-item-box">
                <div className="top">
                    <Badge value="모델" color="blue" />
                    <strong>자린고비 지수</strong>
                </div>
                <p className="desc">
                    1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                </p>
            </div>
            <div className="view-item-box">
                <div className="top">
                    <Badge value="필터" color="purple" />
                    <strong>자린고비 지수</strong>
                </div>
                <p className="desc">
                    1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                </p>
            </div>
            <div className="view-item-box">
                <div className="top">
                    <Badge value="지수" color="orange" />
                    <strong>자린고비 지수</strong>
                </div>
                <p className="desc">
                    1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                </p>
            </div>
            <div className="view-item-box">
                <div className="top">
                    <Badge value="필터" color="purple" />
                    <strong>자린고비 지수</strong>
                </div>
                <p className="desc">
                    1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                </p>
            </div>
            <div className="view-item-box">
                <div className="top">
                    <Badge value="지수" color="orange" />
                    <strong>자린고비 지수</strong>
                </div>
                <p className="desc">
                    1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                </p>
            </div>
        </div>
    );
};

export default PrebulitMetaItem;
