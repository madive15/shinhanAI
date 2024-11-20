// import React, { useEffect, useState } from "react";
// import "./Adminsidebar.scss";

const Adminsidebar = () => {
  //   const menuData = [
  //     {
  //       title: "홈 대시보드",
  //       link: "#",
  //       icon: "아이콘",
  //       submenu: [
  //         { title: "홈 대시보드 1", link: "/pizza" },
  //         { title: "홈 대시보드 2", link: "#" },
  //         { title: "홈 대시보드 3", link: "#" },
  //         { title: "홈 대시보드 4", link: "#" },
  //         { title: "홈 대시보드 5", link: "#" },
  //         { title: "홈 대시보드 6", link: "#" },
  //       ],
  //     },
  //     {
  //       title: "AI 타겟 추출",
  //       link: "#",
  //       icon: "아이콘",
  //       submenu: [
  //         { title: "AI 타겟 추출 1", link: "#" },
  //         { title: "AI 타겟 추출 2", link: "#" },
  //       ],
  //     },
  //     {
  //       title: "AI 모델 만들기",
  //       icon: "아이콘",
  //       submenu: [
  //         { title: "AI 모델 만들기 1", link: "#" },
  //         { title: "AI 모델 만들기 2", link: "#" },
  //       ],
  //     },
  //     {
  //       title: "고객성향 지수",
  //       icon: "아이콘",
  //       submenu: [
  //         { title: "고객성향 지수 1", link: "#" },
  //         { title: "고객성향 지수 2", link: "#" },
  //       ],
  //     },
  //     {
  //       title: "마이페이지",
  //       icon: "아이콘",
  //       submenu: [
  //         { title: "마이페이지 1", link: "#" },
  //         { title: "마이페이지 2", link: "#" },
  //       ],
  //     },
  //     {
  //       title: "SingleView",
  //       icon: "아이콘",
  //       submenu: [
  //         { title: "SingleView 1", link: "#" },
  //         { title: "SingleView 2", link: "#" },
  //       ],
  //     },
  //     {
  //       title: "게시판",
  //       icon: "아이콘",
  //       submenu: [
  //         { title: "게시판 1", link: "#" },
  //         { title: "게시판 2", link: "#" },
  //       ],
  //     },
  //     {
  //       title: "유틸리티",
  //       icon: "아이콘",
  //       submenu: [
  //         { title: "유틸리티 1", link: "#" },
  //         { title: "유틸리티 2", link: "#" },
  //       ],
  //     },
  //     {
  //       title: "시스템 관리",
  //       link: "https://naver.com",
  //       icon: "아이콘",
  //       // submenu: [
  //       //   { title: "시스템 관리 1", link: "#" },
  //       //   { title: "시스템 관리 2", link: "#" },
  //       // ],
  //     },
  //   ];
  //   const [openMenus, setOpenMenus] = useState([]);
  //   const [sidebar, setSidebar] = useState(false);
  //   const MenuClick = ({ index, link }: any) => {
  //     if (!menuData[index].submenu) {
  //       window.location.href = link;
  //       return;
  //     }
  //     if (sidebar) {
  //       setSidebar(false);
  //     }
  //     setOpenMenus((e: any) =>
  //       e.includes(index)
  //         ? e.filter((menuIndex: any) => menuIndex !== index)
  //         : [...e, index]
  //     );
  //   };
  //   return (
  //     <div className={`sidebar ${sidebar ? "active" : ""}`}>
  //       {/* 로고 */}
  //       <h1 className="sidebar-logo">
  //         <a href="">
  //           <i className="logo-icon"></i>
  //           {!sidebar && "Ai Studio"}
  //         </a>
  //       </h1>
  //       {/* 메뉴 */}
  //       <nav className="sidebar-nav">
  //         <ul className="sidebar-menu">
  //           {menuData.map((menu, index: number) => (
  //             <li
  //               key={index}
  //               className={`sidebar-item ${
  //                 openMenus.includes(index) ? "active" : ""
  //               } ${!menu.submenu ? "no-submenu" : ""}`}
  //             >
  //               <a
  //                 href={menu.submenu ? "#" : menu.link}
  //                 className="sidebar-link"
  //                 onClick={() => (menu.submenu ? MenuClick(index) : null)}
  //               >
  //                 <span className="sidebar-icon"></span>
  //                 {!sidebar && menu.title}
  //               </a>
  //               {menu.submenu && openMenus.includes(index) && (
  //                 <ul className="sidebar-submenu">
  //                   {menu.submenu.map((subitem, subindex) => (
  //                     <li key={subindex}>
  //                       <a href={subitem.link} className="sidebar-sublink">
  //                         {subitem.title}
  //                       </a>
  //                     </li>
  //                   ))}
  //                 </ul>
  //               )}
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>
  //       {/* <Btn
  //         viewType="sidebar-control"
  //         value={sidebar ? ">" : "<"}
  //         onClick={toggleSidebar}
  //       /> */}
  //     </div>
  //   );
};

export default Adminsidebar;
