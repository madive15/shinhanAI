// necessary set
import React from "react";

// need content
import BoardTh from "../page/boards/BoardTh";
import BoardTd from "../page/boards/BoardTd";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";
import Select from "~/publish/components/Select";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";

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
const TableSample: React.FC<ITableProps> = (props) => {
    //셀렉트
    const options = [
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" },
        { value: "option4", label: "옵션 4" },
        { value: "option5", label: "옵션 5" },
        { value: "option6", label: "옵션 6" },
        { value: "option7", label: "옵션 7" },
        { value: "option8", label: "옵션 8" },
    ];

    return (
        <div className="table-content">
            <div className="tb-title">
                <div className="tit-sum">
                    <h2>{props.pageName}</h2>
                    {props.pageName === "AI-OCR 검증 결과 관리" && <span className="sum">2024-07-01 ~ 2024-07-31</span>}
                    <span className="sum">00 건</span>
                </div>

                <Button value="신규 추가" viewType="secondary" />
            </div>
            <div className="tb-body">
                <BoardTh
                    titleTxt={[
                        { text: "체크박스", width: 40 },
                        { text: "번호", width: 48 },
                        { text: "권한ID", width: 112 },
                        { text: "권한명", width: 136 },
                        { text: "권한설명", width: 208 },
                        { text: "권한 구분", width: 208 },
                        { text: "등록일시", width: 208 },
                        { text: "등록자", width: 208 },
                        { text: "수정일시", width: 208 },
                        { text: "수정자", width: 208 },
                    ]}
                    type={props.pageName === "권한그룹관리" ? "input" : "data"}
                />

                {items !== undefined && items.length > 0 ? (
                    items.map((data, i) => (
                        <BoardTd
                            key={i}
                            id={i}
                            titleTxt={[
                                { text: "체크박스", width: 40 },
                                { text: data.no, width: 48 },
                                { text: data.id, width: 112 },
                                { text: data.name, width: 136 },
                                { text: data.des, width: 208 },
                                { text: data.division, width: 208 },
                                { text: data.createData, width: 208 },
                                { text: data.createName, width: 208 },
                                { text: data.modifyDate, width: 208 },
                                { text: data.modifyName, width: 208 },
                            ]}
                            accordion={props.accordion}
                            pageName={props.pageName}
                            type={props.pageName === "권한그룹관리" ? "input" : "data"}
                        />
                    ))
                ) : (
                    <div key={0}>
                        <p style={{ lineHeight: 1.6 }}>등록된 내역이 없습니다.</p>
                    </div>
                )}
            </div>

            {/* {props.pageName === "권한그룹관리" && (
                <div>
                    <ButtonWrap viewType="space-between">
                        <div>
                            <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
                            <label className="search">
                                <input type="text" placeholder="검색어를 입력해주세요" />
                                <Search className="icon-search" />
                            </label>
                        </div>
                        <div>
                            <Button value="변경 취소" viewType="sub1" />
                            <Button value="변경 사항 저장" viewType="primary" />
                        </div>
                    </ButtonWrap>
                </div>
            )} */}
        </div>
    );
};

export default TableSample;
