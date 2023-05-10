class IndecisionApp extends React.Component {
   constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
          options: props.options
        };
   }

   // Lifecycle methods will fire at diffent times during the lifecycle of component
   componentDidMount() {
    try {
        const options = localStorage.getItem('options');
        const json = JSON.parse(options)
        if (json) {
            this.setState(()=> ({options: json}));
        }  
        
    } catch (e) {
        // do nothing 
    }
  
   
   }

   componentDidUpdate(prevProps, prevState) {
     if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saving data');
     }
   }

   componentDidUnmount() {
    console.log(`did unmount`);
   }
   handleDeleteOptions() {
    this.setState(() => ({options: []}));
   }

   handleDeleteOption (optionToRemove) {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
            return optionToRemove !== option
        })
    }

    ))
   }

   handlePick() {
    console.log(`handle pick`);
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
   }
   
   handleAddOption(option) {
    if(!option){
        return `Enter valid value to add them`;
    } else if (this.state.options.indexOf(option) > -1) {
        return `This option already exists`;

    }
     this.setState((prevState) =>({options: prevState.options.concat(option)}));
   
   }
    render() {
         const subtitle = 'Put your life in the hands of a computer';
         return (
        <div>
            <Header  subtitle={subtitle}/>
            <Action 
               hasOptions={this.state.options.length > 0}
               handlePick={this.handlePick} 
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            >
               
            </Options>
            
            <AddOption 
            handleAddOption={this.handleAddOption}
            />
        </div>
      );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
           <h1>{props.title} </h1>
           <h2>{props.subtitle}</h2>
        </div>
       );
}

//Setting default props for stateless functional components

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
 return (
    <div>
    <button 
         onClick={props.handlePick}
         disabled ={!props.hasOptions}
     > What Should I do?
         </button>
    </div>
 );
};

  const Options = (props) =>  { 
         return ( // returns jsx 
            <div>
            <button onClick={props.handleDeleteOptions}>Remove All Contents</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => {
                  return (
                    <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
                    
                  )
            })
        }
           
            </div>
         );
    }


const  Option = (props) =>  {
   
        return (
            <div>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                >
                remove
                </button>
            </div>
        );
    
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            error: undefined
        }
    }
    handleAddOption (e) {
      e.preventDefault();
       
      const option = e.target.elements.option.value;
      const error = this.props.handleAddOption(option);
      this.setState(()=> ({error}))

      if (!error) { 
    
      e.target.elements.option.value = ""; 
      }
    }
  
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
             <button>Add Option</button>
           </form>
       </div>
       );
        
    }
}

// const User = (props) => {
//      return (
//         <div>
//          <p>Name: {props.name}</p>
//          <p> Age: {props.age} </p>
//         </div>
//      );
// };

ReactDOM.render(<IndecisionApp  />, document.getElementById('app'));  