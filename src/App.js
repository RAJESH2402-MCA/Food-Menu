import React,{Fragment}from 'react';
import FoodMenu from './components/food/FoodMenu';
import NavBar from './layout/NavBar';

function App() {
  
  
  return (
   <>
    <NavBar header="My Heading" color="bg-success"  /> 
   
    
    <FoodMenu/>
   </>

  );
}

export default App;
