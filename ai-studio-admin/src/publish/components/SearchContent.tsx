// necessary set
import React, { useState } from "react";

// need content
import Select from "~/publish/components/Select";
import InputText from "~/publish/components/InputText";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";

// need style
import "./search.scss";

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
 * admin-front: SubTitle
 * SubTitle page
 */
const SearchContent: React.FC<IPageProps> = (props) => {
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
      <div className="search-contnet">
        <div className="search-item-box">
          <div className="search-item">
            <span className="tit">조회항목</span>
            <div className="item-box">
              <Select
                options={options}
                placeholder="옵션을 선택하세요"
                disabled={false}
              />
              <InputText
                // label="인풋 라벨"
                id="inputText1"
                value={text}
                onChange={setText}
                placeholder="플레이스홀더"
                maxLength={30}
              />
            </div>
          </div>
          <div className="search-item">
            <span className="tit">권한구분</span>
            <div className="item-box select-long">
              <Select
                options={options}
                placeholder="옵션을 선택하세요"
                disabled={false}
              />
            </div>
          </div>
        </div>
        <div className="search-item-box">
          <div className="search-item">
            <span className="tit">조회항목</span>
            <div className="item-box">
              <Select
                options={options}
                placeholder="옵션을 선택하세요"
                disabled={false}
              />
              <InputText
                // label="인풋 라벨"
                id="inputText1"
                value={text}
                onChange={setText}
                placeholder="플레이스홀더"
                maxLength={30}
              />
            </div>
          </div>
          <div className="search-item">
            <span className="tit">권한구분</span>
            <div className="item-box select-long">
              <Select
                options={options}
                placeholder="옵션을 선택하세요"
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>

      <ButtonWrap viewType="end">
        <Button value="초기화" viewType="sub1" />
        <Button value="조회" viewType="sub2" />
      </ButtonWrap>
    </>
  );
};

export default SearchContent;
