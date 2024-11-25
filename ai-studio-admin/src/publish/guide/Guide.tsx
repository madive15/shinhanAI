import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import CheckboxGroup from "../components/CheckboxGroup";
import Radio from "../components/Radio";
import RadioGroup from "../components/RadioGroup";
import InputText from "../components/InputText";
import Button from "../components/Button";
import ButtonWrap from "../components/ButtonWrap";
import AdminTab from "../components/AdminTab";
import Adminsidebarone from "../components/Adminsidebar";
import Modal from "../components/Modal";
import Textarea from "../components/Textarea";
import SvgSample from "../components/SvgSample";
import Select from "../components/Select";
import Hash from "../components/Hash";
import List from "../components/List";
import LayerPopup from "../components/LayerPopup";
// import Table from "../components/Table";

function Guide() {
  //가이드 탭
  const [activeTab, setActiveTab] = useState("tab15");
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

  //버튼
  const [toggle, setToggle] = useState(false);
  const btnToggle = () => {
    setToggle(!toggle);
  };
  const [toggleswitch, setToggleSwitch] = useState(false);
  const btnSwitch = () => {
    setToggleSwitch(!toggleswitch);
  };
  //버튼 끝

  //어드민 탭
  const adminMenu = ["권한관리", "메뉴2", "메뉴3", "메뉴4"];
  //어드민 탭 끝

  //모달
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
  });

  const openModal = (key: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [key]: true,
    }));
  };

  const closeModal = (key: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [key]: false,
    }));
  };

  //모달 끝

  //텍스트에어리어
  const [textarea, setTextarea] = useState("");
  const [textarea2, setTextarea2] = useState(
    "텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍스트가 이렇게 들어갑니다. 텍"
  );
  const [textarea3, setTextarea3] = useState("비활성");
  //텍스트에어리어 끝

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
  //셀렉트 끝

  //레이어 팝업
  const [popups, setPopups] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
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
  //레이어 팝업 끝

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
          <button
            className={activeTab === "tab7" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab7")}
          >
            admin-tab
          </button>
          <button
            className={activeTab === "tab8" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab8")}
          >
            admin-sidebar
          </button>
          <button
            className={activeTab === "tab9" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab9")}
          >
            modal
          </button>
          <button
            className={activeTab === "tab10" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab10")}
          >
            textarea
          </button>
          <button
            className={activeTab === "tab11" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab11")}
          >
            SVG Images
          </button>
          <button
            className={activeTab === "tab12" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab12")}
          >
            select
          </button>
          <button
            className={activeTab === "tab13" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab13")}
          >
            hash
          </button>
          <button
            className={activeTab === "tab14" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab14")}
          >
            list
          </button>
          <button
            className={activeTab === "tab15" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab15")}
          >
            LayerPopup
          </button>
          <button
            className={activeTab === "tab16" ? "guide-tab active" : "guide-tab"}
            onClick={() => handleTabChange("tab16")}
          >
            table
          </button>
        </div>
        <div className="guide-tab-content">
          {/* color */}
          {activeTab === "tab1" && (
            <div
              className="guide-color"
              style={{ backgroundColor: "#fff", padding: "20px" }}
            >
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
              <h2 className="guide-title">5. 인풋 텍스트</h2>
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
              <h2 className="guide-title">6. 버튼</h2>
              <ButtonWrap viewType="center">
                <Button value="버튼" viewType="primary" />
                <Button value="버튼 텍스트" viewType="primary" />
                <Button
                  value="버튼 텍스트"
                  viewType="primary"
                  disabled={true}
                />
              </ButtonWrap>
              <ButtonWrap viewType="start">
                <Button value="버튼" viewType="primary" />
                <Button value="버튼 텍스트" viewType="primary" />
                <Button
                  value="버튼 텍스트"
                  viewType="primary"
                  disabled={true}
                />
              </ButtonWrap>
              <ButtonWrap viewType="end">
                <Button value="버튼" viewType="primary" />
                <Button value="버튼 텍스트" viewType="primary" />
                <Button
                  value="버튼 텍스트"
                  viewType="primary"
                  disabled={true}
                />
              </ButtonWrap>
              <div className="primary">
                <Button value="버튼" viewType="primary" />
                <Button value="버튼 텍스트" viewType="primary" />
                <Button
                  value="버튼 텍스트"
                  viewType="primary"
                  disabled={true}
                />
              </div>
              <div className="secondary">
                <Button value="버튼" viewType="secondary" />
                <Button value="버튼 텍스트" viewType="secondary" />
              </div>
              <div className="sub1">
                <Button value="버튼" viewType="sub1" />
                <Button value="버튼 텍스트" viewType="sub1" />
              </div>
              <div className="sub1">
                <Button value="버튼" viewType="sub1" />
                <Button value="버튼 텍스트" viewType="sub1" />
              </div>
              <div className="primary-big">
                <Button value="버튼" viewType="primary-big" />
                <Button value="버튼 텍스트" viewType="primary-big" />
              </div>
              <div className="small">
                <Button value="버튼" viewType="small" />
                <Button value="버튼 텍스트" viewType="small" />
                <Button value="버튼 텍스트" viewType="small" disabled={true} />
              </div>
              <div className="toggle">
                <Button
                  value="토글버튼"
                  viewType={`toggle ${toggle ? "on" : ""}`}
                  onClick={btnToggle}
                />
              </div>
              <div className="switch">
                <Button
                  viewType={`switch ${toggleswitch ? "on" : ""}`}
                  onClick={btnSwitch}
                />
              </div>
            </div>
          )}
          {/* admintab */}
          {activeTab == "tab7" && (
            <div className="guide-admintab">
              <h2 className="guide-title">7. 어드민 탭메뉴</h2>
              <AdminTab menuName={adminMenu} />
            </div>
          )}
          {/* Adminsidebar */}
          {activeTab == "tab8" && (
            <div className="guide-Adminsidebar">
              <h2 className="guide-title">8. 어드민 사이드바</h2>
              <Adminsidebarone />
            </div>
          )}
          {/* madal */}
          {activeTab == "tab9" && (
            <div className="guide-modal">
              <h2 className="guide-title">9. 모달</h2>
              <ButtonWrap viewType="start">
                <Button
                  value="alert"
                  viewType="primary"
                  onClick={() => openModal("modal1")}
                />
                <Button
                  value="confirm"
                  viewType="primary"
                  onClick={() => openModal("modal2")}
                />
              </ButtonWrap>
              <Modal
                type="alert"
                content={
                  "본문 내용이 들어갑니다. 본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다. 본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다. 본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.."
                }
                isOpen={modals.modal1}
                onClose={() => closeModal("modal1")}
              />
              <Modal
                type="confirm"
                title="타이틀"
                content={
                  "본문 내용이 들어갑니다. 본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다. 본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다. 본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.본문 내용이 들어갑니다.."
                }
                isOpen={modals.modal2}
                onClose={() => closeModal("modal2")}
              />
            </div>
          )}
          {/* textarea */}
          {activeTab == "tab10" && (
            <div className="guide-textarea">
              <h2 className="guide-title">10. 텍스트에어리어</h2>
              <Textarea
                label="텍스트에어리어 라벨"
                value={textarea}
                id="textArea1"
                onChange={setTextarea}
                placeholder="텍스트 에어리어"
              />
              <Textarea
                value={textarea2}
                onChange={setTextarea2}
                placeholder="텍스트 에어리어2"
              />
              <Textarea
                value={textarea3}
                onChange={setTextarea3}
                placeholder="텍스트 에어리어3"
                disabled={true}
              />
            </div>
          )}
          {/* svg */}
          {activeTab == "tab11" && (
            <div className="guide-svg">
              <h2 className="guide-title">11. SVG</h2>
              <SvgSample />
            </div>
          )}
          {/* select */}
          {activeTab == "tab12" && (
            <div className="guide-select">
              <h2 className="guide-title">12. select</h2>
              <Select
                options={options}
                placeholder="옵션을 선택하세요"
                disabled={false}
              />
              <Select
                options={options}
                placeholder="비활성화된 Select"
                disabled={true}
              />
              <Select options={options} placeholder="Select" tag={true} />
              <Select
                options={options}
                placeholder="Select"
                disabled={true}
                tag={true}
              />
            </div>
          )}
          {/* hash */}
          {activeTab == "tab13" && (
            <div className="guide-hash">
              <h2 className="guide-title">13. hashtag</h2>
              <Hash value="해시태그" />
              <Hash value="해시태그" del={true} />
            </div>
          )}
          {/* list */}
          {activeTab == "tab14" && (
            <div className="guide-hash">
              <h2 className="guide-title">14. list</h2>
              <List type="bullet">
                <li>
                  불렛 리스트
                  <br />
                  불렛 리스트
                </li>
                <li>불렛 리스트</li>
                <li>불렛 리스트</li>
              </List>
              <List type="order">
                <li>
                  오더 리스트
                  <br />
                  오더 리스트
                </li>
                <li>오더 리스트</li>
                <li>오더 리스트</li>
              </List>
            </div>
          )}
          {/* LayerPopup */}
          {activeTab == "tab15" && (
            <div className="guide-hash">
              <h2 className="guide-title">15. LayerPopup</h2>
              <ButtonWrap viewType="start">
                <Button
                  value="레이어팝업xlarge"
                  viewType="primary"
                  onClick={() => openPopup("popup1")}
                />
                <Button
                  value="레이어팝업small"
                  viewType="primary"
                  onClick={() => openPopup("popup2")}
                />
                <Button
                  value="레이어팝업"
                  viewType="primary"
                  onClick={() => openPopup("popup3")}
                />
              </ButtonWrap>
              <LayerPopup
                title="타이틀1"
                isOpen={popups.popup1}
                size="xlarge"
                onClose={() => closePopup("popup1")}
              >
                <p>팝업1</p>
              </LayerPopup>

              <LayerPopup
                isOpen={popups.popup2}
                size="small"
                onClose={() => closePopup("popup2")}
              >
                <p>팝업2</p>
              </LayerPopup>

              <LayerPopup
                title="타이틀3"
                isOpen={popups.popup3}
                onClose={() => closePopup("popup3")}
              >
                <p>팝업3</p>
              </LayerPopup>
            </div>
          )}
          {/* table */}
          {activeTab == "tab16" && (
            <div className="guide-hash">
              <h2 className="guide-title">16. table</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Guide;
