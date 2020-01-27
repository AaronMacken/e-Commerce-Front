import React, { Component } from 'react'

export default class FunFact extends Component {
    render() {
        const {heading, text, icon} = this.props;
        const styles = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        return (
            <div style={styles}>
                <i className={icon}/>
                <h6>{heading}</h6>
                <p>{text}</p>
                
            </div>
        )
    }
}
