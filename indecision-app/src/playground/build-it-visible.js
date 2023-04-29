
const appRoot = document.getElementById('app');
let textValue = "Show Details";
let showText = false
const hideText = () => {
    showText = !showText;
   if (showText) {
    console.log("chnage text");
       textValue = "Hide Details";
   } else {
    textValue = "Show Details";
   }
    renderApp();
};


const renderApp = () => {
    const template = (
        <div>
          <h1>Visibility Toogle</h1>
          <button onClick={hideText}>{textValue}</button>
          { showText ? <p >Hey, there I am show you this</p> : <p hidden></p>}
        </div>
      );
         
      ReactDOM.render(template, appRoot);
};

renderApp();