"use strict";

console.log('App.js is running!');

var appProps = {
  title: "Indecision App",
  subTitle: "Page 1",
  options: []
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

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * appProps.options.length);
  var option = appProps.options[randomNum];
  alert(option);
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
      "button",
      { disabled: appProps.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: clearOptions },
      "Clear All"
    ),
    React.createElement(
      "ol",
      null,
      appProps.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          " ",
          option
        );
      })
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
