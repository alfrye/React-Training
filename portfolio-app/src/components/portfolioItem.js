import React from "react";

const PortfolioItemPage = (props) => {
     return (
        <div>
        <h1>Portfolio Item</h1>
        <p>Portfolio item is {props.match.params.id}</p>
        </div>
     )
};

export default PortfolioItemPage;