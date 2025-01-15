// necessary set
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";

// need content
import Button from "@mui/material/Button";
import Loading from "~/muiPublish/loading/Loading";
import AdminTab from "~/muiPublish/components/AdminTab";
import SubTitle from "~/muiPublish/components/SubTitle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchContent from "~/muiPublish/components/SearchContent";
import PrebulitMetaCategory from "~/muiPublish/page/prebulitmeta/PrebulitMetaCategory";
import PrebulitMetaCard from "~/muiPublish/page/prebulitmeta/PrebulitMetaCard";
import PrebulitMetaInfo from "~/muiPublish/page/prebulitmeta/PrebulitMetaInfo";
import PrebulitMetaTarget from "~/muiPublish/page/prebulitmeta/PrebulitMetaTarget";
import PrebulitMetaItem from "~/muiPublish/page/prebulitmeta/PrebulitMetaItem";

// need style
import "~/muiPublish/layout/layout.scss";

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
 * admin-front: PrebulitMeta
 * PrebulitMeta page
 */
const PrebulitMeta: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    //table 탭
    const adminMenu = [props.pageName, "메뉴2", "메뉴3", "메뉴4"];

    // subtitle search height, btn content height
    const subTitSearch = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <div className="tabs-area">
                <AdminTab menuName={adminMenu} />
            </div>
            <div className="tabs-contents">
                <div className="sub-tit-search" ref={subTitSearch}>
                    <SubTitle pageName={props.pageName} />
                </div>
                <div className="flex-box">
                    <div className="left">
                        <div className="between-box">
                            <div className="left">
                                <h2>모델설정</h2>
                            </div>
                            <div className="right">
                                <div className="search">
                                    <TextField
                                        hiddenLabel
                                        variant="outlined"
                                        placeholder="검색어를 입력해주세요"
                                    />
                                    <IconButton
                                        type="button"
                                        aria-label="search"
                                        className="icon-search"
                                    >
                                        <Search />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <SearchContent pageName={props.pageName} />
                        <PrebulitMetaCategory />
                        <PrebulitMetaCard />
                    </div>
                    <div className="right">
                        <div className="between-box">
                            <div className="left"></div>
                            <div className="right">
                                <Button variant="sub1">초기화</Button>
                                <Button variant="sub1">
                                    목록으로 돌아가기
                                </Button>
                                <Button variant="primary">메인모델 저장</Button>
                            </div>
                        </div>
                        <div className="right-scroll-area">
                            <PrebulitMetaItem />
                            <PrebulitMetaTarget />
                            <PrebulitMetaInfo />
                            <Button variant="sub2" fullWidth>
                                기본정보 입력/수정
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrebulitMeta;
