import React, { Component } from 'react';
import styled from 'styled-components';
import Customer from './Customer';
import Ticket from './Ticket';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;  
    color: black;
`

const H5 = styled.h5`
    color: black;
    width: 50%;
`

export default class ViewCustomer extends Component {
    render() {
        return (
            <>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Phone Number</th>
                        <th>Contact</th>
                        <th>Bottle Size</th>
                        <th>Water Type</th>
                        <th>Route</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.props.customerData.map( value =>
                        <Customer key={value.name}
                                name={value.name}
                                street={value.street}
                                city={value.city}
                                state={value.state}
                                zip={value.zip}
                                phone={value.phone}
                                contact={value.contact}
                                bottle={value.bottle}
                                water={value.water}
                                route={value.route} 
                                />
                        )
                    }
                </tbody>
            </Table>
            <H5>Tickets</H5>
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
                </>
                
        )
    }
}
