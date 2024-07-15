import React from "react";
import FoodImg_1 from "../../assests/img/other_1.jpg";
import FoodImg_2 from "../../assests/img/other_2.jpg";
import FoodImg_3 from "../../assests/img/other_3.jpg";
import FoodImg_4 from "../../assests/img/other_4.jpg";
import FoodCard from "./FoodCard";
const FoodMenu = () => {
    return (
        <>
        <div className="container mt-4">
            <div className="row sm-3">
                <div className="col sm-3">
                   <FoodCard image={FoodImg_1} heading={"food1"}/>
                </div>
                 <div className="col sm-3">
                <FoodCard image={FoodImg_2} heading={"food2"}/>
                </div>
                <div className="col sm-3">
                <FoodCard image={FoodImg_3} heading={"food3"}/>
                </div>
                <div className="col sm-3">
                <FoodCard image={FoodImg_4} heading={"food4"}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default FoodMenu;