import React, { Component } from 'react'

export class Contact extends Component {
    /* render() {
        return (
            <div>
                <h1>Contact</h1>
            </div>
        )
    } */
    onSubmit = () => {
        this.props.history.push('/users')
      }
      render() {
        return (
          <form>
            <input placeholder="name" type="name" />
            <input placeholder="email" type="email" />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        )
      }
}

export default Contact
