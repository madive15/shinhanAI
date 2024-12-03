import React, { useEffect, useState } from "react";
import "./input.scss";
const InputFile = ({ ...props }: any) => {
  return (
    <div className="file-wrap">
      <label className="file-btn" htmlFor="file-input">
        파일첨부
        <input type="file" id="file-input" />
      </label>
      <div className="file-list">
        <span className="file-empty">등록된 파일이 없습니다.</span>
        <span className="file-item">파일명.xls</span>
        <span className="file-item">파일명.pdf</span>
      </div>
    </div>
  );
};

export default InputFile;
