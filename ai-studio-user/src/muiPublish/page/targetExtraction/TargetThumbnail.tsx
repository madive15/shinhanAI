// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Bookmark } from "~assets/images/svg/Icons-Bookmark.svg";
import { ReactComponent as Search12 } from "~assets/images/svg/Icons-search-12.svg";
import { ReactComponent as BookmarkOn } from "~assets/images/svg/Icons-Bookmark-on.svg";
import TargetThumbnailRecom from "~/muiPublish/page/targetExtraction/TargetThumbnailRecom";
import Checkbox from "@mui/material/Checkbox";
import Badge from "~/muiPublish/components/Badge";
import Hash from "~/muiPublish/components/Hash";
import IconButton from "@mui/material/IconButton";

// need content
import Loading from "~/muiPublish/loading/Loading";
import NoData from "~/muiPublish/components/noData/noData";

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
 * user-front: TargetThumbnail
 * TargetThumbnail page
 * 타겟추출 - TargetThumbnail 리스트
 */
const TargetThumbnail: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    const tumbnail: any[] = [
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
        "썸네일",
    ];

    return (
        <>
            <TargetThumbnailRecom />
            <div className="list-title">인기 리스트</div>

            {tumbnail.length > 0 ? (
                <div className="card-box-wrap">
                    {tumbnail.map((v: string, i: number) => (
                        <div className="card-box" key={i}>
                            <a href="#" className="">
                                <div className="book-mark">
                                    <Checkbox
                                        className="book-mark"
                                        icon={<Bookmark />}
                                        checkedIcon={<BookmarkOn />}
                                        defaultChecked
                                    />
                                </div>
                                <div className="badge-wrap">
                                    <Badge value="전략" color="black " />
                                    <Badge value="중분류" color="navy " />
                                    <Badge value="N" color="red" />
                                </div>
                                <p className="card-box-tit">
                                    <strong>
                                        프리빌트 된 항목에 대한제제제제제제제
                                    </strong>
                                </p>
                                <p className="card-box-desc">
                                    프리빌트된 항목에 대한 간략한 설명이
                                    들어갑니다. 최대 2줄 까지 들어갑니다. 그
                                    이후에는 말줄임표로 생략됩니다.
                                </p>
                                <div className="card-box-bottom">
                                    <div className="hash-wrap">
                                        <Hash value="#TAG" type="type2" />
                                        <Hash value="#TAG" type="type2" />
                                        <Hash value="#TAG" type="type2" />
                                        <Hash value="+5" type="type2" />
                                    </div>
                                    <IconButton className="ico-circle20">
                                        <Search12 />
                                    </IconButton>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <NoData pageName={"타겟추출리스트"} />
            )}
        </>
    );
};

export default TargetThumbnail;
