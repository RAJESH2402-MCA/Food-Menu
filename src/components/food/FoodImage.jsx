import React from "react";

const FoodImage = (props) => {
    return (
        <>
         <img src={props.image} alt="" height={200} width={300} />
        </>
    )
}
export default FoodImage;