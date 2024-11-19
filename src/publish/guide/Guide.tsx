import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import CheckboxGroup from "../components/CheckboxGroup";
import Radio from "../components/Radio";
import RadioGroup from "../components/RadioGroup";
// import Btn from "../components/Btn.js";
// import BtnWrap from "../components/BtnWrap.js";
// import Modal from "../components/Modal.js";
// import LayerPopup from "../components/LayerPopup.js";
// import Tab from "../components/Tab.js";
// import Table from "../components/Table.js";
// import List from "../components/List.js";
// import InputText from "../components/InputText.js";

// import Textarea from "../components/Textarea.js";
function Guide() {
  //체크박스
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(true);
  const [isChecked9, setIsChecked9] = useState(false);
  //체크박스 끝
  //라디오
  const [radioValue, setRadioValue] = useState("option1");
  const [radioValue2, setRadioValue2] = useState("option4");
  const [selectedRadio, setSelectedRadio] = useState("");
  const optionsRadio = ["라디오 샘플 A", "라디오 샘플 B", "라디오 샘플 C"];

  const radioChange = (value: string) => {
    setRadioValue(value);
  };
  const radioChangeNoLabel = (value: string) => {
    setRadioValue2(value);
  };
  //라디오 끝

  return (
    <>
      <div className="guide-wrap">
        <div className="guide-color">
          <h2 className="guide-title">1. Color</h2>
          <strong>Primary color</strong>
          <div className="color-box">
            <div className="sample-color-box color-box1"></div>
            <div className="sample-color-box color-box2"></div>
            <div className="sample-color-box color-box3"></div>
          </div>
          <strong>Secondary color</strong>
          <div className="color-box">
            <div className="sample-color-box sub-color-box1"></div>
            <div className="sample-color-box sub-color-box2"></div>
            <div className="sample-color-box sub-color-box3"></div>
            <div className="sample-color-box sub-color-box4"></div>
          </div>
          <strong>Text Color</strong>
          <div className="color-box">
            <div className="sample-color-box text-color-box1"></div>
            <div className="sample-color-box text-color-box2"></div>
            <div className="sample-color-box text-color-box3"></div>
          </div>
          <strong>Boder Color</strong>
          <div className="color-box">
            <div className="sample-color-box border-color-box1"></div>
            <div className="sample-color-box border-color-box2"></div>
            <div className="sample-color-box border-color-box3"></div>
            <div className="sample-color-box border-color-box4"></div>
          </div>
          <strong>Background Color</strong>
          <div className="color-box">
            <div className="sample-color-box bg-color-box1"></div>
            <div className="sample-color-box bg-color-box2"></div>
            <div className="sample-color-box bg-color-box3"></div>
            <div className="sample-color-box bg-color-box4"></div>
          </div>
          <strong>Positive/Negative</strong>
          <div className="color-box">
            <div className="sample-color-box positive-box"></div>
            <div className="sample-color-box negative-box"></div>
          </div>
        </div>
        <div className="guide-text">
          <h2 className="guide-title">2. Font</h2>
          <h1>h1 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 20px</h1>
          <h2>h2 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 16px</h2>
          <h3>h3 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 14px</h3>
          <div className="text1">
            본문 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 14px
          </div>
          <div className="text1 disabled">
            본문 비활성 신한은행 Ai스튜디오에 오신것을 환영합니다. -- 14px
          </div>
          <div className="text2">
            보조 Ai스튜디오에 오신것을 환영합니다. -- 13px
          </div>
          <div className="text3">
            캡션 Ai스튜디오에 오신것을 환영합니다. -- 12px
          </div>
          <div className="text4">
            작은글자 Ai스튜디오에 오신것을 환영합니다. -- 10px
          </div>
          <div>Publish Index test</div>
        </div>
        <div className="guide-checkbox">
          <h2 className="guide-title">3. 체크박스</h2>
          <strong>라벨 있는 케이스</strong>
          <Checkbox
            label="체크박스"
            id="chk1-1"
            checked={isChecked}
            onChange={setIsChecked}
          />
          <Checkbox
            label="체크박스"
            id="chk1-2"
            checked={isChecked2}
            onChange={setIsChecked2}
          />
          <Checkbox
            label="체크박스"
            id="chk1-3"
            checked={isChecked3}
            onChange={setIsChecked3}
            disabled={true}
          />

          <strong>라벨 없는 케이스</strong>
          <Checkbox id="chk2-1" checked={isChecked4} onChange={setIsChecked4} />
          <Checkbox id="chk2-2" checked={isChecked5} onChange={setIsChecked5} />
          <Checkbox
            id="chk2-3"
            checked={isChecked6}
            onChange={setIsChecked6}
            disabled={true}
          />

          <strong>체크박스 그룹</strong>
          <CheckboxGroup>
            <Checkbox
              id="chk3-1"
              label="체크박스2"
              checked={isChecked7}
              onChange={setIsChecked7}
            />
            <Checkbox
              id="chk3-2"
              label="체크박스3"
              checked={isChecked8}
              onChange={setIsChecked8}
            />
            <Checkbox
              id="chk3-3"
              label="체크박스4"
              checked={isChecked9}
              onChange={setIsChecked9}
              disabled={true}
            />
          </CheckboxGroup>
        </div>
        <div className="guide-radio">
          <h2 className="guide-title">4. 라디오</h2>
          <strong>라디오 라벨 있는 케이스</strong>
          <Radio
            id={"radio1"}
            label="라디오"
            name="options"
            value="option1"
            checked={radioValue === "option1"}
            onChange={radioChange}
          />
          <Radio
            id={"radio2"}
            label="라디오"
            name="options"
            value="option2"
            checked={radioValue === "option2"}
            onChange={radioChange}
          />
          <Radio
            id={"radio2"}
            label="라디오"
            name="options"
            value="option3"
            checked={radioValue === "option3"}
            onChange={radioChange}
          />
          <strong>라디오 라벨 없는 케이스</strong>
          <Radio
            id={"radio3"}
            name="options2"
            value="option4"
            checked={radioValue2 === "option4"}
            onChange={radioChangeNoLabel}
          />
          <Radio
            id={"radio4"}
            name="options2"
            value="option5"
            checked={radioValue2 === "option5"}
            onChange={radioChangeNoLabel}
          />
          <Radio
            id={"radio5"}
            name="options2"
            value="option6"
            checked={radioValue2 === "option6"}
            onChange={radioChangeNoLabel}
            disabled={true}
          />
          <strong>라디오 그룹</strong>
          <RadioGroup
            options={optionsRadio}
            selectedOption={selectedRadio}
            onChange={setSelectedRadio}
            name="RadioGroup1"
          />
        </div>
      </div>
    </>
  );
}

export default Guide;
