import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 75%;
    height: 4vh;    
    color: white;
    background-color: #3a5896;
    text-align: center;
    border-radius: 1vh;
    font-size: 1rem;
`

export default class MainMenu extends Component {
    constructor(props){
        super(props)
        this.handleCustomerClick = this.handleCustomerClick.bind(this);
        this.handleTicketClick = this.handleTicketClick.bind(this);
        this.handleProductClick = this.handleProductClick.bind(this);
    }

    handleCustomerClick(event){
        event.preventDefault();
        this.props.allCustomersPage();
    }

    handleTicketClick(event){
        event.preventDefault();
        this.props.allTicketsPage();
    }

    handleProductClick(event){
        event.preventDefault();
        this.props.allProductsPage();
    }

    render() {
        return (
            <>
            <h3>Customers Page</h3>
            <Button onClick={this.handleCustomerClick}>Customers</Button>
            <h3>Tickets Page</h3>
            <Button onClick={this.handleTicketClick}>Tickets</Button>
            <h3>Products Page</h3>
            <Button onClick={this.handleProductClick}>Products</Button>
            </>
        )
    }
}
