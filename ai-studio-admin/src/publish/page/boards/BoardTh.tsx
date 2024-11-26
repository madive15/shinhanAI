// necessary set
import React from "react";

// need content

// Props type
/**
 * @interface ITableProps
 * @사용되는페이지
 * 공통 Table
 * - BoardBody
 */
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

// need style

/**
 *
 * @author cardo
 *
 * @description
 * custody-admin-front: BoardTh
 * 기본 BoardTh
 */
const BoardTh: React.FC<ITableProps> = (props) => {
    return (
        <div className="tb-tit">
            {props?.titleTxt &&
                props.titleTxt.map((data, i) => (
                    <span key={i} style={{ width: `${data.width}%` }}>
                        {data.text}
                    </span>
                ))}
        </div>
    );
};

export default BoardTh;
