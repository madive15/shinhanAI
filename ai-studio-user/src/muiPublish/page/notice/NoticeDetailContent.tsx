// necessary set
import React, { useState, useEffect } from "react";
import { ReactComponent as DownloadBlue } from "~assets/images/svg/icons-download-blue.svg";

// need content
import Button from "@mui/material/Button";
import Hash from "~/muiPublish/components/Hash";
// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    heiTitSearch?: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: NoticeDetailContent
 * NoticeDetailContent
 */
const NoticeDetailContent: React.FC<IPageProps> = (props) => {
    // loading
    const [loading, setLoading] = useState<boolean>(true);
    const [modify, setModify] = useState<boolean>(false);
    const useLoading = (onoff: boolean) => {
        setLoading(onoff);
    };

    useEffect(() => {
        setLoading(false);
    }, []);
    const modifyOpen = () => {
        setModify(true);
    };
    const modifyClose = () => {
        setModify(false);
    };
    return (
        <div className="board-detail-content ">
            {/* <h3>게시글 제목</h3> */}
            <div className="board-detail-tit">
                <strong>게시글 제목</strong>
            </div>
            <div className="board-detail-info">
                <p className="name">
                    <span>작성자</span>
                    <span>김멀더</span>
                </p>
                <p className="date">
                    <span>등록일</span>
                    <span>2024-11-25</span>
                </p>
                <p className="view">
                    <span>조회수</span>
                    <span>10</span>
                </p>
            </div>
            <div className="ql-editor">
                여기에 사용자와 관리자가 등록한 내용이 노출 됩니다. 가로 영역은
                100%로 잡으며 컨텐츠 길이에 따라 높이값이 유동적으로 변경
                됩니다. 하지만 최소 높이값은 240px로 하도록 합니다.
            </div>
            <div className="hash-wrap">
                <Hash value="#해시태그" type="type2" />
                <Hash value="#해시태그" type="type2" />
                <Hash value="#해시태그" type="type2" />
                <Hash value="#해시태그" type="type2" />
                <Hash value="#해시태그" type="type2" />
            </div>
            <div className="board-detail-file">
                <span>첨부파일</span>
                <div className="file-list">
                    <Button variant="iconLineBlue" endIcon={<DownloadBlue />}>
                        과제명파일명.png
                    </Button>
                    <Button variant="iconLineBlue" endIcon={<DownloadBlue />}>
                        과제명파일명.png
                    </Button>
                </div>
            </div>
            <div className="board-comment-wrap">
                <div className="comment-top">
                    댓글 <strong>총 {"12"}개</strong>
                </div>
                <ul className="comment-list">
                    <li className="comment-list-item">
                        <div className="comment-item-top">
                            <span className="name">관리자</span>
                            <span className="date">
                                2022-02-22{" "}
                                <span className="time">02:22:22</span>
                            </span>
                        </div>
                        <div className="comment-item">
                            <div className="txt">
                                <p>댓글</p>
                                <p>댓글</p>
                            </div>
                            <div className="btn-wrap">
                                <Button variant="small">삭제</Button>
                                <Button
                                    variant="smallSub1"
                                    onClick={modifyOpen}
                                >
                                    수정
                                </Button>
                            </div>
                        </div>
                        {modify && (
                            <div className="comment-modify">
                                <div className="text-area ">
                                    <textarea name="" id=""></textarea>
                                </div>
                                <div className="btn-wrap">
                                    {/* <Button
                                        variant="sub1"
                                        onClick={modifyClose}
                                    >
                                        취소
                                    </Button> */}
                                    <Button variant="sub2">댓글 수정</Button>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
                <div className="comment-write">
                    <div className="text-area ">
                        <textarea name="" id=""></textarea>
                    </div>
                    <Button variant="sub2">댓글 등록</Button>
                </div>
            </div>
        </div>
    );
};
export default NoticeDetailContent;
