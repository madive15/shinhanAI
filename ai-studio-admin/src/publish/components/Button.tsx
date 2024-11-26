// import { useState } from "react";
import "./button.scss";
function Button(props: any) {
    const classNames = props.viewType || "";

    return (
        <button
            type="button"
            className={`btn-root ${classNames || ""}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.value}
        </button>
    );
}
export default Button;
