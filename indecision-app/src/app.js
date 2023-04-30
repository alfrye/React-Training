class IndecisionApp extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <Action />
            <Options>
               
            </Options>
            
            <AddOption />
        </div>
      );
    }
}
class Header extends React.Component {
   render() {
       return (
        <div>
           <h1>Indecision </h1>
           <h2>Put your life  in the hands of a computer</h2>
        </div>
       );
   }
}

class Action extends React.Component {
    render() {
        return (
            <div>
               <button>What Should I do?</button>
               </div>
 
        );
    }
}

class Options extends React.Component {
    render () { 
         return ( // returns jsx 
            <div>
            Options will render here

            <Option />
           
            </div>
         );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
            Option Component here.
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
            <form >
            <input type="text" name="option"></input>
             <button>Add Option</button>
           </form>
       </div>
       );
        
    }
}

// const jsx = (   
//      <div>
//       <Header />
//       <Action />
//       <Options />
//       <AddOption />
//       </div> 


// );

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 