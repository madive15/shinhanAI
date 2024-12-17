import React, { useState } from "react";

const Hash = ({ value, del, type }: any) => {
  return (
    <span className={`hash-tag ${type ? type : ""}`}>
      {value}
      {del ? (
        <button type="button" className="hash-del">
          삭제
        </button>
      ) : (
        ""
      )}
    </span>
  );
};

export default Hash;
