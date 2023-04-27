"use strict";

console.log('App.js is running!');

var appProps = {
  title: "Indecision App",
  subTitle: "Page 1",
  options: ["One", "two"]
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // keeps form from re-rendring page on submit

  var option = e.target.elements.option.value;
  console.log(option);
  if (option) {
    appProps.options.push(option);
    e.target.elements.option.value = "";

    renderApp();
  }
};

var clearOptions = function clearOptions() {
  appProps.options = [];
  renderApp();
};
var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
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
      appProps.options.length > 0 ? "Here are the options" : "No Options"
    ),
    React.createElement(
      "p",
      null,
      appProps.options.length
    ),
    React.createElement(
      "button",
      { onClick: clearOptions },
      "Clear All"
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
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
