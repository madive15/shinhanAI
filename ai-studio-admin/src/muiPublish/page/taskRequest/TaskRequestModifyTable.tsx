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
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
// need content
import Loading from "~/muiPublish/loading/Loading";

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
 * admin-front: TaskRequestModifyTable
 * 상품메타관리 page
 */
const TaskRequestModifyTable: React.FC<IPageProps> = (props) => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  const useLoading = (onoff: boolean) => {
    setLoading(onoff);
  };
  const tooptipText = (
    <div>
      <strong>타이틀</strong>
      <br />
      툴팁 작업 예정 툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업
      예정툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업 예정툴팁 작업
      예정.
    </div>
  );
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <TableContainer className="table-content view-table row-table">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th">
              과제 명
              <Tooltip
                className="tooltip"
                disableFocusListener
                disableTouchListener
                title={tooptipText}
                placement="right"
              >
                <i className="ico-text">?</i>
              </Tooltip>
            </TableCell>
            <TableCell>
              <div className="td-flex g16">
                <TextField
                  className="input-field"
                  defaultValue={"Soho 우량고객 이탈 예측 과제"}
                  placeholder=""
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<ChkDefault />}
                      checkedIcon={<ChkChecked />}
                    />
                  }
                  label="비밀글"
                />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">파일 첨부</TableCell>
            <TableCell>
              <div className="file-area">
                <div className="input-file">
                  <label htmlFor="file1-2">
                    파일 첨부
                    <input type="file" name="" id="file1-2" />
                  </label>
                  <div className="file-list">
                    <span className="no-file">등록된 파일이 없습니다.</span>
                  </div>
                </div>
                <div className="file-volume">
                  <span>0</span>개<span> / </span>
                  <span>0</span>Ktyte
                </div>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th">
              과제 신청 내용
              <p className="th-desc">
                게시글 양식에 맞춰 내용을 입력하거나, 파일의 과제 신청 양식을
                작성하여 파일첨부 해주세요.
              </p>
            </TableCell>
            <TableCell>
              <div style={{ backgroundColor: "#fafafa", height: "483px" }}>
                에디터 영역
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskRequestModifyTable;
