import { useState } from "react";

function ButtonWrap({ viewType, children }: any) {
  return <div className={`btn-root-wrap ${viewType}`}>{children}</div>;
}
export default ButtonWrap;
