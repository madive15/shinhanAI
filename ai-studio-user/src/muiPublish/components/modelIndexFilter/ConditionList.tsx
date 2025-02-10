// necessary set
import React from "react";
import { ReactComponent as Plus9 } from "~assets/images/svg/Icons-plus-9.svg";
import { ReactComponent as ChkDefault } from "~assets/images/svg/Icons-chk-default.svg";
import { ReactComponent as ChkChecked } from "~assets/images/svg/Icons-chk-checked.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// need content
import TargetAddArea from "~/muiPublish/components/modelIndexFilter/TargetAddArea";
import Badge from "~/muiPublish/components/Badge";

// need style
import "~/muiPublish/components/modelIndexFilter/modelIndexFilter.scss";

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
 * user-front: ConditionList
 * ConditionList page
 * 선택한 추출의 모델, 지수, 필터 리스트
 */
const ConditionList: React.FC<IPageProps> = (props) => {
    return (
        <div className="condition-list">
            <FormGroup row className="chk-group item-view">
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<ChkDefault />}
                            checkedIcon={<ChkChecked />}
                        />
                    }
                    label="설정 항목 자세히 보기"
                />
            </FormGroup>
            <div className="item-view-list">
                <div className="item-box">
                    <div className="top">
                        <Badge value="모델" color="blue" />
                        <strong>자린고비 지수</strong>
                    </div>
                    <p className="desc">
                        1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                    </p>
                    <IconButton className="ico-rect23 x">
                        <Plus9 />
                    </IconButton>
                </div>
                <div className="item-box">
                    <div className="top">
                        <Badge value="필터" color="purple" />
                        <strong>자린고비 지수</strong>
                    </div>
                    <p className="desc">
                        1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                    </p>
                    <IconButton className="ico-rect23 x">
                        <Plus9 />
                    </IconButton>
                </div>
                <div className="item-box">
                    <div className="top">
                        <Badge value="지수" color="orange" />
                        <strong>자린고비 지수</strong>
                    </div>
                    <p className="desc">
                        1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                    </p>
                    <IconButton className="ico-rect23 x">
                        <Plus9 />
                    </IconButton>
                </div>
                <div className="item-box">
                    <div className="top">
                        <Badge value="필터" color="purple" />
                        <strong>자린고비 지수</strong>
                    </div>
                    <p className="desc">
                        1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                    </p>
                    <IconButton className="ico-rect23 x">
                        <Plus9 />
                    </IconButton>
                </div>
                <div className="item-box">
                    <div className="top">
                        <Badge value="지수" color="orange" />
                        <strong>자린고비 지수</strong>
                    </div>
                    <p className="desc">
                        1등급, 2등급, 3등급, 4등급, 5등급, 6등급, 7등급, 8등급
                    </p>
                    <IconButton className="ico-rect23 x">
                        <Plus9 />
                    </IconButton>
                </div>
            </div>

            <TargetAddArea />

            <div className="btn-wrap column">
                <Button variant="sub1" fullWidth>
                    조건 적용
                </Button>
                <Button variant="sub2" fullWidth>
                    시뮬레이션 적용
                </Button>
            </div>

            <div className="simulation-box">
                <strong>시뮬레이션</strong>
                <div className="middle-box">
                    <div className="success-rate">
                        <span>예상 성공률</span>
                        <em>00.00%</em>
                    </div>
                    <div className="bench-contrast">
                        <span>벤치마크 대비</span>
                        <em>0.00% ↓</em>
                    </div>
                </div>
                <div className="bench-success-rate">
                    <span>벤치마크 예상 성공률</span>
                    <em>00.00%</em>
                </div>
            </div>
        </div>
    );
};

export default ConditionList;
