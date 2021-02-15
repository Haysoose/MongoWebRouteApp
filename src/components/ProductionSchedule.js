import React, { Component } from 'react'
import styled from 'styled-components';
import Product from './Product';

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

export default class ProductionSchedule extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePrint = this.handlePrint.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        this.props.showProductionSchedule();
    }

    handlePrint(event){
        event.preventDefault();
        this.props.printProductionSchedule();
    }

    render() {
        return (
            <Div>
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
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.productionScheduleData.map( value =>
                            <Product   key={value.name}
                                        name={value.name}
                                        bottle={value.bottle}
                                        water={value.water} 
                                        label={value.label}
                                        cases={value.cases}
                                        date={value.date}
                                        spec={value.spec}
                                        />
                            )
                    }
                </tbody>
            </Table>
            <Div>
                <Button onClick={this.handleClick}>Show Production Schedule</Button>
                <Button onClick={this.handlePrint}>Print Production Schedule</Button>
            </Div>
            </Div>

        )
    }
}
