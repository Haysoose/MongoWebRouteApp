import React, { Component } from 'react'
import styled from 'styled-components';

const Select = styled.select`
    width: 75%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #3a5896;
    font-size: 1rem;
`

const Input = styled.input`
    width: 75%;
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
    justify-content: center;
`


export default class AddCustomer extends Component {
    constructor(props){
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleAddClick(event) {
        event.preventDefault();
        const newCustomerName = document.getElementById('name');
        const newCustomerStreet = document.getElementById("street");
        const newCustomerCity = document.getElementById("city");
        const newCustomerState = document.getElementById("state");
        const newCustomerZip = document.getElementById("zip");
        const newCustomerPhone = document.getElementById("phone");
        const newCustomerContact = document.getElementById("contact");
        const newCustomerBottle = document.getElementById("bottle");
        const newCustomerWater = document.getElementById("water");
        const newCustomerRoute = document.getElementById("newRoute");
        this.props.addCustomer(newCustomerName.value, newCustomerStreet.value, newCustomerCity.value, newCustomerState.value, newCustomerZip.value, newCustomerPhone.value, newCustomerContact.value, newCustomerBottle.value, newCustomerWater.value, newCustomerRoute.value);
    }

    render() {
        return (
            <Div>
                <H5>Add A Customer</H5>
                <Input id="name" placeholder="Name"></Input>
                <Input id="street" placeholder="Street"></Input>
                <Input id="city" placeholder="City"></Input>
                <Input id="state" placeholder="State"></Input>
                <Input id="zip" placeholder="Zip"></Input>
                <Input id="phone" placeholder="Phone"></Input>
                <Input id="contact" placeholder="Contact"></Input>
                <Select name="bottle" id="bottle">
                    <option value="8">8 oz.</option>
                    <option value="12">12 oz.</option>
                    <option value="16">16.9 oz.</option>
                    <option value="16B">16.9 oz. Bullet</option>
                </Select>
                <Select name="water" id="water">
                    <option value="RO">Purified</option>
                    <option value="Spring">Spring</option>
                </Select>
                <Select name="newRoute" id="newRoute">
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
                <Button onClick={this.handleAddClick}>Add Customer</Button>
            </Div>
        )
    }
}