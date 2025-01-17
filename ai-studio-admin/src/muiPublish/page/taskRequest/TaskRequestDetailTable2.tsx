// necessary set
import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
// need content
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as X } from "~assets/images/svg/Icons-x.svg";
import IconButton from "@mui/material/IconButton";
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
        <TableContainer className="table-content view-table row-table">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th">진행 상태</TableCell>
                        <TableCell>
                            <div className="input-group">
                                <Select
                                    className="select-box"
                                    value={ageSelect}
                                    onChange={selectChange}
                                    IconComponent={Arrow}
                                    displayEmpty
                                    MenuProps={{
                                        classes: {
                                            paper: "select-option-class",
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        전체
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                </Select>
                                <Button variant="sub1">
                                    과제 진행 히스토리
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">상위 분류</TableCell>
                        <TableCell>
                            <div className="text-area ">
                                <textarea name="" id="" disabled>
                                    과제 신청이 완료되었습니다.
                                </textarea>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th">진행 상태</TableCell>
                        <TableCell>
                            <div className="input-group">
                                <Select
                                    className="select-box"
                                    value={ageSelect}
                                    onChange={selectChange}
                                    IconComponent={Arrow}
                                    displayEmpty
                                    MenuProps={{
                                        classes: {
                                            paper: "select-option-class",
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        전체
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                </Select>
                                <Button variant="sub1">
                                    과제 진행 히스토리
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">상위 분류</TableCell>
                        <TableCell>
                            <div className="text-area ">
                                <textarea name="" id="">
                                    부서에서 신청하신 과제를 검토중입니다.
                                    업무일 기준 1~2일 검토 완료 예정입니다.
                                </textarea>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th">진행 상태</TableCell>
                        <TableCell>
                            <div className="input-group">
                                <Select
                                    className="select-box"
                                    value={ageSelect}
                                    onChange={selectChange}
                                    IconComponent={Arrow}
                                    displayEmpty
                                    MenuProps={{
                                        classes: {
                                            paper: "select-option-class",
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        전체
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                </Select>
                                <Button variant="sub1">
                                    과제 진행 히스토리
                                </Button>
                            </div>
                        </TableCell>
                        <TableCell component="th">과제 담당자</TableCell>
                        <TableCell>
                            <div className="input-group">
                                <TextField
                                    className="input-field"
                                    fullWidth
                                    placeholder="담당자를 검색해주세요."
                                />
                                <Button variant="sub1">검색</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">상위 분류</TableCell>
                        <TableCell colSpan={3}>
                            <div className="text-area ">
                                <textarea name="" id="">
                                    부서에서 신청하신 과제를 검토중입니다.
                                    업무일 기준 1~2일 검토 완료 예정입니다.
                                </textarea>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th">진행 상태</TableCell>
                        <TableCell>
                            <div className="input-group">
                                <Select
                                    className="select-box"
                                    value={ageSelect}
                                    onChange={selectChange}
                                    IconComponent={Arrow}
                                    displayEmpty
                                    MenuProps={{
                                        classes: {
                                            paper: "select-option-class",
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        전체
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                </Select>
                                <Button variant="sub1">
                                    과제 진행 히스토리
                                </Button>
                            </div>
                        </TableCell>
                        <TableCell component="th">과제 담당자</TableCell>
                        <TableCell>
                            <div className="input-group">
                                <TextField
                                    className="input-field"
                                    fullWidth
                                    placeholder="담당자를 검색해주세요."
                                />
                                <Button variant="sub1">검색</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">상위 분류</TableCell>
                        <TableCell colSpan={3}>
                            <div className="text-area ">
                                <textarea name="" id="">
                                    부서에서 신청하신 과제를 검토중입니다.
                                    업무일 기준 1~2일 검토 완료 예정입니다.
                                </textarea>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">파일 첨부</TableCell>
                        <TableCell colSpan={3}>
                            <div className="file-area">
                                <div className="input-file">
                                    <label htmlFor="file1-1">
                                        파일 선택
                                        <input
                                            type="file"
                                            name=""
                                            id="file1-1"
                                        />
                                    </label>
                                    <div className="file-list">
                                        <div className="delete-item">
                                            <span>과제명파일명.png</span>
                                            <IconButton>
                                                <X />
                                            </IconButton>
                                        </div>
                                        <div className="delete-item">
                                            <span>과제명파일명2.png</span>
                                            <IconButton>
                                                <X />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-volume">
                                    <span>2</span>개<span> / </span>
                                    <span>1,124</span>Ktyte
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th">진행 상태</TableCell>
                        <TableCell>
                            <div className="input-group">
                                <Select
                                    className="select-box"
                                    value={ageSelect}
                                    onChange={selectChange}
                                    IconComponent={Arrow}
                                    displayEmpty
                                    MenuProps={{
                                        classes: {
                                            paper: "select-option-class",
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        전체
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                </Select>
                                <Button variant="sub1">
                                    과제 진행 히스토리
                                </Button>
                            </div>
                        </TableCell>
                        <TableCell component="th">과제 담당자</TableCell>
                        <TableCell>
                            <div className="input-group">
                                <TextField
                                    className="input-field"
                                    fullWidth
                                    placeholder="담당자를 검색해주세요."
                                />
                                <Button variant="sub1">검색</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">상위 분류</TableCell>
                        <TableCell colSpan={3}>
                            <div className="text-area ">
                                <textarea name="" id="">
                                    부서에서 신청하신 과제를 검토중입니다.
                                    업무일 기준 1~2일 검토 완료 예정입니다.
                                </textarea>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">파일 첨부</TableCell>
                        <TableCell colSpan={3}>
                            <div className="file-area">
                                <div className="input-file">
                                    <label htmlFor="file1-2">
                                        파일 선택
                                        <input
                                            type="file"
                                            name=""
                                            id="file1-2"
                                        />
                                    </label>
                                    <div className="file-list">
                                        <span className="no-file">
                                            등록된 파일이 없습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="file-volume">
                                    <span>0</span>개<span> / </span>
                                    <span>0</span>Ktyte
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TaskRequestTable;
