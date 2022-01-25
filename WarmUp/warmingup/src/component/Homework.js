import React, { Component } from "react";
/**
* Task: Wire up the partially-finished travel form so that it works!
* Remember to use the concept of controlled forms
* https://reactjs.org/docs/forms.html
*
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
        firstName:"",
        lastName:"",
        age:"",
        gLocation:"",
        gender:"",
        isKohser:false,
        isHalal:false,
        isVegan:false,
    };
  } handleChange=(event)=>{ 
      const {name, value, type, checked } = event.target;
      type==="checkbox"?
      this.setState({[name]: checked}):
      this.setState({[name]: value});
      //this is called object destructuring
  }
  render() {
    return (
      <main>
        <form>
          <input 
            placeholder="First Name" 
            type="text"
            value={this.state.firstName}
            name="firstName"
            onchange={this.handleChange}
          />
          <br />
          <input placeholder="Last Name"
           type="text"
           value={this.state.lastName}
           name="lastName"
           onchange={this.handleChange} />
          <br />
          <input placeholder="Age" />
          <br />
          {/* Create radio buttons for gender here */}
          <br />
          {/* Create select box for location here */}
          <br />
          {/* Create check boxes for dietary restrictions here. Like Vegan, Kosher, Halal, etc*/}
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.gLocation}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    );
  }
}
export default App;