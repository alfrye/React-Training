import React from "react";
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from "./OptionModal";


export default class IndecisionApp extends React.Component {
   state =  {
    options: [],
    selectedOption: undefined
   }
 
    handleDeleteOptions = () =>  {
     this.setState(() => ({options: []}));
    }
 
    handleDeleteOption = (optionToRemove) =>  {
     this.setState((prevState) => ({
         options: prevState.options.filter((option) => {
             return optionToRemove !== option
         })
     }
 
     ))
    } 
 
    handlePick = () => {
     console.log(`handle pick`);
     const randomNum = Math.floor(Math.random() * this.state.options.length);
     const option = this.state.options[randomNum];
     this.setState(()=>({
        selectedOption: option
     }))
    }
    
    handleAddOption = (option) =>  {
     if(!option){
         return `Enter valid value to add them`;
     } else if (this.state.options.indexOf(option) > -1) {
         return `This option already exists`;
 
     }
      this.setState((prevState) =>({options: prevState.options.concat(option)}));
    
    }

    clearSelectedOption = () => {
        this.setState(()=> ({
            selectedOption: undefined
        }));
    }

     // Lifecycle methods will fire at diffent times during the lifecycle of component
     componentDidMount () {
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
    
       componentDidUpdate (prevProps, prevState) {
         if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
         }
       }
    
       componentDidUnmount () {
        console.log(`did unmount`);
       }
   
     render() {
          const subtitle = 'Put your life in the hands of a computer';
          return (
         <div>
             <Header  subtitle={subtitle}/>
             <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} 
                />
                <div className="widget">
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
             </div>
           
             <OptionModal clearSelectedOption={this.clearSelectedOption} selectedOption={this.state.selectedOption}/>
         </div>
       );
     }
 }
 
 IndecisionApp.defaultProps = {
     options: []
 }
 
 
