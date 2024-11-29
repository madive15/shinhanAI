// necessary set
import React, { useState, useEffect } from "react";

// need content
import Loading from "~/publish/loading/Loading";
import AdminTab from "~/publish/components/AdminTab";
import SubTitle from "~/publish/components/SubTitle";
import SearchContent from "~/publish/components/SearchContent";
import TableSample from "~/publish/components/TableSample";
import Cardlist from "~/publish/components/Cardlist";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";
import Select from "~/publish/components/Select";
import { ReactComponent as Search } from "~assets/images/svg/Icons-search.svg";
// need style
import "~/publish/layout/layout.scss";

// Props type
export interface IPageProps {
  pageName?: string;
  subName?: string;
  loading?: boolean;
  useLoading?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: PermissionGroup 관리자메뉴 권한관리
 * PermissionGroup
 */
const PermissionGroup: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  //어드민 탭
  const adminMenu = ["권한그룹관리", "메뉴2", "메뉴3", "메뉴4"];
  const options = [
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
    { value: "option4", label: "옵션 4" },
    { value: "option5", label: "옵션 5" },
    { value: "option6", label: "옵션 6" },
    { value: "option7", label: "옵션 7" },
    { value: "option8", label: "옵션 8" },
  ];
  return (
    <>
      <div className="tabs-area">
        <AdminTab menuName={adminMenu} />
      </div>
      <div className="tabs-contents">
        <SubTitle pageName={props.pageName} />
        <div className="tabs-scroll-area">
          <SearchContent />
          <div className="card-table">
            <div className="left">
              <Cardlist pageName={props.pageName} />
            </div>
            <div className="right">
              <div className="right-scroll-area">
                <TableSample pageName={props.pageName} />
              </div>
              <ButtonWrap viewType="space-between">
                <div>
                  <Select
                    options={options}
                    placeholder="옵션을 선택하세요"
                    disabled={false}
                  />
                  <label className="search">
                    <input type="text" placeholder="검색어를 입력해주세요" />
                    <Search className="icon-search" />
                  </label>
                </div>
                <div>
                  <Button value="변경 취소" viewType="sub1" />
                  <Button value="변경 사항 저장" viewType="primary" />
                </div>
              </ButtonWrap>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PermissionGroup;
