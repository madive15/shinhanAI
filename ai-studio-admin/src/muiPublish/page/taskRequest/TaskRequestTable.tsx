// necessary set
import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Badge from "~/muiPublish/components/Badge";
import Paper from "@mui/material/Paper";

// need content
import Loading from "~/muiPublish/loading/Loading";
import AdminTab from "~/muiPublish/components/AdminTab";
import SubTitle from "~/muiPublish/components/SubTitle";
import SearchContent from "~/muiPublish/components/SearchContent";

// import Cardlist from "~/publish/components/Cardlist";

// need style
import "~/muiPublish/layout/layout.scss";

// Props type
export interface IPageProps {
  pageName?: string;
  subName?: string;
  loading?: boolean;
  useLoading?: (data: boolean) => void;
  heiTitSearch?: number;
}

/**
 * @author shinhanAI
 * @description
 * admin-front: ProductMeta
 * 상품메타관리 page
 */
const TaskRequestTable: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <TableContainer
      className="table-content"
      style={
        { "--heiTitSearch": props.heiTitSearch + "px" } as React.CSSProperties
      }
    >
      <Table
        stickyHeader
        className="table-defult-style"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell width={48} align="center">
              <strong>번호</strong>
            </TableCell>
            <TableCell width={149} align="center">
              <strong>상품분류</strong>
            </TableCell>
            <TableCell width={149} align="center">
              <strong>상품코드</strong>
            </TableCell>
            <TableCell width={149} align="center">
              <strong>상품명</strong>
            </TableCell>
            <TableCell width={149} align="center">
              <strong>상위분류</strong>
            </TableCell>
            <TableCell width={120} align="center">
              <strong>사용여부</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
            <TableRow key={idx}>
              <TableCell width={48} align="center">
                {idx}
              </TableCell>
              <TableCell width={149} align="center">
                상품분류
              </TableCell>
              <TableCell width={149} align="center">
                상품코드
              </TableCell>
              <TableCell width={149} align="center">
                상품명
              </TableCell>
              <TableCell width={149} align="center">
                상위분류
              </TableCell>
              <TableCell width={120} align="center">
                <Badge value="사용" color="green" size="large" />
                {/* <Badge value="미사용" color="gray" size="large" /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskRequestTable;
