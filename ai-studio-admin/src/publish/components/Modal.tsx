import { useEffect } from "react";
import Button from "./Button";
import ButtonWrap from "./ButtonWrap";
import "./modal.scss";
function Modal({ title, content, isOpen, onClose, type }: any) {
  // 팝업열렸을때 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal ${type === "alert" ? "alert" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">{title && <h3>{title}</h3>}</div>
        <div className="modal-content">{content}</div>
        <div className="modal-footer">
          <ButtonWrap viewType={"end"}>
            <Button viewType="primary" value={"닫기"} onClick={onClose} />
            {type === "confirm" && <Button viewType="sub1" value={"확인"} />}
          </ButtonWrap>
        </div>
        <button className="modal-close" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default Modal;
