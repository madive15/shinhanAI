// necessary set
import React, { useState } from "react";

// need content
import Select from "~/publish/components/Select";
import InputText from "~/publish/components/InputText";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";
import BoardDetailType1 from "~/publish/page/boards/BoardDetailType1";
import BoardDetailType2 from "~/publish/page/boards/BoardDetailType2";

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
    id?: number;
    accordion?: boolean;
    pageName?: string;
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
 * admin-front: BoardTd
 * 기본 BoardTd
 */
const BoardTd: React.FC<ITableProps> = (props) => {
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

    //인풋
    const [text, setText] = useState("");
    const [boardToggle, setBoardToggle] = useState(false);

    return (
        <>
            <div
                className={props.accordion === true && boardToggle === true ? "tb-txt active" : "tb-txt"}
                onClick={props.accordion === true ? () => setBoardToggle(!boardToggle) : undefined}
            >
                {props?.titleTxt &&
                    props.titleTxt.map((data, i) => (
                        <span key={i} style={{ width: `${data.width}px` }}>
                            {data.text}
                        </span>
                    ))}
            </div>
            {props.accordion === true && boardToggle === true && props.pageName === "샘플테이블" && (
                <BoardDetailType1 />
            )}
            {props.accordion === true && boardToggle === true && props.pageName === "권한관리" && <BoardDetailType1 />}
            {props.accordion === true && boardToggle === true && props.pageName === "관리자메뉴 권한관리" && (
                <BoardDetailType1 />
            )}
            {props.accordion === true && boardToggle === true && props.pageName === "권한그룹관리" && (
                <BoardDetailType1 />
            )}
            {props.accordion === true && boardToggle === true && props.pageName === "회원관리" && <BoardDetailType2 />}
        </>
    );
};

export default BoardTd;
