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
        <div className="modal-header">
          {title && <h4>{title}</h4>}
          {/* <button className="modal-close" onClick={onClose}>
            ×
          </button> */}
        </div>
        <div className="modal-content">{content}</div>
        <div className="modal-footer">
          <ButtonWrap viewType={"center"}>
            {type === "confirm" && <Button value={"확인"} />}
            <Button value={"닫기"} onClick={onClose} />
          </ButtonWrap>
        </div>
      </div>
    </div>
  );
}

export default Modal;
