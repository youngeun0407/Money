import React from "react";
import InputItem from "./InputItem";

function InputBoard(props){

    return (
        <div>
            <h5>지출내역</h5>
            {props.inputList.map((item) =><InputItem item={item}/>)}
        </div>
    )
}

export default InputBoard;