import React, {Component} from 'react';
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

export default class AddTicket extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const newCustomerName = document.getElementById('newCustomer');
        const newNumber = document.getElementById('qbNumber');
        const newCases = document.getElementById('ticketCases');
        const newDate = document.getElementById('ticketDate');
        this.props.addTicket(newCustomerName.value, newNumber.value, newCases.value, newDate.value);
    }

    render(){
        return(
            <>
                <Div>
                    <H5>Add A Ticket</H5>
                    <Select name="newCustomer" id="newCustomer">
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
                    </Select>
                    <Input id="qbNumber" placeholder="Quickbooks Sales Order Number"></Input>
                    <Input id="ticketCases" placeholder="Cases"></Input>
                    <Input id="ticketDate" placeholder="MM/DD/YY"></Input>
                    <Button onClick = {this.handleClick}>Add Ticket</Button>
                </Div> </>
        )
    }
}