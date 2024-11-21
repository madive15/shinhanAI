// necessary set
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoPath from "~assets/images/admin_logo.png";

import Adminsidebar from "../components/Adminsidebar";

// Props type
export interface IPageProps {
  pageName?: string;
  subName?: string;
  loading?: boolean;
  useLoading?: (data: boolean) => void;
}

// need style

/**
 * @author shinhanAI
 * @description
 * admin-front: side MenuContainer
 * admin side menu
 */

const MenuContainer: React.FC<IPageProps> = (props) => {
  // console.log('Top pageName ===>', props.pageName)
  // console.log('Top subName ===>', props.subName)
  // const testLogout = () => {
  //   window.sessionStorage.removeItem('authToken')
  //   window.location.href = '/'
  // }

  return (
    <div className="side-content">
      <Adminsidebar />
    </div>
  );
};

export default MenuContainer;
