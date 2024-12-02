// necessary set
import React from "react";

// need content
import BoardTh from "../page/boards/BoardTh";
import BoardTd from "../page/boards/BoardTd";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";

// need style
import "./table.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

interface ITableProps extends IPageProps {
    accordion?: boolean;
}

const items = [
    {
        no: "1",
        id: "관리자",
        name: "관리자",
        des: "관리",
        division: "구분",
        createData: "9999-99-99",
        createName: "신한",
        modifyDate: "9999-99-99",
        modifyName: "신한",
    },
    {
        no: "2",
        id: "서브관리자",
        name: "서브관리자",
        des: "관리",
        division: "구분",
        createData: "9999-99-99",
        createName: "신한",
        modifyDate: "9999-99-99",
        modifyName: "신한",
    },
    {
        no: "3",
        id: "유저관리자",
        name: "유저관리자g",
        des: "관리",
        division: "구분",
        createData: "9999-99-99",
        createName: "신한",
        modifyDate: "9999-99-99",
        modifyName: "신한",
    },
    {
        no: "4",
        id: "게시판관리자",
        name: "게시판관리자s",
        des: "관리",
        division: "구분",
        createData: "9999-99-99",
        createName: "신한",
        modifyDate: "9999-99-99",
        modifyName: "신한",
    },
    {
        no: "5",
        id: "일반 관리자",
        name: "일반 관리자",
        des: "관리",
        division: "구분",
        createData: "9999-99-99",
        createName: "신한",
        modifyDate: "9999-99-99",
        modifyName: "신한",
    },
];

/**
 * @author shinhanAI
 * @description
 * admin-front: Table
 * Table page
 */
const OcrTable: React.FC<ITableProps> = (props) => {
    return (
        <div className="table-content">
            <div className="tb-body">
                <BoardTh
                    titleTxt={[
                        { text: "번호", width: 40 },
                        { text: "일자", width: 120 },
                        { text: "부서명", width: 120 },
                        {
                            text: "모델 ID",
                            width: 264,
                        },
                        {
                            text: "AI-OCR",
                            width: 768,
                            subTit: [
                                { subtext: "검증 총 건수", width: 96 },
                                { subtext: "성공 문서", width: 96 },
                                { subtext: "실패 문서", width: 96 },
                                { subtext: "문서 인식률(%)", width: 96 },
                                { subtext: "필드 총 건수", width: 96 },
                                { subtext: "필드 인식 성공", width: 96 },
                                { subtext: "필드 인식 실패", width: 96 },
                                { subtext: "필드 인식 률(%)", width: 96 },
                            ],
                        },
                        { text: "작업건수", width: 192 },
                    ]}
                    rows={[2]}
                    col={[8]}
                />

                {items !== undefined && items.length > 0 ? (
                    items.map((data, i) => (
                        <BoardTd
                            key={i}
                            id={i}
                            titleTxt={[
                                { text: data.no, width: 40 },
                                { text: data.id, width: 120 },
                                { text: data.name, width: 120 },
                                { text: data.des, width: 264 },
                                {
                                    text: data.division,
                                    width: 768,
                                    subTit: [
                                        { subtext: data.no, width: 96 },
                                        { subtext: data.no, width: 96 },
                                        { subtext: data.no, width: 96 },
                                        { subtext: data.no, width: 96 },
                                        { subtext: data.no, width: 96 },
                                        { subtext: data.no, width: 96 },
                                        { subtext: data.no, width: 96 },
                                        { subtext: data.no, width: 96 },
                                    ],
                                },
                                { text: data.division, width: 192 },
                            ]}
                            accordion={props.accordion}
                            pageName={props.pageName}
                            rows={[2]}
                            col={[8]}
                        />
                    ))
                ) : (
                    <div key={0}>
                        <p style={{ lineHeight: 1.6 }}>등록된 내역이 없습니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OcrTable;
