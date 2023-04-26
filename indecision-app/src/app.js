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
    </div>);

const  templateTwo = (
    <div>
        <h1>Alan Frye</h1>
        <p>Age: 54</p>
        <p>Location: Chattanooga</p>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);
