import React, {Component} from "react"
import "./App.css"


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      favoriteColor: "red",
      colorElement:""
    }

  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({favoriteColor:"yellow"})
    },1000)
   
  }
  // changeIt=()=>{
  //   this.setState({favoriteColor:"Actually I update my answer Purple is my fav color"})
  //   this.setState({colorElement:"purple"})
  // }


  componentDidUpdate(prevProps, prevState){
    if(prevState.favoriteColor !== this.state.favoriteColor){
      this.setState({favoriteColor:"Actually I update my answer Purple is my fav color"})
      this.setState({colorElement:"purple"})
    }

  }
  
  render() {
    return (
      <div>
      <h1 style={{color:this.state.colorElement}}>My Favorite Color is {this.state.favoriteColor}</h1>
      <div className="checkboxBorder">
      <h4>Update It</h4>
      <input type="checkbox" onChange={this.changeIt}></input> 
      </div>
      
      </div>   );
  }
} 

export default App