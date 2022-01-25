import React from 'react'

export default function Message(props) {
    return (
        <div>
            <h1>Today is {props.day}</h1>
            <p>my name is {props.name}</p>
            <img src={props.imagesrc}></img>
            <ol> 
                <li>My name is Rusty Shackleford also known as: {props.alias}</li>
                <li>My two favorite resturaunts are laimouna and {props.resturaunt}</li>
                <li>I love programming and {props.hobby}</li>
                <li></li>
                </ol>
        </div>
    )
}


// import React, {Component} from 'react'

// class Message extends Component{
//     constructor(){
//         // super()
//         this.state= {
//             message: "Welcome visitor"
//         }

//     }
//     omarArray=[1,2,3,4]

//     changeMessage(){
//         this.setState({
//             message: omarArray
//         })
//     }
//     render(){
//         return(
//             <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={()=> this.changeMessage()}>Subscribe Vish</button>
//         </div>)
//     }
// }

// export default Message;