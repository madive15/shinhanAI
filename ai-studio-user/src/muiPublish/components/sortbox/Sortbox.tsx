// necessary set
import React, { useEffect } from "react";
import { ReactComponent as Arrow } from "~assets/images/svg/Icons-arr11.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";

// need content
import Switch from "@mui/material/Switch";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";

// need style
import "~/muiPublish/components/sortbox/sortbox.scss";

// Props type
export interface IPageProps {
    pageName?: string;
    subName?: string;
    loading?: boolean;
    useLoading?: (data: boolean) => void;
    listType?: boolean;
    setListType?: (data: boolean) => void;
}

/**
 * @author shinhanAI
 * @description
 * user-front: Sortbox
 * Sortbox
 * 정렬 조건 컨텐츠 :  즐겨 찾기, sort select, 리스트 유형
 *
 */
const Sortbox: React.FC<IPageProps> = (props) => {
    const [ageSelect, setAgeSelect] = React.useState("");
    const selectChange = (event: SelectChangeEvent) => {
        setAgeSelect(event.target.value as string);
    };

    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (props.setListType) {
            props?.setListType(event.target.checked);
        }
    };

    useEffect(() => {
        if (props.listType) {
            setChecked(props.listType);
        }
    }, [props.listType]);

    return (
        <>
            <div className="sort-box">
                <div className="sort-group">
                    <FormGroup row className="chk-group">
                        <FormControlLabel
                            control={<Checkbox icon={<ChkDefault />} checkedIcon={<ChkChecked />} />}
                            label="즐겨찾기 먼저보기"
                        />
                    </FormGroup>
                    <FormControl fullWidth>
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
                            <MenuItem value={10}>최신순</MenuItem>
                            <MenuItem value={20}>사용순</MenuItem>
                        </Select>
                    </FormControl>
                    <Switch className="switch-btn view-type" checked={checked} onChange={handleChange} />
                </div>
            </div>
        </>
    );
};

export default Sortbox;
