// necessary set
import React from "react";

// need content
import BoardTh from "../page/boards/BoardTh";
import BoardTd from "../page/boards/BoardTd";

// need style
import "./table.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

export interface ITableProps {
    titleTxt: ITableThProps[];
    col?: number[];
    style?: object;
    rows?: any[];
    type?: "input" | "data";
    key?: number;
}

export interface ITableThProps {
    text: string;
    width: number;
}

const items = [
    { id: "75950", name: "Louella Wallace", age: "24", phone: "+44 (0)203 437 7302", color: "green" },
    { id: "80616", name: "Hanson Perry", age: "36", phone: "+44 (0)203 279 3708", color: "brown" },
    { id: "77621", name: "Brandi Long", age: "20", phone: "+44 (0)203 319 4880", color: "gray" },
    { id: "81299", name: "Tonia Sykes", age: "38", phone: "+44 (0)208 328 3671", color: "blue" },
    { id: "14225", name: "Leach Durham", age: "23", phone: "+44 (0)208 280 9572", color: "green" },
];

/**
 * @author shinhanAI
 * @description
 * admin-front: Table
 * Table page
 */
const TableSample: React.FC<IPageProps> = (props) => {
    return (
        <div className="tb-body">
            <BoardTh
                titleTxt={[
                    { text: "고객명", width: 20 },
                    { text: "지갑명", width: 20 },
                    { text: "수량", width: 20 },
                    { text: "신청일시", width: 20 },
                    { text: "승인내역", width: 20 },
                ]}
            />

            {items !== undefined && items.length > 0 ? (
                items.map((data, i) => (
                    <BoardTd
                        key={i}
                        titleTxt={[
                            { text: data.id, width: 20 },
                            { text: data.name, width: 20 },
                            { text: data.age, width: 20 },
                            { text: data.phone, width: 20 },
                            { text: data.color, width: 20 },
                        ]}
                    />
                ))
            ) : (
                <div key={0}>
                    <p style={{ lineHeight: 1.6 }}>등록된 핫월렛 내역이 없습니다.</p>
                </div>
            )}
        </div>
    );
};

export default TableSample;
