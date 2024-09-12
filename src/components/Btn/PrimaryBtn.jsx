import React from "react";

function PrimaryBtn(props){
    return(
        <>
        <a href={props.link} target="_blank" className={props.class}>
            {props.BtnName} 

        </a>
        </>
    )
}

export default PrimaryBtn;