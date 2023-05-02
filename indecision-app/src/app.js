class IndecisionApp extends React.Component {
    render() {
         const title  = 'Indecision';
         const subtitle = 'Put your life in the hands of a computer';
         const options = ['Thing one','Thing two', 'Thing four'];
         return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}>
               
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
           <h1>{this.props.title} </h1>
           <h2>{this.props.subtitle}</h2>
        </div>
       );
   }
}

class Action extends React.Component {
    handlePick() {
        alert('handle pick');
    }
    render() {
        return (
            <div>
               <button onClick={this.handlePick}>What Should I do?</button>
               </div>
 
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        console.log(this.props.options);
    }
    render () { 
         return ( // returns jsx 
            <div>
            <button onClick={this.handleRemove}>Remove All Contents</button>
            {this.props.options.map((option) => {
                 return <Option key={option} optionText={option} />
            })}
            <Option />
           
            </div>
         );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                {this.props.optionText}
          
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleSubmit (e) {
      e.preventDefault();
       
      const option = e.target.elements.option.value;
      if (option) {
        alert("handle submit");
      } 


    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
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