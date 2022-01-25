import "./Vish.css"


import React, { Component } from 'react'
export class Vish extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             salary:5
        }
    }
    

    render() {
        return (
            <div>
  <Button variant="success">Success</Button>{' '}          
    </div>
        )
    }
}

export default Vish