import React, { useState } from "react";
import "./list.scss";
function List({ children, type }: any) {
  return (
    <div className={type + "-list"}>
      {type === "bullet" && <ul>{children}</ul>}
      {type === "order" && <ol>{children}</ol>}
    </div>
  );
}

export default List;
