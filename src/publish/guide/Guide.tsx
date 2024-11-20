import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import CheckboxGroup from "../components/CheckboxGroup";
import Radio from "../components/Radio";
import RadioGroup from "../components/RadioGroup";
import InputText from "../components/InputText";
import Button from "../components/Button";
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
  //가이드 탭
  const [activeTab, setActiveTab] = useState("tab6");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  //가이드 탭 끝
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
  const optionsRadio = ["라디오 샘플 AA", "라디오 샘플 B", "라디오 샘플 C"];

  const radioChange = (value: string) => {
    setRadioValue(value);
  };
  const radioChangeNoLabel = (value: string) => {
    setRadioValue2(value);
  };
  //라디오 끝
  //인풋
  const [text, setText] = useState("");
  const [text2, setText2] = useState("텍스트 입력");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("텍스트 입력");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");

  //인풋 끝
  return (
    <>
      <div className="guide-wrap">
        <div className="guide-tabs">
          <button
            className={activeTab === "tab1" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab1")}
          >
            Color
          </button>
          <button
            className={activeTab === "tab2" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab2")}
          >
            Text
          </button>
          <button
            className={activeTab === "tab3" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab3")}
          >
            Checkbox
          </button>
          <button
            className={activeTab === "tab4" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab4")}
          >
            Radio
          </button>
          <button
            className={activeTab === "tab5" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab5")}
          >
            Input
          </button>
          <button
            className={activeTab === "tab6" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab6")}
          >
            button
          </button>
        </div>
        <div className="guide-tab-content">
          {/* color */}
          {activeTab === "tab1" && (
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
          )}
          {/* text */}
          {activeTab === "tab2" && (
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
            </div>
          )}
          {/* checkbox */}
          {activeTab === "tab3" && (
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
              <Checkbox
                id="chk2-1"
                checked={isChecked4}
                onChange={setIsChecked4}
              />
              <Checkbox
                id="chk2-2"
                checked={isChecked5}
                onChange={setIsChecked5}
              />
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
          )}
          {/* radio */}
          {activeTab === "tab4" && (
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
          )}
          {/* input */}
          {activeTab === "tab5" && (
            <div className="guide-input">
              <InputText
                // label="인풋 라벨"
                id="inputText1"
                value={text}
                onChange={setText}
                placeholder="플레이스홀더"
                maxLength={30}
              />
              <InputText
                id="inputText2"
                value={text2}
                onChange={setText2}
                placeholder="플레이스홀더"
              />
              <InputText
                id="inputText3"
                value={text3}
                onChange={setText3}
                placeholder="플레이스홀더"
                disabled={true}
              />
              <InputText
                id="inputText4"
                value={text4}
                onChange={setText4}
                placeholder="플레이스홀더"
                caption="일반 캡션"
              />
              <InputText
                id="inputText5"
                value={text5}
                onChange={setText5}
                placeholder="플레이스홀더"
                pass="패스 메세지"
              />
              <InputText
                id="inputText6"
                value={text6}
                onChange={setText6}
                placeholder="플레이스홀더"
                error="에러 메세지"
              />
              <InputText
                id="inputText7"
                value={text7}
                onChange={setText7}
                placeholder="플레이스홀더"
                tag="tag"
              />
              <InputText
                id="inputText8"
                value={text8}
                onChange={setText8}
                placeholder="플레이스홀더"
                disabled={true}
                tag="tag"
              />
            </div>
          )}
          {/* button */}
          {activeTab == "tab6" && (
            <div className="guide-button">
              <div className="type1">
                <Button value="버튼" viewType="type1" />
                <Button value="버튼 텍스트" viewType="type1" />
                <Button value="버튼 텍스트" viewType="type1" disabled={true} />
              </div>
              <div className="type2">
                <Button value="버튼" viewType="type2" />
                <Button value="버튼 텍스트" viewType="type2" />
              </div>
              <div className="type3">
                <Button value="버튼" viewType="type3" />
                <Button value="버튼 텍스트" viewType="type3" />
              </div>
              <div className="type4">
                <Button value="버튼" viewType="type4" />
                <Button value="버튼 텍스트" viewType="type4" />
              </div>
              <div className="type5">
                <Button value="버튼" viewType="type5" />
                <Button value="버튼 텍스트" viewType="type5" />
              </div>
              <div className="type6">
                <Button value="버튼" viewType="type6" />
                <Button value="버튼 텍스트" viewType="type6" />
                <Button value="버튼 텍스트" viewType="type6" disabled={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Guide;
