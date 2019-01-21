import React, { Component } from 'react'
import User from './User';

export default class UserBoard extends Component {
  render() {
    return  <div>
    <h1>User Board</h1>
        <User name="Kelley"/>
        <User name="Alex"/>
        <User name="Carmen"/>
        <User name="Joey"/>
    </div>
  }     
}