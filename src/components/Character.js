// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = props => {
    const { data } = props
    console.log(data)


    return (
        <div className="chara">
            <h2>{props.data.name}</h2>
        </div>

    )
       
}




export default Character