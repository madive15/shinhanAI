// necessary set
import React, { useState, useEffect } from "react";

// need content
import BoardTh from "../page/boards/BoardTh";
import BoardTd from "../page/boards/BoardTd";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";
import InputText from "./InputText";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import LayerPopup from "./LayerPopup";
import MetaPopTable from "~/publish/components/MetaPopTable";
// need style
import "./table.scss";

// Props type

/**
 * @author shinhanAI
 * @description
 * admin-front: Table
 * Table page
 */
const TaskTable = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
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
  const [selectedRadio, setSelectedRadio] = useState("");
  const optionsRadio = ["사용", "미사용"];
  const [selectedRadio2, setSelectedRadio2] = useState("");
  const optionsRadio2 = ["사용", "미사용"];

  const [popups, setPopups] = useState({
    popup1: false,
  });

  const openPopup = (key: string) => {
    setPopups((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const closePopup = (key: string) => {
    setPopups((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };
  return (
    <div className="row-table">
      <div className="row-table-title">
        <div className="tit-desc">
          <h2>과제 신청 내용</h2>
          {/* <span className="desc">
            <i className="ico-text blue">i</i>상품분류, 상위분류, 상품ID를 수정
            후 저장하면 신규 상품메타로 등록됩니다.
          </span> */}
        </div>
        <Button value="목록으로 돌아가기" viewType="sub1" />
      </div>
      <ul>
        <li className="">
          <div className="row-table-item">
            <div className="row-table-tit">
              <strong>상품 분류</strong>
            </div>
            <div className="row-table-content">
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
        </li>
        <li>
          <div className="row-table-item">
            <div className="row-table-tit">
              <strong>사용 여부</strong>
            </div>
            <div className="row-table-content">
              <InputText
                id="inputText2"
                value={text2}
                onChange={setText2}
                placeholder="플레이스홀더"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="row-table-item">
            <div className="row-table-tit">
              <strong>사용 여부</strong>
              <div className="tooltip">
                <i className="ico-text">?</i>
                <div className="tooltip-box">
                  <h3>
                    상품명<i className="ico-text">?</i>
                  </h3>
                  <div className="tooltip-content">
                    해당 항목에 대한 설명이 들어갑니다. 여러줄 들어갑니다.
                    이렇게 들어갑니다. 언제까지 들어갑니다. 해당 항목에 대한
                    설명이 들어갑니다. 여러줄 들어갑니다. 이렇게 들어갑니다.
                    언제까지 들어갑니다. 해당 항목에 대한 설명이 들어갑니다.
                    여러줄 들어갑니다. 이렇게 들어갑니다. 언제까지 들어갑니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="row-table-content">
              <Select
                options={options}
                placeholder="옵션을 선택하세요"
                disabled={false}
              />
            </div>
          </div>
        </li>
        <li className="half">
          <div className="row-table-item">
            <div className="row-table-tit">
              <strong>사용 여부</strong>
            </div>
            <div className="row-table-content">
              <RadioGroup
                options={optionsRadio}
                selectedOption={selectedRadio}
                onChange={setSelectedRadio}
                name="RadioGroup1"
              />
            </div>
          </div>
          <div className="row-table-item">
            <div className="row-table-tit">
              <strong>전략 상품 여부</strong>
            </div>
            <div className="row-table-content">
              <RadioGroup
                options={optionsRadio2}
                selectedOption={selectedRadio2}
                onChange={setSelectedRadio2}
                name="RadioGroup1"
              />
            </div>
          </div>
        </li>
        <li className="half">
          <div className="row-table-item">
            <div className="row-table-tit">
              <strong>수정 일시</strong>
            </div>
            <div className="row-table-content">2024-05-06 10:10:05</div>
          </div>
          <div className="row-table-item">
            <div className="row-table-tit">
              <strong>수정자</strong>
            </div>
            <div className="row-table-content">2024-05-06 10:10:05</div>
          </div>
        </li>
      </ul>
      <LayerPopup
        title="상품 메타 등록"
        isOpen={popups.popup1}
        onClose={() => closePopup("popup1")}
      >
        <MetaPopTable />
      </LayerPopup>
    </div>
  );
};

export default TaskTable;
