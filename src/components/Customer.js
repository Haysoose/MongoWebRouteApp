import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid black;
    background-color: #FFFFFF;
    width: 200px;
    color: black;
`

export default class Customer extends Component {
    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.street}</Td>
                <Td>{this.props.city}</Td>
                <Td>{this.props.state}</Td>
                <Td>{this.props.zip}</Td>
                <Td>{this.props.phone}</Td>
                <Td>{this.props.contact}</Td>
                <Td>{this.props.bottle}</Td>
                <Td>{this.props.water}</Td>
                <Td>{this.props.route}</Td>
            </tr>
        )
    }
}

Customer.propTypes = {
    name: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    phone: PropTypes.string,
    contact: PropTypes.string,
    bottle: PropTypes.string,
    water: PropTypes.string,
    route: PropTypes.string,
    ticket: PropTypes.array
}