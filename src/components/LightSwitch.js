import React, { Component } from 'react'

export default class LightSwitch extends Component {
    state = { active: true }

    toggle = () => {
        this.setState({
        active: !this.state.active
        })
    }

  render() {
    return (<div>
      <p>Your life is going to be:<br></br><b>{ this.state.active ? 'cuteness' : 'TOTAL DESTRUCTION' }</b></p>
      <button onClick={this.toggle}>DO NOT PRESS HERE</button>
    </div>)
  }
}