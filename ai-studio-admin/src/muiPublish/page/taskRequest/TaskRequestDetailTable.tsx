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
// need content
import Loading from "~/muiPublish/loading/Loading";
import AdminTab from "~/muiPublish/components/AdminTab";
import SubTitle from "~/muiPublish/components/SubTitle";
import SearchContent from "~/muiPublish/components/SearchContent";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { ReactComponent as Download } from "~assets/images/svg/Icons-download.svg";
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

  const [radioGroup, setRadioGroup] = React.useState("female");
  const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioGroup((event.target as HTMLInputElement).value);
  };

  const [ageSelect, setAgeSelect] = React.useState("");
  const selectChange = (event: SelectChangeEvent) => {
    setAgeSelect(event.target.value as string);
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <TableContainer
      className="table-content row-table"
      style={
        { "--heiTitSearch": props.heiTitSearch + "px" } as React.CSSProperties
      }
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th">과제 명</TableCell>
            <TableCell>
              <div className="td-flex g8">
                <strong>Soho 우량고객 이탈 예측 과제</strong>
                <Badge value="과제 신청" color="green" size="large" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">작성자</TableCell>
            <TableCell>김멀더 (MulderKim)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">등록일</TableCell>
            <TableCell>2024-10-18</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">내용</TableCell>
            <TableCell>
              <p>에디터 내용이 들어갑니다.</p>
              <p>에디터 내용이 들어갑니다.</p>
              <p>에디터 내용이 들어갑니다.</p>
              <p>에디터 내용이 들어갑니다.</p>
              <p>에디터 내용이 들어갑니다.</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">파일 첨부</TableCell>
            <TableCell>
              <div className="btn-wrap">
                <Button variant="dashed" endIcon={<Download fill="#888" />}>
                  버튼 텍스트
                </Button>
                <Button variant="dashed" endIcon={<Download fill="#888" />}>
                  버튼 텍스트
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskRequestTable;
