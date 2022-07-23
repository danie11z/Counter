import React from "react"

export default class Counter extends React.Component{
  state = {
    count: 0,
  }

  Add = () => {
    if(this.state.count<10){
      this.setState({
        count: this.state.count +1
      })
    }
  }

  Remove = () => {
    if(this.state.count>0){
      this.setState({
        count: this.state.count -1
      })
    }
  }

  render(){
    return(
      <>
        <button onClick={this.Add}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.Remove}>-</button>
      </>
    )
  }
}
