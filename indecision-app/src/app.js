console.log('App.js is running!')

const appProps = {
  title: "Indecision App",
  subTitle: "Page 1",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();  // keeps form from re-rendring page on submit

  const option = e.target.elements.option.value;
  console.log(option);
  if (option) {
    appProps.options.push(option);
    e.target.elements.option.value = "";
  
    renderApp();
  }


};

const clearOptions = () => {
    appProps.options = [];
    renderApp()
}
const appRoot = document.getElementById('app');
const renderApp = () => {
        const template = (
            <div>
                <h1>{appProps.title}</h1>
                {appProps.subTitle && <p>{appProps.subTitle}</p>}
                <p>{appProps.options.length >0 ? "Here are the options" : "No Options"}</p>
                <p>{appProps.options.length}</p>
                <button onClick={clearOptions}>Clear All</button>
                {/* using arrays in jsx */}
                <ol>
                   {
                    appProps.options.map((option) => {
                    return <li key={option}> {option}</li>
                   })
                }
                </ol>
                <form onSubmit={onFormSubmit}>
                 <input type="text" name="option"></input>

                  <button>Add Option</button>
                </form>
            </div>
            );

        ReactDOM.render(template,appRoot); 
    };
    
  


renderApp();