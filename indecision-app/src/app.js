console.log('App.js is running!')

const appProps = {
  title: "Indecision App",
  subTitle: "Page 1",
  optiona: ["One", "two"]
};

const template = (
    <div>
        <h1>{appProps.title}</h1>
        {appProps.subTitle && <p>{appProps.subTitle}</p>}
        <p>{appProps.optiona.length >0 ? "Here are the options" : "No Options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
    );
let count =0;
const addOne = () => {
   console.log('addOne');
   count++;
   renderCounterApp(); 
};

const minusOne = () => {
    console.log('minusOne');
    count--;
    renderCounterApp();
};
const reset = () => {
    console.log('reset');
    count=0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');



const renderCounterApp = () => {
    const  templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne}>+1 </button>
            <button onClick={minusOne}>-1 </button>
            <button onClick={reset}>reset </button>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot); 
};

renderCounterApp();