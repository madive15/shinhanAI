import React, { useEffect, useState } from "react";
import "./admintab.scss";

const AdminTab = ({ menuName, ...props }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabActive = (i: number) => {
    setActiveIndex(i);
  };
  return (
    <div className="admin-tab">
      <ul>
        {menuName.map((v: any, i: number) => {
          return (
            <li key={i} className={activeIndex == i ? "active" : ""}>
              <a href="#" onClick={() => tabActive(i)}>
                {v}
                <button type="button" className="admin-tab-btn">
                  닫기
                </button>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminTab;
