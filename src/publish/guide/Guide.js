import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox.js";
import CheckboxGroup from "../components/CheckboxGroup.js";
import Radio from "../components/Radio.js";
import RadioGroup from "../components/RadioGroup.js";
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
  const radioChange = (value) => {
    setRadioValue(value);
  };
  const radioChangeNoLabel = (value) => {
    setRadioValue2(value);
  };
  //라디오 끝

  return (
    <>
      {/* 체크박스 */}
      <div className="guide-wrap">
        <h2>체크박스</h2>
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
          disabled="disabled"
        />
        <pre className="code-block">
          {`
const [isChecked, setIsChecked] = useState(true);
const [isChecked2, setIsChecked2] = useState(false);
const [isChecked3, setIsChecked3] = useState(false);

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
  disabled="disabled"
/>
`}
        </pre>
        <strong>라벨 없는 케이스</strong>
        <Checkbox id="chk2-1" checked={isChecked4} onChange={setIsChecked4} />
        <Checkbox id="chk2-2" checked={isChecked5} onChange={setIsChecked5} />
        <Checkbox
          id="chk2-3"
          checked={isChecked6}
          onChange={setIsChecked6}
          disabled="disabled"
        />
        <pre className="code-block">
          {`
const [isChecked4, setIsChecked4] = useState(true);
const [isChecked5, setIsChecked5] = useState(false);
const [isChecked6, setIsChecked6] = useState(false);

<Checkbox id="chk2-1" checked={isChecked4} onChange={setIsChecked4} />
<Checkbox id="chk2-2" checked={isChecked5} onChange={setIsChecked5} />
<Checkbox
  id="chk2-3"
  checked={isChecked6}
  onChange={setIsChecked6}
  disabled="disabled"
/>
`}
        </pre>
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
            disabled="disabled"
          />
        </CheckboxGroup>
        <pre className="code-block">
          {`
const [isChecked7, setIsChecked7] = useState(false);
const [isChecked8, setIsChecked8] = useState(true);
const [isChecked9, setIsChecked9] = useState(false);

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
    disabled="disabled"
  />
</CheckboxGroup>
`}
        </pre>
      </div>
      {/* 라디오 */}
      <div className="guide-wrap">
        <h2>라디오</h2>
        <strong>라디오 라벨 있는 케이스</strong>
        <Radio
          label="라디오"
          name="options"
          value="option1"
          checked={radioValue === "option1"}
          onChange={radioChange}
        />
        <Radio
          label="라디오"
          name="options"
          value="option2"
          checked={radioValue === "option2"}
          onChange={radioChange}
        />
        <Radio
          label="라디오"
          name="options"
          value="option3"
          checked={radioValue === "option3"}
          onChange={radioChange}
          disabled="disabled"
        />
        <strong>라디오 라벨 없는 케이스</strong>
        <Radio
          name="options2"
          value="option4"
          checked={radioValue2 === "option4"}
          onChange={radioChangeNoLabel}
        />
        <Radio
          name="options2"
          value="option5"
          checked={radioValue2 === "option5"}
          onChange={radioChangeNoLabel}
        />
        <Radio
          name="options2"
          value="option6"
          checked={radioValue2 === "option6"}
          onChange={radioChangeNoLabel}
          disabled="disabled"
        />
        <strong>라디오 그룹</strong>
        <RadioGroup
          options={optionsRadio}
          selectedOption={selectedRadio}
          onChange={setSelectedRadio}
          name="RadioGroup1"
        />
      </div>
    </>
  );
}

export default Guide;
