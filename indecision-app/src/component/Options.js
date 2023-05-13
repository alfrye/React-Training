import React from "react";
import Option from "./Option";
const Options = (props) =>  { 
    return ( // returns jsx 
       <div>
       <button onClick={props.handleDeleteOptions}>Remove All Contents</button>
       {props.options.length === 0 && <p>Please add an option to get started!</p>}
       {
           props.options.map((option) => {
             return (
               <Option 
               key={option} 
               optionText={option} 
               handleDeleteOption={props.handleDeleteOption}
               />
               
             )
       })
   }
      
       </div>
    );
}

export default Options;