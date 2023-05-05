class Visibility extends React.Component {
   constructor(props) {
    super(props); 
       this.toggleText = this.toggleText.bind(this);
       this.state = {
         visibility: false
       };
   }

   toggleText() {
       this.setState((prevState) => {
           return {
            visibility: !this.state.visibility
          };
       })
     
   }
   render () {
   
    return (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.toggleText}>{this.state.visibility? "Hide Details" : "Show Details"}</button>
      { this.state.visibility ? <p >Hey, there I am show you this</p> : <p hidden></p>}
    </div>
    ); 
  }
   
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

