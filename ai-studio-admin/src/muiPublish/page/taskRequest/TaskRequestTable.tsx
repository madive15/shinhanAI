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
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";

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
 * admin-front: TaskRequestTable
 * 상품메타관리 page
 */
const TaskRequestTable: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };
  const [popupStauts, setpopupStauts] = React.useState(false);
  const popupOpen = () => {
    setpopupStauts(true);
  };
  const popupClose = () => {
    setpopupStauts(false);
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
            <TableCell width={38} align="center">
              <Checkbox
                icon={<ChkDefault />}
                checkedIcon={<ChkChecked />}
                // defaultChecked
              />
            </TableCell>
            <TableCell width={48} align="center">
              <strong>No.</strong>
            </TableCell>
            <TableCell width={513} align="center">
              <strong>신청 과제명</strong>
            </TableCell>
            <TableCell width={144} align="center">
              <strong>작성자</strong>
            </TableCell>
            <TableCell width={144} align="center">
              <strong>등록일</strong>
            </TableCell>
            <TableCell width={144} align="center">
              <strong>진행상태</strong>
            </TableCell>
            <TableCell width={513} align="center">
              <strong>과제 관리</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
            <TableRow key={idx}>
              <TableCell width={38} align="center">
                <Checkbox
                  icon={<ChkDefault />}
                  checkedIcon={<ChkChecked />}
                  // defaultChecked
                />
              </TableCell>
              <TableCell width={48} align="center">
                {idx}
              </TableCell>
              <TableCell width={513} align="left">
                Sogo 우량고객 이탈 예측 과제
              </TableCell>
              <TableCell width={144} align="center">
                상품코드
              </TableCell>
              <TableCell width={144} align="center">
                상품명
              </TableCell>
              <TableCell width={144} align="center">
                <Badge value="사용" color="green" size="large" />
              </TableCell>
              <TableCell width={513} align="center">
                <div className="btn-wrap center">
                  <Button variant="small">상태 답변</Button>
                  <Button variant="small" onClick={popupOpen}>
                    히스토리
                  </Button>
                  <Button variant="small">수정</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog className="layer-box " open={popupStauts} onClose={popupClose}>
        <DialogTitle>과제 진행 히스토리</DialogTitle>
        <DialogContent>
          <TableContainer className="table-content">
            <Table
              stickyHeader
              className="table-defult-style"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell width={104} align="center">
                    <strong>일시</strong>
                  </TableCell>
                  <TableCell width={120} align="center">
                    <strong>진행 상태</strong>
                  </TableCell>
                  <TableCell width={304} align="center">
                    <strong>의견</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2, 3, 4].map((idx) => (
                  <TableRow key={idx}>
                    <TableCell width={104} align="center">
                      2024-10-08 15:03
                    </TableCell>
                    <TableCell width={120} align="center">
                      <Badge value="사용" color="green" size="large" />
                    </TableCell>
                    <TableCell width={304} align="left">
                      담당자가 신청하신 과제를 검토중입니다. 업무일 기준 1~2일
                      내 검토 완료 예정입니다.
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <IconButton className="dialog-close" onClick={popupClose}>
          <Icons15 fill="#222 " />
        </IconButton>
      </Dialog>
    </TableContainer>
  );
};

export default TaskRequestTable;
