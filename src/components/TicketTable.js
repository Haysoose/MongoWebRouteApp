import React, { Component } from 'react'
import styled from 'styled-components';
import Ticket from './Ticket';

const Select = styled.select`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #3a5896;
    font-size: 1rem;
`

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #3a5896;
    font-size: 1rem;
`

const H5 = styled.h5`
    color: black;
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

const Div = styled.div`
    text-align: center;
`

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    color: black;  
`

export default class TicketTable extends Component {
    constructor(props){
        super(props);
        this.handleCustomerClick = this.handleCustomerClick.bind(this);
        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleAllClick = this.handleAllClick.bind(this);
    }

    handleCustomerClick(event) {
        event.preventDefault();
        const newName = document.getElementById('customer');
        this.props.showTicketsByCustomer(newName.value);
    }

    handleNumberClick(event) {
        event.preventDefault();
        const newNumber = document.getElementById('number');
        this.props.showTicketsByNumber(newNumber.value);
    }

    handleAddClick(event) {
        event.preventDefault();
        const newCustomerName = document.getElementById('newCustomer');
        const newNumber = document.getElementById('qbNumber');
        const newCases = document.getElementById('ticketCases');
        const newDate = document.getElementById('ticketDate');
        this.props.addTicket(newCustomerName.value, newNumber.value, newCases.value, newDate.value);
    }

    handleAllClick(event) {
        event.preventDefault();
        this.props.showAllTickets();
    }

    render() {
        return (
            <Div>
                <Div>
                <H5>Search By Customer</H5>
                <Select name="customerSearch" id="customer">
                    <option value="Glenn Hotel">Glenn Hotel</option>
                    <option value="Watkins Funeral Home">Watkins Funeral Home</option>
                </Select>
                </Div>
                <Button onClick = {this.handleCustomerClick}>Show Tickets By Customer</Button>
                <Div>
                    <H5>Search By Quickbooks Sales Order Number</H5>
                    <Input id="number" placeholder="Quickbooks Sales Order Number"></Input>
                </Div>
                <Button onClick = {this.handleNumberClick}>Show Ticket</Button>
                <Div>
                    <H5>Add A Ticket</H5>
                    <Select name="newCustomer" id="newCustomer">
                        <option value="Glenn Hotel">Glenn Hotel</option>
                        <option value="Watkins Funeral Home">Watkins Funeral Home</option>
                    </Select>
                    <Input id="qbNumber" placeholder="Quickbooks Sales Order Number"></Input>
                    <Input id="ticketCases" placeholder="Cases"></Input>
                    <Input id="ticketDate" placeholder="Date"></Input>
                </Div>
                <Div>
                <Button onClick = {this.handleAddClick}>Add Ticket</Button>
                </Div>
            <Table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Quickbooks Sales Order Number</th>
                        <th>Cases</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.ticketData.map( value =>
                            <Ticket   key={value.ticketNumber}
                                        customer={value.customer}
                                        qbNumber={value.qbNumber} 
                                        cases={value.cases}
                                        date={value.date} />
                            )
                    }
                </tbody>
            </Table>
            <Div>
                <Button onClick = {this.handleAllClick}>Show All Tickets</Button>
            </Div>
            </Div>
        )
    }
}