import React, { useEffect, useState } from "react";
import "./Adminsidebarone.scss";

const Adminsidebar = () => {
  const menuData = [
    {
      title: "원뎁스",
      link: "#",
      icon: "아이콘",
      twodepth: [
        {
          title: "투뎁스",
          link: "#1",
          threedepth: [
            { title: "쓰리뎁스", link: "#19" },
            { title: "유틸리티 2", link: "#20" },
          ],
        },
        { title: "홈 대시보드 2", link: "#2" },
        { title: "홈 대시보드 3", link: "#3" },
        { title: "홈 대시보드 4", link: "#4" },
        { title: "홈 대시보드 5", link: "#5" },
        { title: "홈 대시보드 6", link: "#6" },
      ],
    },
    {
      title: "AI 타겟 추출",
      link: "#",
      icon: "아이콘",
      twodepth: [
        { title: "AI 타겟 추출 1", link: "#7" },
        { title: "AI 타겟 추출 2", link: "#8" },
      ],
    },
    {
      title: "AI 모델 만들기",
      icon: "아이콘",
      twodepth: [
        { title: "AI 모델 만들기 1", link: "#9" },
        { title: "AI 모델 만들기 2", link: "#10" },
      ],
    },
    {
      title: "고객성향 지수",
      icon: "아이콘",
      twodepth: [
        { title: "고객성향 지수 1", link: "#11" },
        { title: "고객성향 지수 2", link: "#12" },
      ],
    },
    {
      title: "마이페이지",
      icon: "아이콘",
      twodepth: [
        { title: "마이페이지 1", link: "#13" },
        { title: "마이페이지 2", link: "#14" },
      ],
    },
    {
      title: "SingleView",
      icon: "아이콘",
      twodepth: [
        { title: "SingleView 1", link: "#15" },
        { title: "SingleView 2", link: "#16" },
      ],
    },
    {
      title: "게시판",
      icon: "아이콘",
      twodepth: [
        { title: "게시판 1", link: "#17" },
        { title: "게시판 2", link: "#18" },
      ],
    },
    {
      title: "유틸리티",
      icon: "아이콘",
      twodepth: [
        {
          title: "유틸리티 1",
          link: "#19",
          threedepth: [
            { title: "유틸리티 1", link: "#19" },
            { title: "유틸리티 2", link: "#20" },
          ],
        },
        { title: "유틸리티 2", link: "#20" },
      ],
    },
    {
      title: "시스템 관리",
      link: "https://naver.com",
      icon: "아이콘",
      twodepth: [
        { title: "시스템 관리 1", link: "#" },
        { title: "시스템 관리 2", link: "#" },
      ],
    },
  ];
  const [openTwoDepth, setOpenTwoDepth] = useState(null);
  const [openThreeDepth, setOpenThreeDepth] = useState(null);
  const [threeDepth, setthreeDepth] = useState<number>();

  const MenuClick = ({ index, link }: any) => {
    // 서브메뉴가 없을 때는 link로 이동
    // if (!menuData[index].submenu) {
    //   window.location.href = link;
    //   return;
    // }
    setOpenTwoDepth(openTwoDepth === index ? null : index);
  };
  const subMenuClick = ({ index, link }: any) => {
    // 서브메뉴가 없을 때는 link로 이동
    // if (!menuData[index].submenu) {
    //   window.location.href = link;
    //   return;
    // }
    setOpenThreeDepth(openThreeDepth === index ? null : index);
  };

  const threeDepthClick = (index: number) => {
    console.log(index);
    setthreeDepth(index);
  };
  return (
    <div className="admin-sidebar">
      {/* 메뉴 */}
      <div className="sidebar-tab">탭메뉴영역</div>
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuData.map((menu, index) => (
            <li
              key={index}
              className={`sidebar-item ${
                openTwoDepth === index ? "active" : ""
              } ${!menu.twodepth ? "no-two-depth" : ""}`}
            >
              <a
                href={menu.twodepth ? "#" : menu.link}
                className="sidebar-link"
                onClick={() =>
                  menu.twodepth ? MenuClick({ index, link: menu.link }) : null
                }
              >
                {menu.title}
              </a>
              {/* 2뎁스 */}
              {menu.twodepth && openTwoDepth === index && (
                <ul className="two-depth">
                  {menu.twodepth.map((item, subindex) => (
                    <li
                      key={subindex}
                      className={`${
                        openThreeDepth === subindex ? "active" : ""
                      } ${
                        !menu.twodepth[subindex].threedepth
                          ? "no-three-depth"
                          : ""
                      }`}
                    >
                      <a
                        href={item.link}
                        className="two-depth-link"
                        onClick={() =>
                          menu.twodepth[subindex].threedepth
                            ? subMenuClick({ index, link: menu.link })
                            : null
                        }
                      >
                        {item.title}
                      </a>
                      {/* 3뎁스 */}
                      {menu.twodepth[subindex].threedepth &&
                        openThreeDepth === index && (
                          <ul className="three-depth">
                            {menu.twodepth[subindex].threedepth?.map(
                              (item, subindex) => (
                                <li key={subindex}>
                                  <a
                                    href={item.link}
                                    className={`three-depth-link ${
                                      threeDepth === subindex ? "active" : ""
                                    }`}
                                    onClick={() => threeDepthClick(subindex)}
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Adminsidebar;
