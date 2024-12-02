import React, { useEffect } from "react";
import "./layerpopup.scss";
const LayerPopup = ({ isOpen, onClose, children, size, title }: any) => {
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
  const popupSize = size !== undefined ? size : "";
  return (
    <div className="layer-popup-overlay" onClick={onClose}>
      <div
        className={`layer-popup-wrap ${popupSize}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="layer-popup-header">
            <h3>{title}</h3>
          </div>
        )}
        <div className="layer-popup-contents">{children}</div>
        <button className="layer-popup-close" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default LayerPopup;
