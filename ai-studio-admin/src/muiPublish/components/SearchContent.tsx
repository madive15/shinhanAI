// necessary set
import React, { useState } from "react";

// need content
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import { ReactComponent as ChkDisabled } from "~assets/images/svg/Icons-chk-disabled.svg";
import { ReactComponent as RadioDefault } from "~assets/images/svg/Icons-radio-default.svg";
import { ReactComponent as RadioChecked } from "~assets/images/svg/Icons-radio-checked.svg";
import { ReactComponent as RadioDisabled } from "~assets/images/svg/Icons-radio-disabled.svg";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as Icons15 } from "~assets/images/svg/Icons-Icons15.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import Sample from "~/muiPublish/components/search/Sample";
import SearchProductMeta from "~/muiPublish/components/search/SearchProductMeta";
import SearchTaskRequest from "~/muiPublish/components/search/SearchTaskRequest";
import SearchPromptMeta from "~/muiPublish/components/search/SearchPromptMeta";
import SearchPrebuiltMeta from "~/muiPublish/components/search/SearchPrebuiltMeta";
import SearchPopupManage from "~/muiPublish/components/search/SearchPopupManage";

// need style
import SearchContentStyle from "~/muiPublish/theme/SearchContentStyle";
import "./search.scss";

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
 * admin-front: SubTitle
 * SubTitle page
 */
const SearchContent: React.FC<IPageProps> = (props) => {
    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };

    //데이터 픽커
    const [startDate, setStartDate] = useState();
    return (
        <SearchContentStyle>
            {props.pageName === "상품메타관리" && <SearchProductMeta />}
            {props.pageName === "과제 신청" && <SearchTaskRequest />}
            {props.pageName === "프롬프트메타관리" && <SearchPromptMeta />}
            {props.pageName === "팝업 관리" && <SearchPopupManage />}
            {props.pageName === "프리빌트 메타관리" && <SearchPrebuiltMeta />}
            {props.pageName === "샘플폼" && <Sample />}

            <div className="btn-root-wrap end" aria-label="Basic button group">
                <Button variant="sub1">초기화</Button>
                <Button variant="sub2">조회</Button>
            </div>
        </SearchContentStyle>
    );
};

export default SearchContent;
