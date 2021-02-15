import React, { Component } from 'react'
import styled from 'styled-components';
import Product from './Product';

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

export default class ProductionTable extends Component {
    constructor(props){
        super(props);
        this.handleBottleClick = this.handleBottleClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleAllClick = this.handleAllClick.bind(this);
    }

    handleBottleClick(event) {
        event.preventDefault();
        const newBottle = document.getElementById('bottleSearch');
        this.props.showProductsByBottle(newBottle.value);
    }

    handleAddClick(event) {
        event.preventDefault();
        const newName = document.getElementById('productName');
        const newBottle = document.getElementById("bottleSize");
        const newWater = document.getElementById("water");
        const newLabel = document.getElementById("label");
        const newCases = document.getElementById("cases");
        const newDate = document.getElementById("date");
        const newSpec = document.getElementById("spec");
        this.props.addProduct(newName.value, newBottle.value, newWater.value, newLabel.value, newCases.value, newDate.value, newSpec.value);
    }

    handleAllClick(event) {
        event.preventDefault();
        this.props.showAllProducts();
    }

    render() {
        return (
            <Div>
                <Div>
                    <H5>Search By Bottle</H5>
                    <Select name="bottleSearch" id="bottleSearch">
                        <option value="8">8 oz.</option>
                        <option value="12">12 oz.</option>
                        <option value="16">16.9 oz.</option>
                        <option value="16B">16.9 oz. Bullet</option>
                    </Select>
                </Div>
                <Button onClick = {this.handleBottleClick}>Show Scheduled Products</Button>
                <Div>
                    <H5>Add A Product</H5>
                    <Input id="productName" placeholder="Product Name"></Input>
                    <Select name="bottleSize" id="bottleSize">
                        <option value="8">8 oz.</option>
                        <option value="12">12 oz.</option>
                        <option value="16">16.9 oz.</option>
                        <option value="16B">16.9 oz. Bullet</option>
                    </Select>
                    <Select name="water" id="water">
                        <option value="RO">Purified</option>
                        <option value="Spring">Spring</option>
                    </Select>
                    <Select name="label" id="label">
                        <option value="standard">Standard</option>
                        <option value="clear">Clear</option>
                        <option value="clear">3D</option>
                        <option value="large">3.75" Standard</option>
                        <option value="large clear">3.75" Clear</option>
                        <option value="large clear">3.75" 3D</option>
                    </Select>
                    <Input id="cases" placeholder="Number of Cases"></Input>
                    <Input id="date" placeholder="Due Date"></Input>
                    <Input id="spec" placeholder="Special Instructions"></Input>
                </Div>
                <Div>
                    <Button onClick = {this.handleAddClick}>Add Product</Button>
                </Div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Bottle Size</th>
                        <th>Water Type</th>
                        <th>Label Type</th>
                        <th>Cases</th>
                        <th>Due Date</th>
                        <th>Special Instructions</th>
                        <th>Add to Production</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.productData.map( value =>
                            <Product   key={value.name}
                                        name={value.name}
                                        bottle={value.bottle}
                                        water={value.water} 
                                        label={value.label}
                                        cases={value.cases}
                                        date={value.date}
                                        spec={value.spec}
                                        removeProduct={this.props.removeProduct}/>
                            )
                    }
                </tbody>
            </Table>
            <Div>
                <Button onClick = {this.handleAllClick} >Show All Scheduled Products</Button>
            </Div>
            </Div>
        )
    }
}
