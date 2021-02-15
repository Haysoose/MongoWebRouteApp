import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
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

const Td = styled.td`
    border: 1px solid black;
    background-color: #FFFFFF;
    width: 200px;
    color: black;
`

export default class Product extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.removeProduct(this.props.name, this.props.bottle, this.props.water, this.props.label, this.props.cases, this.props.date, this.props.spec);
    }
    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.bottle}</Td>
                <Td>{this.props.water}</Td>
                <Td>{this.props.label}</Td>
                <Td>{this.props.cases}</Td>
                <Td>{this.props.date}</Td>
                <Td>{this.props.spec}</Td>
                <Td>
                    <Div>
                        <Button onClick={this.handleClick}>Add To Production</Button>
                    </Div>
                </Td>
            </tr>
        )
    }
}

Product.propTypes = {
    name: PropTypes.string,
    bottle: PropTypes.string,
    water: PropTypes.string,
    label: PropTypes.string,
    cases: PropTypes.string,
    date: PropTypes.string,
    spec: PropTypes.string
}
