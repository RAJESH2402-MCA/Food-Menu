import React from "react";


const MyCard = () => {
    return(
    <>
        <h2 className="myStyles">Welcome to My Card</h2>
       
        <i className="bi bi-facebook bi-2"></i>
        <button className="btn btn-success m-2">Login</button>
      
        <button className="btn btn-danger m-2">Logout</button>
    </>
    )
}
export default MyCard;