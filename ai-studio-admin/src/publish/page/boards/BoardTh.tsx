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
                        <span key={i} style={{ maxWidth: `${data.width}px` }}>
                            <Checkbox
                                // label="체크박스"
                                id={"ck" + props.id}
                                checked={isChecked}
                                onChange={setIsChecked}
                            />
                        </span>
                    ) : (
                        <span key={i} style={{ width: `${data.width}px` }}>
                            {data.text}
                        </span>
                    )
                )}
        </div>
    );
};

export default BoardTh;
