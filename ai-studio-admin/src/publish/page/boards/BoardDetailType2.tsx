// necessary set
import React, { useState } from "react";

// need content
import Select from "~/publish/components/Select";
import InputText from "~/publish/components/InputText";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
}

// need style

/**
 *
 * @author shinhanAI
 *
 * @description
 * admin-front: BoardDetail
 * 기본 BoardDetail
 */
const BoardDetailType1: React.FC<IPageProps> = (props) => {
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

    return (
        <>
            <div className="tb-detail">
                <div className="tb-modify-box">
                    <div className="tb-modify">
                        <div className="modify-item">
                            <span className="tit">사용자 권한</span>
                            <div className="item-box">
                                <Select options={options} placeholder="옵션을 선택하세요" disabled={false} />
                            </div>
                        </div>
                        <div className="modify-item">
                            <span className="tit">관리자 권한</span>
                            <div className="item-box select-long">
                                <InputText id="inputText1" value={text} onChange={setText} placeholder="플레이스홀더" />
                            </div>
                        </div>
                    </div>
                    <div className="tb-modify">
                        <div className="modify-item">
                            <span className="tit">이전 사용자 권한</span>
                            <div className="item-box txt-box">-</div>
                        </div>
                        <div className="modify-item">
                            <span className="tit">최종권한 변경일시</span>
                            <div className="item-box txt-box">2024-05-06 10:10:05</div>
                        </div>
                        <div className="modify-item">
                            <span className="tit">최종권한 변경자</span>
                            <div className="item-box txt-box">김멀더</div>
                        </div>
                    </div>
                </div>

                <ButtonWrap viewType="end">
                    <Button value="변경 취소" viewType="sub1" />
                    <Button value="변경 사항 저장" viewType="primary" />
                </ButtonWrap>
            </div>
        </>
    );
};

export default BoardDetailType1;
