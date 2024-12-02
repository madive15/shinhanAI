// necessary set
import React, { useState } from "react";

// need content
import Checkbox from "~/publish/components/Checkbox";

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
    id?: string;
}
export interface ITableThProps {
    text: string;
    width: number;
    subTit?: ITableSubThProps[];
}
export interface ITableSubThProps {
    subtext: string;
    width: number;
}

// need style

/**
 *
 * @author shinhanAI
 *
 * @description
 * admin-front: BoardTh
 * 기본 BoardTh
 */
const BoardTh: React.FC<ITableProps> = (props) => {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <div className="tb-tit">
            {props?.titleTxt &&
                props.titleTxt.map((data, i) =>
                    props?.type === "input" && i === 0 ? (
                        <div
                            key={i}
                            className={props?.rows && props.rows?.length > 0 ? "rows" + props.rows?.length : ""}
                            style={{ maxWidth: `${data.width}px` }}
                        >
                            <Checkbox
                                // label="체크박스"
                                id={"ck" + props.id}
                                checked={isChecked}
                                onChange={setIsChecked}
                            />
                        </div>
                    ) : (
                        <div
                            key={i}
                            className={props?.rows && props.rows?.length > 0 ? "rows" + (props.rows?.length + 1) : ""}
                            style={{ maxWidth: `${data.width}px` }}
                        >
                            {props?.rows && props.rows?.length > 0 && data.subTit ? (
                                <>
                                    <p>{data.text}</p>
                                    <div className="subth" style={{ maxWidth: `${data.width}px` }}>
                                        {data.subTit.map((subdata, subi) => (
                                            <span key={subi} style={{ maxWidth: `${subdata.width}px` }}>
                                                {subdata.subtext}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <span style={{ maxWidth: `${data.width}px` }}>{data.text}</span>
                            )}
                        </div>
                    )
                )}
        </div>
    );
};

export default BoardTh;
