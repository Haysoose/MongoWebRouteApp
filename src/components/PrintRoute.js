import React, { Component } from 'react';
import styled from 'styled-components';

const H5 = styled.h5`
    color: black;
`

const Div = styled.div`
    justify-content: center;
`

const Select = styled.select`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #3a5896;
    font-size: 1rem;
`

const Button = styled.button`
    width: 50%;
    height: 4vh;
    color: white;
    background-color: #3a5896;
    text-align: center;
    border-radius: 1vh;
    font-size: 1rem;
`


export default class PrintRoute extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const routeToPrint = document.getElementById('routeOption');
        this.props.printTickets(routeToPrint.value);
    }

    render() {
        return (
            <Div>
                <H5>Choose Route</H5>
                <Select name="routeOption" id="routeOption">
                            <option value="P">P Route</option>
                            <option value="Q">Q Route</option>
                            <option value="R">R Route</option>
                            <option value="S">S Route</option>
                            <option value="T">T Route</option>
                            <option value="U">U Route</option>
                            <option value="V">V Route</option>
                            <option value="W">W Route</option>
                            <option value="Freight">Freight</option>
                        </Select>
                        <Button onClick={this.handleClick}>Print Route</Button>
            </Div>
        )
    }
}
