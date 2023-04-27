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
};

const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
};
const  templateTwo = (
    <div>
        <h1>Count: {count} </h1>
        <button onClick={addOne}>+1 </button>
        <button onClick={minusOne}>-1 </button>
        <button onClick={reset}>reset </button>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot); 
