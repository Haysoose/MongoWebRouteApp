import React, { Component } from 'react'
import styled from 'styled-components';
import Customer from './Customer';

const SelectRight = styled.select`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #3a5896;
    font-size: 1rem;
    float: right;
`

const SelectLeft = styled.select`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #3a5896;
    font-size: 1rem;
    float: left;
`

const H5Left = styled.h5`
    color: black;
    float: left;
    width: 50%;
`

const H5Right = styled.h5`
    color: black;
    float: right;
    width: 50%;
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
const ButtonRight = styled.button`
    width: 50%;
    height: 4vh;
    color: white;
    background-color: #3a5896;
    text-align: center;
    border-radius: 1vh;
    font-size: 1rem;
    float: right;
`

const ButtonLeft = styled.button`
    width: 50%;
    height: 4vh;
    color: white;
    background-color: #3a5896;
    text-align: center;
    border-radius: 1vh;
    font-size: 1rem;
    float: left;
`

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
`
const Div = styled.div`
    justify-content: center;
`

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;  
    color: black;
`

export default class CustomerTable extends Component {
    constructor(props){
        super(props);
        this.handleRouteClick = this.handleRouteClick.bind(this);
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleAllClick = this.handleAllClick.bind(this);
    }

    handleRouteClick(event) {
        event.preventDefault();
        const newRoute = document.getElementById("route");
        this.props.showCustomersByRoute(newRoute.value);
    }

    handleNameClick(event) {
        event.preventDefault();
        const newName = document.getElementById("nameEdit")
        this.props.showCustomerByName(newName.value);
    }

    handleAddClick(event) {
        event.preventDefault();
        this.props.addCustomerPage();
    }

    handleEditClick(event) {
        event.preventDefault();
        this.props.editCustomerPage();
    }

    handleAllClick(event) {
        event.preventDefault();
        this.props.showAllCustomers();
    }

    render() {
        return (
            <Div>
                <Div>
                    <DivRow>
                        <ButtonLeft onClick = {this.handleAddClick}>Add A Customer </ButtonLeft>
                        <ButtonRight onClick = {this.handleEditClick}>Edit A Customer </ButtonRight>
                    </DivRow>
                    <DivRow>
                        <H5Left>Search By Name</H5Left>
                        <H5Right>Search By Route</H5Right>
                    </DivRow>
                    <DivRow>
                    <SelectLeft name="nameEdit" id="nameEdit">
                    <option value="1280 West Peachtree Partners">1280 West Peachtree</option>
                    <option value="The American Hotel">American Hotel</option>
                    <option value="Analytical Environment (P)">Analytical Environment P</option>
                    <option value="Analytical Environment (T)">Analytical Environment T</option>
                    <option value="Atlanta Athletic Club">Atlanta Athletic Club</option>
                    <option value="Atlanta History Center">Atlanta History Center</option>
                    <option value="Atlanta Life">Atlanta Life</option>
                    <option value="Beautifully You">Beautifully You</option>
                    <option value="Bold American #1">Bold American #1</option>
                    <option value="Bold American #2">Bold American #2</option>
                    <option value="Bova">Bova</option>
                    <option value="The Buckhead Club">Buckhead Club</option>
                    <option value="Buckhead Plastic Surgery">Buckhead Plastic Surgery</option>
                    <option value="Cactus Car Wash">Cactus Car Wash</option>
                    <option value="Cherokee Town And Country Club">Cherokee Town And Country Club</option>
                    <option value="Club At Longview (Q)">Club At Longview Q</option>
                    <option value="Club At Longview (U)">Club At Longview U</option>
                    <option value="Club Platinum">Club Platinum</option>
                    <option value="The Commerce Club">Commerce Club</option>
                    <option value="Dunson Dental Design">Dunson Dental Design</option>
                    <option value="Dunwoody Country Club">Dunwoody Country Club</option>
                    <option value="E 48th St Market">E 48th St Market</option>
                    <option value="Eastern National Kennesaw">Eastern National Kennesaw</option>
                    <option value="Eastern National MLK">Eastern National MLK</option>
                    <option value="Easy Rental">Easy Rental</option>
                    <option value="The Georgian Terrace (R)">Georgian Terrace R</option>
                    <option value="The Georgian Terrace (V)">Georgian Terrace V</option>
                    <option value="Glenn Hotel (P)">Glenn Hotel P</option>
                    <option value="Glenn Hotel (T)">Glenn Hotel T</option>
                    <option value="Goldstein Dental">Goldstein Dental</option>
                    <option value="Golf Club of Tennessee">Golf Club of Tennessee</option>
                    <option value="Guffey's Cleaners (R)">Guffey's Cleaners R</option>
                    <option value="Guffey's Cleaners (V)">Guffey's Cleaners V</option>
                    <option value="Guffey's Store (R)">Guffey's Store R</option>
                    <option value="Guffey's Store (V)">Guffey's Store V</option>
                    <option value="Henri's Bakery Buckhead">Henri's Bakery Buckhead</option>
                    <option value="Henri's Bakery Marietta">Henri's Bakery Marietta</option>
                    <option value="Herni's Midtown">Herni's Midtown</option>
                    <option value="Henri's Bakery Sandy Springs">Henri's Bakery Sandy Springs</option>
                    <option value="Hotel Ballast">Hotel Ballast</option>
                    <option value="Istanblu">Istanblu</option>
                    <option value="Johnson And Freeman LLC">Johnson And Freeman LLC</option>
                    <option value="Le Meridien">Le Meridien</option>
                    <option value="Mall of Georgia Mazda">Mall of Georgia Mazda</option>
                    <option value="Mall of Georgia Mini">Mall of Georgia Mini</option>
                    <option value="Muss And Turner's">Muss And Turner's</option>
                    <option value="Dr Peter A Pate, DDS">Peter Pate DDS</option>
                    <option value="Pure Atlanta">Pure Atlanta</option>
                    <option value="RBM of Alpharetta">RBM of Alpharetta</option>
                    <option value="RBM of Atlanta">RBM of Atlanta</option>
                    <option value="Riverclub Golf">Riverclub Golf</option>
                    <option value="Roswell Provisions">Roswell Provisions</option>
                    <option value="Savory Gourmet">Savory Gourmet</option>
                    <option value="Scottsdale Farms">Scottsdale Farms</option>
                    <option value="Souper Jenny Brookhaven">Souper Jenny Brookhaven</option>
                    <option value="Souper Jenny Buckhead">Souper Jenny Buckhead</option>
                    <option value="Souper Jenny Decatur">Souper Jenny Decatur</option>
                    <option value="Souper Jenny Roswell">Souper Jenny Roswell</option>
                    <option value="Souper Jenny West Side">Souper Jenny West Side</option>
                    <option value="Spinal Check Foundation">Spinal Check Foundation</option>
                    <option value="St. Ive's Country Club">St. Ive's Country Club</option>
                    <option value="St. Marlo Country Club">St. Marlo Country Club</option>
                    <option value="Summit Chase Country Club">Summit Chase Country Club</option>
                    <option value="Sun In My Belly (P)">Sun In My Belly P</option>
                    <option value="Sun In My Belly (T)">Sun In My Belly T</option>
                    <option value="Watkins Funeral Home">Watkins Funeral Home</option>
                    <option value="Winship Cancer Institute">Winship Cancer Institute</option>
                    <option value="Woodstock Furniture Acworth">Woodstock Furniture Acworth</option>
                    <option value="Woodstock Furniture Hiram">Woodstock Furniture Hiram</option>
                    <option value="Worthmore Jewelers Atlanta">Worthmore Jewelers Atlanta</option>
                    <option value="Worthmore Jewelers Decatur">Worthmore Jewelers Decatur</option>
                </SelectLeft>
                        <SelectRight name="route" id="route">
                            <option value="P">P Route</option>
                            <option value="Q">Q Route</option>
                            <option value="R">R Route</option>
                            <option value="S">S Route</option>
                            <option value="T">T Route</option>
                            <option value="U">U Route</option>
                            <option value="V">V Route</option>
                            <option value="W">W Route</option>
                            <option value="Freight">Freight</option>
                        </SelectRight>
                    </DivRow>
                    <DivRow>
                        <ButtonLeft onClick = {this.handleNameClick}>Show Customers By Name</ButtonLeft>
                        <ButtonRight onClick = {this.handleRouteClick}>Show Customers By Route</ButtonRight>
                    </DivRow>
                </Div>
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
                            <Customer   key={value.name}
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
                                        viewCustomer={this.props.viewCustomer}
                                        />
                            )
                    }
                </tbody>
            </Table>
            <Div>
                <Button onClick = {this.handleAllClick}>Show All Customers</Button>
            </Div>
            </Div>
        )
    }
}
