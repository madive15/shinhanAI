import React, { useState } from "react";

const Hash = ({ value, del }: any) => {
  return (
    <span className="hash-tag">
      #{value}
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
