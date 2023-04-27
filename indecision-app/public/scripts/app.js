"use strict";

console.log('App.js is running!');

var appProps = {
    title: "Indecision App",
    subTitle: "Page 1",
    optiona: ["One", "two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appProps.title
    ),
    appProps.subTitle && React.createElement(
        "p",
        null,
        appProps.subTitle
    ),
    React.createElement(
        "p",
        null,
        appProps.optiona.length > 0 ? "Here are the options" : "No Options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);
var count = 0;
var addOne = function addOne() {
    console.log('addOne');
    count++;
};

var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count,
        " "
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1 "
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1 "
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "reset "
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
