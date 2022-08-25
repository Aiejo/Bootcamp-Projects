import React from "react";

const Filter = (props) => {
    return (
        <div>
        {props.text}<input placeholder={props.placeholder} value={props.value} onChange={props.handleChanges}/>
        </div>
    )
}
export default Filter