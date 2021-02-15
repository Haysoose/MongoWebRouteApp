import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid black;
    background-color: #FFFFFF;
    width: 200px;
    color: black;
`

export default class Ticket extends Component {
    render() {
        return (
            <tr>
                <Td>{this.props.customer}</Td>
                <Td>{this.props.qbNumber}</Td>
                <Td>{this.props.cases}</Td>
                <Td>{this.props.date}</Td>
            </tr>
        )
    }
}

Ticket.propTypes = {
    customer: PropTypes.string,
    qbNumber: PropTypes.string,
    cases: PropTypes.string,
    date: PropTypes.string
}