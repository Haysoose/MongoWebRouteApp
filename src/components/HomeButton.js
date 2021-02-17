import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 50%;
    height: 4vh;    
    color: white;
    background-color: #3a5896;
    text-align: center;
    border-radius: 1vh;
    font-size: 1rem;
`

export default class HomeButton extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        this.props.homePage();
    }

    render() {
        return (
            <Button onClick={this.handleClick}>Home Page</Button>
        )
    }
}
