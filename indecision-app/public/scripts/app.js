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
    renderCounterApp();
};

var minusOne = function minusOne() {
    console.log('minusOne');
    count--;
    renderCounterApp();
};
var reset = function reset() {
    console.log('reset');
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
