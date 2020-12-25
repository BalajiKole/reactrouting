import React, { Component } from 'react'

export class List extends Component {
    render() {
        console.log(this.props)
        const {params}= this.props.match
        return (
            <div>
                <h1>Id: {params.id}</h1>
            </div>
        )
    }
}

export default List
