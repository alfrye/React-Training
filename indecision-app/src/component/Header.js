import React from "react";

const Header = (props) => {
    return (
        <div>
           <h1>{props.title} </h1>
           <h2>{props.subtitle}</h2>
        </div>
       );
}

//Setting default props for stateless functional components

Header.defaultProps = {
    title: 'Indecision App'
};


export default Header;