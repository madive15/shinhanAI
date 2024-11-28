// necessary set
import React from "react";

// need content
import BoardTh from "../page/boards/BoardTh";
import BoardTd from "../page/boards/BoardTd";
import ButtonWrap from "~/publish/components/ButtonWrap";
import Button from "~/publish/components/Button";

// need style
import "./table.scss";

// Props type
export interface IPageProps {
  pageName?: string;
  subName?: string;
  loading?: boolean;
  useLoading?: (data: boolean) => void;
}

interface ITableProps extends IPageProps {
  accordion?: boolean;
}

const items = [
  {
    no: "1",
    id: "관리자",
    name: "관리자",
    des: "관리",
    division: "구분",
    createData: "9999-99-99",
    createName: "신한",
    modifyDate: "9999-99-99",
    modifyName: "신한",
  },
  {
    no: "2",
    id: "서브관리자",
    name: "서브관리자",
    des: "관리",
    division: "구분",
    createData: "9999-99-99",
    createName: "신한",
    modifyDate: "9999-99-99",
    modifyName: "신한",
  },
  {
    no: "3",
    id: "유저관리자",
    name: "유저관리자g",
    des: "관리",
    division: "구분",
    createData: "9999-99-99",
    createName: "신한",
    modifyDate: "9999-99-99",
    modifyName: "신한",
  },
  {
    no: "4",
    id: "게시판관리자",
    name: "게시판관리자s",
    des: "관리",
    division: "구분",
    createData: "9999-99-99",
    createName: "신한",
    modifyDate: "9999-99-99",
    modifyName: "신한",
  },
  {
    no: "5",
    id: "일반 관리자",
    name: "일반 관리자",
    des: "관리",
    division: "구분",
    createData: "9999-99-99",
    createName: "신한",
    modifyDate: "9999-99-99",
    modifyName: "신한",
  },
];

/**
 * @author shinhanAI
 * @description
 * admin-front: Table
 * Table page
 */
const OcrTable: React.FC<ITableProps> = (props) => {
  return (
    <div className="table-content">
      <div className="tb-body">
        <BoardTh
          titleTxt={[
            { text: "번호", width: 48 },
            { text: "권한ID", width: 112 },
            { text: "권한명", width: 136 },
            { text: "권한설명", width: 208 },
            { text: "권한 구분", width: 208 },
            { text: "등록일시", width: 208 },
            { text: "등록자", width: 208 },
            { text: "수정일시", width: 208 },
            { text: "수정자", width: 208 },
          ]}
        />

        {items !== undefined && items.length > 0 ? (
          items.map((data, i) => (
            <BoardTd
              key={i}
              id={i}
              titleTxt={[
                { text: data.no, width: 48 },
                { text: data.id, width: 112 },
                { text: data.name, width: 136 },
                { text: data.des, width: 208 },
                { text: data.division, width: 208 },
                { text: data.createData, width: 208 },
                { text: data.createName, width: 208 },
                { text: data.modifyDate, width: 208 },
                { text: data.modifyName, width: 208 },
              ]}
              accordion={props.accordion}
              pageName={props.pageName}
            />
          ))
        ) : (
          <div key={0}>
            <p style={{ lineHeight: 1.6 }}>등록된 내역이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OcrTable;
