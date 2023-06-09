

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // Sets up state object
        this.state = {
           count: 0
        };
    } 

    componentDidMount() {
        const lastCount = parseInt(localStorage.getItem('counter'),10);
         if (isNaN(lastCount)) {
            this.setState(() => ({count: lastCount}));
        }
      
        console.log(`Counter did mount ${lastCount}`);
    }

    componentDidUpdate(prevProps, prevState){

     if (prevState.count !== this.state.count) {
      localStorage.setItem('counter', this.state.count);
     }
    }
 
 
    handleAddOne () {
        this.setState((prevState) => {
            console.log(`prevcount ${prevState.count}`);
           return {
            count: prevState.count + 1
           };
        }); 
        }
    
 
    handleMinusOne () {
      this.setState((prevState)=> {
         return {
            count: prevState.count - 1 
         };
      })    
    } 

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        })
    }

    render () {
        return (
            <div>
             <h1>Count:{this.state.count}</h1>
             <button onClick={this.handleAddOne}>+1 </button>
             <button onClick={this.handleMinusOne} >-1 </button>
             <button onClick={this.handleReset} >reset </button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />,document.getElementById('app')); 
// let count =0;
// const addOne = () => {
//    console.log('addOne');
//    count++;
//    renderCounterApp(); 
// };

// const minusOne = () => {
//     console.log('minusOne');
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     console.log('reset');
//     count=0;
//     renderCounterApp();
// };


// const appRoot = document.getElementById('app');



// const renderCounterApp = () => {
//     const  templateTwo = (
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={addOne}>+1 </button>
//             <button onClick={minusOne}>-1 </button>
//             <button onClick={reset}>reset </button>
//         </div>
//     );

//     ReactDOM.render(templateTwo,appRoot); 
// };

// renderCounterApp();

