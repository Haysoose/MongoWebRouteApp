import './App.css';
import React, {Component} from 'react';
import CustomerTable from './components/CustomerTable';
import TicketTable from './components/TicketTable';
import ProductionTable from './components/ProductionTable';
import ProductionSchedule from './components/ProductionSchedule';
import print from 'print-js';
import * as Realm from "realm-web";
import MainMenu from './components/MainMenu';
import HomeButton from './components/HomeButton';
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
import ViewCustomer from './components/ViewCustomer';
import AddTicket from './components/AddTicket';
import EditTicket from './components/EditTicket';
import PrintRoute from './components/PrintRoute';
import GlennHotelBOL from './bols/GlennHotelBOL.jpg';
import SunInMyBellyBOL from './bols/SunInMyBellyBOL.jpg';
import EasternNationalMLKBOL from './bols/EasternNationalMLKBOL.jpg';
import AmericanHotelBOL from './bols/AmericanHotelBOL.jpg';
import CommerceClubBOL from './bols/CommerceClubBOL.jpg';
import WestPeachtreeBOL from './bols/1280WestPeachtreeBOL.jpg';
import AnalyticalEnvironmentBOL from './bols/AnalyticalEnvironmentBOL.jpg';
import HotelBallastBOL from './bols/HotelBallastBOL.jpg';
import ClubPlatinumBOL from './bols/ClubPlatinumBOL.jpg';
import AtlantaAthleticClubBOL from './bols/AtlantaAthleticClubBOL.jpg';
import SummitChaseBOL from './bols/SummitChaseBOL.jpg';
import StMarloBOL from './bols/StMarloBOL.jpg';
import StIvesBOL from './bols/StIvesBOL.jpg';
import BovaBOL from './bols/BovaBOL.jpg';
import ClubAtLongviewBOL from './bols/ClubAtLongviewBOL.jpg';
import GolfClubTNBOL from './bols/GolfClubTNBOL.jpg';
import GuffeysStoreBOL from './bols/GuffeysStoreBOL.jpg';
import GuffeysCleanersBOL from './bols/GuffeysCleanersBOL.jpg';
import GeorgianTerraceBOL from './bols/GeorgianTerraceBOL.jpg';
import BuckheadClubBOL from './bols/BuckheadClubBOL.jpg';
import SouperJennyBuckheadBOL from './bols/SouperJennyBuckheadBOL.jpg';
import HenrisBuckheadBOL from './bols/HenrisBuckheadBOL.jpg';
import WorthmoreJewelersAtlantaBOL from './bols/WorthmoreJewelersAtlantaBOL.jpg';
import PureAtlantaBOL from './bols/PureAtlantaBOL.jpg';
import WorthmoreJewelersDecaturBOL from './bols/WorthmoreJewelersDecaturBOL.jpg';
import RBMofAtlantaBOL from './bols/RBMofAtlantaBOL.jpg';
import HenrisMariettaBOL from './bols/HenrisMariettaBOL.jpg';
import WoodstockFurnitureAcworthBOL from './bols/WoodstockFurnitureAcworthBOL.jpg';
import WoodstockFurnitureHiramBOL from './bols/WoodstockFurnitureHiramBOL.jpg';
import EasternNationalKennesawBOL from './bols/EasternNationalKennesawBOL.jpg';
import MussAndTurnersBOL from './bols/MussAndTurnersBOL.jpg';
import SpinalCheckBOL from './bols/SpinalCheckBOL.jpg';
import WatkinsFuneralBOL from './bols/WatkinsFuneralBOL.jpg';
import AtlantaLifeBOL from './bols/AtlantaLifeBOL.jpg';
import HenrisMidtownBOL from './bols/HenrisMidtownBOL.jpg';
import SouperJennyWestSideBOL from './bols/SouperJennyWestSideBOL.jpg';
import JohnsonFreemanBOL from './bols/JohnsonFreemanBOL.jpg';
import BoldAmerican1BOL from './bols/BoldAmerican1BOL.jpg';
import BoldAmerican2BOL from './bols/BoldAmerican2BOL.jpg';
import EasyRentalBOL from './bols/EasyRentalBOL.jpg';
import BeautifullyYouBOL from './bols/BeautifullyYouBOL.jpg';
import RBMofAlpharettaBOL from './bols/RBMofAlpharettaBOL.jpg';
import ScottsdaleFarmsBOL from './bols/ScottsdaleFarmsBOL.jpg';
import SavoryGourmetBOL from './bols/SavoryGourmetBOL.jpg';
import CactusCarWashBOL from './bols/CactusCarWashBOL.jpg';
import SouperJennyRoswellBOL from './bols/SouperJennyRoswellBOL.jpg';
import CherokeeTownAndCCBOL from './bols/CherokeeTownAndCCBOL.jpg';
import RoswellProvisionsBOL from './bols/RoswellProvisionsBOL.jpg';
import WinshipBOL from './bols/WinshipBOL.jpg';
import GoldsteinDentalBOL from './bols/GoldsteinDentalBOL.jpg';
import LeMeridienBOL from './bols/LeMeridienBOL.jpg';
import DunwoodyCCBOL from './bols/DunwoodyCCBOL.jpg';
import IstanbluBOL from './bols/IstanbluBOL.jpg';
import SouperJennyBrookhavenBOL from './bols/SouperJennyBrookhavenBOL.jpg';
import SouperJennyDecaturBOL from './bols/SouperJennyDecaturBOL.jpg';
import HenrisSandySpringsBOL from './bols/HenrisSandySpringsBOL.jpg';
import PateDDSBOL from './bols/PateDDSBOL.jpg';
import AtlantaHistoryCenterBOL from './bols/AtlantaHistoryCenterBOL.jpg';
import E48thStBOL from './bols/E48thStBOL.jpg';
import DunsonDentalBOL from './bols/DunsonDentalBOL.jpg';
import BuckheadPlasticSurgeryBOL from './bols/BuckheadPlasticSurgeryBOL.jpg';
import MallOfGAMazdaBOL from './bols/MallOfGAMazdaBOL.jpg';
import MallOfGAMiniBOL from './bols/MallOfGAMiniBOL.jpg';
import RiverClubGolfBOL from './bols/RiverClubGolfBOL.jpg';
import printJS from 'print-js';

const apiKey = '83y9sgdnxlWvoWEkd22CtM6YNRRyFjjdOfH0YYZMJSkIlw4drBKLB8EaXNS4XrWU';
const REALM_APP_ID = "route-app-dmxam"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

async function loginApiKey() {
  // Create an API Key credential
  const credentials = Realm.Credentials.apiKey(apiKey);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    if(user.id === app.currentUser.id){
    console.log(user);
    }
    return user
  } catch(err) {
    console.error("Failed to log in", err);
  }
};
loginApiKey("To0SQOPC...ZOU0xUYvWw").then(user => {
  console.log("Successfully logged in!", user)
});

const mongodb = app.currentUser.mongoClient("mongodb-atlas");
const customers = mongodb.db("Route").collection("Customers");
const tickets = mongodb.db("Route").collection("Tickets");
const products = mongodb.db("Route").collection("Production");
const productionSchedule = mongodb.db("Route").collection("ProductionSchedule");


class App extends Component {
  constructor(props){
    super(props);
    this.showCustomersByRoute = this.showCustomersByRoute.bind(this);
    this.showCustomerByName = this.showCustomerByName.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
    this.editCustomer = this.editCustomer.bind(this);
    this.viewCustomer = this.viewCustomer.bind(this);
    this.showAllCustomers = this.showAllCustomers.bind(this);
    this.showTicketsByCustomer = this.showTicketsByCustomer.bind(this);
    this.showTicketsByNumber = this.showTicketsByNumber.bind(this);
    this.showTicketsByDate = this.showTicketsByDate.bind(this);
    this.addTicket = this.addTicket.bind(this);
    this.editTicket = this.editTicket.bind(this);
    this.showAllTickets = this.showAllTickets.bind(this);
    this.printTickets = this.printTickets.bind(this);
    this.deleteTicket = this.deleteTicket.bind(this);
    this.showProductsByBottle = this.showProductsByBottle.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.showAllProducts = this.showAllProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.showProductionSchedule = this.showProductionSchedule.bind(this);
    this.printProductionSchedule = this.printProductionSchedule.bind(this);
    this.allCustomersPage = this.allCustomersPage.bind(this);
    this.addCustomerPage = this.addCustomerPage.bind(this);
    this.editCustomerPage = this.editCustomerPage.bind(this);
    this.allTicketsPage = this.allTicketsPage.bind(this);
    this.allProductsPage = this.allProductsPage.bind(this);
    this.homePage = this.homePage.bind(this);
    this.addTicketPage = this.addTicketPage.bind(this);
    this.editTicketPage = this.editTicketPage.bind(this);
    this.printRoutePage = this.printRoutePage.bind(this);
    this.state = {
      page: 'home',
      user:[app.currentUser],
      customerData:[],
      ticketData:[],
      productData:[],
      productionScheduleData: [],
    }
  }

  async showCustomersByRoute(_route){
    const routeCustomers = await customers.find({route: _route});
    const newCustomerData = await routeCustomers.map(function(values){
      return(
        {...values}
      )
    });
    this.setState({customerData: newCustomerData});

  }

  async showCustomerByName(_name){
    const customerName = await customers.find({name: _name});
    const newCustomerData = await customerName.map(function(values){
      return(
        {...values}
      )
    });
    this.setState({customerData: newCustomerData});

  }

  async addCustomer(_name, _street, _city, _state, _zip, _phone, _contact, _bottle, _water, _route){
    await customers.insertOne({
      name: _name,
      street: _street,
      city: _city,
      state: _state,
      zip: _zip,
      phone: _phone,
      contact: _contact,
      bottle: _bottle,
      water: _water,
      route: _route
    });
      alert("New Customer '"+_name+"' Added");
    }

    async editCustomer(_oldName, _name, _street, _city, _state, _zip, _phone, _contact){
      const oldCustData = await customers.findOne({name: _oldName});
      if(_name === ""){
        _name = oldCustData.name;
      }
      if(_street === ""){
        _street = oldCustData.street;
      }
      if(_city === ""){
        _city = oldCustData.city;
      }
      if( _state === ""){
        _state = oldCustData.state;
      }
      if(_zip === ""){
        _zip = oldCustData.zip;
      }
      if(_phone === ""){
        _phone = oldCustData.phone;
      }
      if(_contact === ""){
        _contact = oldCustData.contact;
      }

      const update = {"$set": {name: _name, street: _street, city: _city, state: _state, zip: _zip, phone: _phone, contact: _contact}};
      await customers.updateOne({name: _oldName}, update, {"upsert": false});
      alert("Customer Updated");
    }

    async viewCustomer(_name){
      this.showCustomerByName(_name)
      this.showTicketsByCustomer(_name);
      this.setState({page: 'viewCustomer'});
    }

    async showAllCustomers(){
      const allCustomers = await customers.find();
      const newCustomerData = await allCustomers.map(function(values){
        return(
          {...values}
        )
      });
      this.setState({customerData: newCustomerData});
  
    }

    async showTicketsByCustomer(_name){
      var ticketsByCustomer = [{}];
      var ticketsByCustomer2 = [{}];
      var ticketsByCustomer3 = [{}];
      var ticketsByCustomer4 = [{}];
      var i = 0;
      if(_name === "Analytical Environment (P)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Analytical Environment (T)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "Analytical Environment (T)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Analytical Environment (P)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "Club At Longview (Q)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Club At Longview (U)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "Club At Longview (U)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Club At Longview (Q)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "The Georgian Terrace (R)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "The Georgian Terrace (V)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "The Georgian Terrace (V)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "The Georgian Terrace (R)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "Glenn Hotel (P)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Glenn Hotel (T)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "Glenn Hotel (T)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Glenn Hotel (P)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "Guffey's Cleaners (R)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Guffey's Cleaners (V)"});
        ticketsByCustomer3 = await tickets.find({customer: "Guffey's Store (R)"});
        ticketsByCustomer4 = await tickets.find({customer: "Guffey's Store (V)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
        i=0;
        while(i < ticketsByCustomer3.length){
          ticketsByCustomer.push(ticketsByCustomer3[i]);
          i++;
        }
        i=0;
        while(i < ticketsByCustomer4.length){
          ticketsByCustomer.push(ticketsByCustomer4[i]);
          i++;
        }
      }
      else if(_name === "Guffey's Cleaners (V)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Guffey's Cleaners (R)"});
        ticketsByCustomer3 = await tickets.find({customer: "Guffey's Store (R)"});
        ticketsByCustomer4 = await tickets.find({customer: "Guffey's Store (V)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
        i=0;
        while(i < ticketsByCustomer3.length){
          ticketsByCustomer.push(ticketsByCustomer3[i]);
          i++;
        }
        i=0;
        while(i < ticketsByCustomer4.length){
          ticketsByCustomer.push(ticketsByCustomer4[i]);
          i++;
        }
      }
      else if(_name === "Guffey's Store (R)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Guffey's Cleaners (R)"});
        ticketsByCustomer3 = await tickets.find({customer: "Guffey's Cleaners (V)"});
        ticketsByCustomer4 = await tickets.find({customer: "Guffey's Store (V)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
        i=0;
        while(i < ticketsByCustomer3.length){
          ticketsByCustomer.push(ticketsByCustomer3[i]);
          i++;
        }
        i=0;
        while(i < ticketsByCustomer4.length){
          ticketsByCustomer.push(ticketsByCustomer4[i]);
          i++;
        }
      }
      else if(_name === "Guffey's Store (V)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Guffey's Cleaners (R)"});
        ticketsByCustomer3 = await tickets.find({customer: "Guffey's Cleaners (V)"});
        ticketsByCustomer4 = await tickets.find({customer: "Guffey's Store (R)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
        i=0;
        while(i < ticketsByCustomer3.length){
          ticketsByCustomer.push(ticketsByCustomer3[i]);
          i++;
        }
        i=0;
        while(i < ticketsByCustomer4.length){
          ticketsByCustomer.push(ticketsByCustomer4[i]);
          i++;
        }
      }
      else if(_name === "Sun In My Belly (P)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Sun In My Belly (T)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else if(_name === "Sun In My Belly (T)"){
        ticketsByCustomer = await tickets.find({customer: _name});
        ticketsByCustomer2 = await tickets.find({customer: "Sun In My Belly (P)"});
        while(i < ticketsByCustomer2.length){
          ticketsByCustomer.push(ticketsByCustomer2[i]);
          i++;
        }
      }
      else{
      ticketsByCustomer = await tickets.find({customer: _name});
      }
      const newTicketData = await ticketsByCustomer.map(function(values){
        return(
          {...values}
        )
      });
      this.setState({ticketData: newTicketData});
    
    }

    async showTicketsByNumber(_number){
      const ticketsByNumber = await tickets.find({qbNumber: _number});
      const newTicketData = await ticketsByNumber.map(function(values){
        return(
          {...values}
        )
      });
      this.setState({ticketData: newTicketData});

    }

    async showTicketsByDate(_date){
      const ticketDate = await tickets.find({date: _date});
      const newTicketData = await ticketDate.map(function(values){
        return(
          {...values}
        )
      });
      this.setState({ticketData: newTicketData});
  
    }

    async addTicket(_customer, _number, _cases, _date){
      if(_date.length !== 8 || _date.charAt(2) !== "/" || _date.charAt(5) !== "/"){
        alert("Date Format Must Be MM/DD/YY");
        return;
      }
      await tickets.insertOne({
        customer: _customer,
        qbNumber: _number,
        cases: _cases,
        date: _date
      });
      if(_customer === "1280 West Peachtree Partners"){
        printJS({printable: WestPeachtreeBOL, type: 'image'});
      }
      else if(_customer === "The American Hotel"){
        printJS({printable: AmericanHotelBOL, type: 'image'});
      }
      else if(_customer === "Analytical Environment (P)" || _customer === "Analytical Environment (T)"){
        printJS({printable: AnalyticalEnvironmentBOL, type: 'image'});
      }
      else if(_customer === "Atlanta Athletic Club"){
        printJS({printable: AtlantaAthleticClubBOL, type: 'image'});
      }
      else if(_customer === "Atlanta History Center"){
        printJS({printable: AtlantaHistoryCenterBOL, type: 'image'});
      }
      else if(_customer === "Atlanta Life"){
        printJS({printable: AtlantaLifeBOL, type: 'image'});
      }
      else if(_customer === "Beautifully You"){
        printJS({printable: BeautifullyYouBOL, type: 'image'});
      }
      else if(_customer === "Bold American #1"){
        printJS({printable: BoldAmerican1BOL, type: 'image'});
      }
      else if(_customer === "Bold American #2"){
        printJS({printable: BoldAmerican2BOL, type: 'image'});
      }
      else if(_customer === "Bova"){
        printJS({printable: BovaBOL, type: 'image'});
      }
      else if(_customer === "The Buckhead Club"){
        printJS({printable: BuckheadClubBOL, type: 'image'});
      }
      else if(_customer === "Buckhead Plastic Surgery"){
        printJS({printable: BuckheadPlasticSurgeryBOL, type: 'image'});
      }
      else if(_customer === "Cactus Car Wash"){
        printJS({printable: CactusCarWashBOL, type: 'image'});
      }
      else if(_customer === "Cherokee Town And Country Club"){
        printJS({printable: CherokeeTownAndCCBOL, type: 'image'});
      }
      else if(_customer === "Club At Longview (Q)" || _customer === "Club At Longview (U)"){
        printJS({printable: ClubAtLongviewBOL, type: 'image'});
      }
      else if(_customer === "Club Platinum"){
        printJS({printable: ClubPlatinumBOL, type: 'image'});
      }
      else if(_customer === "The Commerce Club"){
        printJS({printable: CommerceClubBOL, type: 'image'});
      }
      else if(_customer === "Dunson Dental Design"){
        printJS({printable: DunsonDentalBOL, type: 'image'});
      }
      else if(_customer === "Dunwoody Country Club"){
        printJS({printable: DunwoodyCCBOL, type: 'image'});
      }
      else if(_customer === "E 48th St Market"){
        printJS({printable: E48thStBOL, type: 'image'});
      }
      else if(_customer === "Eastern National Kennesaw"){
        printJS({printable: EasternNationalKennesawBOL, type: 'image'});
      }
      else if(_customer === "Eastern National MLK"){
        printJS({printable: EasternNationalMLKBOL, type: 'image'});
      }
      else if(_customer === "Easy Rental"){
        printJS({printable: EasyRentalBOL, type: 'image'});
      }
      else if(_customer === "The Georgian Terrace (R)" || _customer === "The Georgian Terrace (V)"){
        printJS({printable: GeorgianTerraceBOL, type: 'image'});
      }
      else if(_customer === "Glenn Hotel (P)" || _customer === "Glenn Hotel (T)"){
        printJS({printable: GlennHotelBOL, type: 'image'});
      }
      else if(_customer === "Goldstein Dental"){
        printJS({printable: GoldsteinDentalBOL, type: 'image'});
      }
      else if(_customer === "Golf Club of Tennessee"){
        printJS({printable: GolfClubTNBOL, type: 'image'});
      }
      else if(_customer === "Guffey's Cleaners (R)" || _customer === "Guffey's Cleaners (V)"){
        printJS({printable: GuffeysCleanersBOL, type: 'image'});
      }
      else if(_customer === "Guffey's Store (R)" || _customer === "Guffey's Store (V)"){
        printJS({printable: GuffeysStoreBOL, type: 'image'});
      }
      else if(_customer === "Henri's Bakery Buckhead"){
        printJS({printable: HenrisBuckheadBOL, type: 'image'});
      }
      else if(_customer === "Henri's Bakery Marietta"){
        printJS({printable: HenrisMariettaBOL, type: 'image'});
      }
      else if(_customer === "Herni's Midtown"){
        printJS({printable: HenrisMidtownBOL, type: 'image'});
      }
      else if(_customer === "Henri's Bakery Sandy Springs"){
        printJS({printable: HenrisSandySpringsBOL, type: 'image'});
      }
      else if(_customer === "Hotel Ballast"){
        printJS({printable: HotelBallastBOL, type: 'image'});
      }
      else if(_customer === "Istanblu"){
        printJS({printable: IstanbluBOL, type: 'image'});
      }
      else if(_customer === "Johnson And Freeman LLC"){
        printJS({printable: JohnsonFreemanBOL, type: 'image'});
      }
      else if(_customer === "Le Meridien"){
        printJS({printable: LeMeridienBOL, type: 'image'});
      }
      else if(_customer === "Mall of Georgia Mazda"){
        printJS({printable: MallOfGAMazdaBOL, type: 'image'});
      }
      else if(_customer === "Mall of Georgia Mini"){
        printJS({printable: MallOfGAMiniBOL, type: 'image'});
      }
      else if(_customer === "Muss And Turner's"){
        printJS({printable: MussAndTurnersBOL, type: 'image'});
      }
      else if(_customer === "Dr Peter A Pate, DDS"){
        printJS({printable: PateDDSBOL, type: 'image'});
      }
      else if(_customer === "Pure Atlanta"){
        printJS({printable: PureAtlantaBOL, type: 'image'});
      }
      else if(_customer === "RBM of Alpharetta"){
        printJS({printable: RBMofAlpharettaBOL, type: 'image'});
      }
      else if(_customer === "RBM of Atlanta"){
        printJS({printable: RBMofAtlantaBOL, type: 'image'});
      }
      else if(_customer === "Riverclub Golf"){
        printJS({printable: RiverClubGolfBOL, type: 'image'});
      }
      else if(_customer === "Roswell Provisions"){
        printJS({printable: RoswellProvisionsBOL, type: 'image'});
      }
      else if(_customer === "Savory Gourmet"){
        printJS({printable: SavoryGourmetBOL, type: 'image'});
      }
      else if(_customer === "Scottsdale Farms"){
        printJS({printable: ScottsdaleFarmsBOL, type: 'image'});
      }
      else if(_customer === "Souper Jenny Brookhaven"){
        printJS({printable: SouperJennyBrookhavenBOL, type: 'image'});
      }
      else if(_customer === "Souper Jenny Buckhead"){
        printJS({printable: SouperJennyBuckheadBOL, type: 'image'});
      }
      else if(_customer === "Souper Jenny Decatur"){
        printJS({printable: SouperJennyDecaturBOL, type: 'image'});
      }
      else if(_customer === "Souper Jenny Roswell"){
        printJS({printable: SouperJennyRoswellBOL, type: 'image'});
      }
      else if(_customer === "Souper Jenny West Side"){
        printJS({printable: SouperJennyWestSideBOL, type: 'image'});
      }
      else if(_customer === "Spinal Check Foundation"){
        printJS({printable: SpinalCheckBOL, type: 'image'});
      }
      else if(_customer === "St. Ive's Country Club"){
        printJS({printable: StIvesBOL, type: 'image'});
      }
      else if(_customer === "St. Marlo Country Club"){
        printJS({printable: StMarloBOL, type: 'image'});
      }
      else if(_customer === "Summit Chase Country Club"){
        printJS({printable: SummitChaseBOL, type: 'image'});
      }
      else if(_customer === "Sun In My Belly (P)" || _customer === "Sun In My Belly (T)"){
        printJS({printable: SummitChaseBOL, type: 'image'});
      }
      else if(_customer === "Watkins Funeral Home"){
        printJS({printable: WatkinsFuneralBOL, type: 'image'});
      }
      else if(_customer === "Winship Cancer Institute"){
        printJS({printable: WinshipBOL, type: 'image'});
      }
      else if(_customer === "Woodstock Furniture Acworth"){
        printJS({printable: WoodstockFurnitureAcworthBOL, type: 'image'});
      }
      else if(_customer === "Woodstock Furniture Hiram"){
        printJS({printable: WoodstockFurnitureHiramBOL, type: 'image'});
      }
      else if(_customer === "Worthmore Jewelers Atlanta"){
        printJS({printable: WorthmoreJewelersAtlantaBOL, type: 'image'});
      }
      else if(_customer === "Worthmore Jewelers Decatur"){
        print({printable: WorthmoreJewelersDecaturBOL, type: 'image'});
      }
      else{
        alert("Customer Selection Error");
      }

    }

    async deleteTicket(_customer, _date){
      await tickets.deleteOne({"customer": _customer, "date": _date});
      //await tickets.deleteMany({"date": "02/20/21"});
      alert("Ticket Deleted");
    }

    async addRouteTickets(_customer, _number, _cases, _date){
      await tickets.insertOne({
        customer: _customer,
        qbNumber: _number,
        cases: _cases,
        date: _date
      });
    }

    async showAllTickets(){
      const allTickets = await tickets.find();
      const newTicketData = await allTickets.map(function(values){
        return(
          {...values}
        )
      });
      this.setState({ticketData: newTicketData});

    }

    async editTicket(_name, _date, _number, _cases){
      const oldCustData = await tickets.findOne({customer: _name, date: _date});
      if(_number === ""){
        _number = oldCustData.qbNumber;
      }
      if(_cases === ""){
        _cases = oldCustData.cases;
      }

      const update = {"$set": {customer: _name, qbNumber: _number, cases: _cases, date: _date}};
      await tickets.updateOne({customer: _name, date: _date}, update, {"upsert": false});
      alert("Ticket Updated");
    }

    async printTickets(_route, _date){
      if(_date.length !== 8 || _date.charAt(2) !== "/" || _date.charAt(5) !== "/"){
        alert("Date Format Must Be MM/DD/YY");
        return;
      }
      else{
            const routeCustData = await customers.find({route: _route});
            var i = 0;
            while(i < routeCustData.length){
            var custName = routeCustData[i].name;
            this.addRouteTickets(custName, "", "", _date);
            i++;
            }
            if(_route === "P"){
              printJS({printable: [GlennHotelBOL, GlennHotelBOL, SunInMyBellyBOL, SunInMyBellyBOL, EasternNationalMLKBOL, EasternNationalMLKBOL, AmericanHotelBOL, AmericanHotelBOL, CommerceClubBOL, CommerceClubBOL, WestPeachtreeBOL, WestPeachtreeBOL, AnalyticalEnvironmentBOL, AnalyticalEnvironmentBOL, HotelBallastBOL, HotelBallastBOL, ClubPlatinumBOL, ClubPlatinumBOL], type: 'image'});
            }
            else if(_route === "Q"){
              printJS({printable: [AtlantaAthleticClubBOL, AtlantaAthleticClubBOL, SummitChaseBOL, SummitChaseBOL, StMarloBOL, StMarloBOL, StIvesBOL, StIvesBOL, BovaBOL, BovaBOL, ClubAtLongviewBOL, ClubAtLongviewBOL, GolfClubTNBOL, GolfClubTNBOL], type: 'image'});
            }
            else if(_route === "R"){
              printJS({printable: [GuffeysStoreBOL, GuffeysStoreBOL, GuffeysCleanersBOL, GuffeysCleanersBOL, GeorgianTerraceBOL, GeorgianTerraceBOL, BuckheadClubBOL, BuckheadClubBOL, SouperJennyBuckheadBOL, SouperJennyBuckheadBOL, HenrisBuckheadBOL, HenrisBuckheadBOL, WorthmoreJewelersAtlantaBOL, WorthmoreJewelersAtlantaBOL, PureAtlantaBOL, PureAtlantaBOL, WorthmoreJewelersDecaturBOL, WorthmoreJewelersDecaturBOL], type: 'image'});
            }
            else if(_route === "S"){
              printJS({printable: [RBMofAtlantaBOL, RBMofAtlantaBOL, HenrisMariettaBOL, HenrisMariettaBOL, WoodstockFurnitureAcworthBOL, WoodstockFurnitureAcworthBOL, WoodstockFurnitureHiramBOL, WoodstockFurnitureHiramBOL, EasternNationalKennesawBOL, EasternNationalKennesawBOL, MussAndTurnersBOL, MussAndTurnersBOL, SpinalCheckBOL, SpinalCheckBOL], type: 'image'});
            }
            else if(_route === "T"){
              printJS({printable: [GlennHotelBOL, GlennHotelBOL, WatkinsFuneralBOL, WatkinsFuneralBOL, AtlantaLifeBOL, AtlantaLifeBOL, SunInMyBellyBOL, SunInMyBellyBOL, HenrisMidtownBOL, HenrisMidtownBOL, SouperJennyWestSideBOL, SouperJennyWestSideBOL, JohnsonFreemanBOL, JohnsonFreemanBOL, BoldAmerican1BOL, BoldAmerican1BOL, BoldAmerican2BOL, BoldAmerican2BOL, AnalyticalEnvironmentBOL, AnalyticalEnvironmentBOL, EasyRentalBOL, EasyRentalBOL, BeautifullyYouBOL, BeautifullyYouBOL], type: 'image'});
            }
            else if (_route === "U"){
              printJS({printable: [RBMofAlpharettaBOL, RBMofAlpharettaBOL, ScottsdaleFarmsBOL, ScottsdaleFarmsBOL, SavoryGourmetBOL, SavoryGourmetBOL, SouperJennyRoswellBOL, SouperJennyRoswellBOL, CactusCarWashBOL, CactusCarWashBOL, CherokeeTownAndCCBOL, CherokeeTownAndCCBOL, RoswellProvisionsBOL, RoswellProvisionsBOL, ClubAtLongviewBOL, ClubAtLongviewBOL], type: 'image'});
            }
            else if(_route === "V"){
              printJS({printable: [GuffeysStoreBOL, GuffeysStoreBOL, GuffeysCleanersBOL, GuffeysCleanersBOL, WinshipBOL, WinshipBOL, GeorgianTerraceBOL, GeorgianTerraceBOL, GoldsteinDentalBOL, GoldsteinDentalBOL, LeMeridienBOL, LeMeridienBOL, DunwoodyCCBOL, DunwoodyCCBOL, IstanbluBOL, IstanbluBOL, SouperJennyBrookhavenBOL, SouperJennyBrookhavenBOL, SouperJennyDecaturBOL, SouperJennyDecaturBOL, HenrisSandySpringsBOL, HenrisSandySpringsBOL, PateDDSBOL, PateDDSBOL, AtlantaHistoryCenterBOL, AtlantaHistoryCenterBOL, E48thStBOL, E48thStBOL, DunsonDentalBOL, DunsonDentalBOL, BuckheadPlasticSurgeryBOL, BuckheadPlasticSurgeryBOL], type: 'image'});
            }
            else if(_route === "W"){
              printJS({printable: [MallOfGAMazdaBOL, MallOfGAMazdaBOL, MallOfGAMiniBOL, MallOfGAMiniBOL, RiverClubGolfBOL, RiverClubGolfBOL], type: 'image'});
            }
            else{
              alert("Route Selection Error");
            }
          }
    }

    async showProductsByBottle(_bottle){
      const productsByBottle = await products.find({bottle: _bottle});
      const newProductData = await productsByBottle.map(function(values){
        return(
          {...values}
        )
      });
      this.setState({productData: newProductData});
    
    }

    async addProduct(_name, _bottle, _water, _label, _cases, _date, _spec){
      if(_spec === ""){
        _spec ="none";
      }
      await products.insertOne({
      name: _name,
      bottle: _bottle,
      water: _water,
      label: _label,
      cases: _cases,
      date: _date,
      spec: _spec,
    });
      alert("New Product '" + _name + "' Added");
    }

    async showAllProducts(){
      const allProducts = await products.find();
      const newProductData = await allProducts.map(function(values){
        return(
          {...values}
        )
      });
      this.setState({productData: newProductData});

    }

    async removeProduct(_name, _bottle, _water, _label, _cases, _date, _spec){
      await products.deleteOne({name: _name});
      await productionSchedule.insertOne({
        name: _name,
        bottle: _bottle,
        water: _water,
        label: _label,
        cases: _cases,
        date: _date,
        spec: _spec,
      });
      alert("Item '" + _name + "' Added To Production Schedule");
    }

    async showProductionSchedule(){
      const allProducts = await productionSchedule.find();
      const newProductionScheduleData = await allProducts.map(function(values){
        return(
          {...values}
        )
      });
      this.setState({productionScheduleData: newProductionScheduleData});
    }

    async printProductionSchedule(){
      const allProducts = await productionSchedule.find();
      const newProductionScheduleData = await allProducts.map(function(values){
        return(
          {...values}
        )
      });
      printJS({printable: newProductionScheduleData, properties: ['name', 'bottle', 'water', 'label', 'cases', 'date', 'special instructions'], type: 'json'});
    }

    allCustomersPage(){
      this.setState({page: 'allCustomers'});
    }

    addCustomerPage(){
      this.setState({page: 'addCustomer'});
    }

    editCustomerPage(){
      this.setState({page: 'editCustomer'});
    }

    allTicketsPage(){
      this.setState({page: 'allTickets'});
    }

    addTicketPage(){
      this.setState({page: 'addTicket'});
    }

    editTicketPage(){
      this.setState({page: 'editTicket'});
    }

    printRoutePage(){
      this.setState({page: 'printRoute'});
    }

    allProductsPage(){
      this.setState({page: 'allProducts'});
    }

    homePage(){
      this.setState({page: 'home'});
    }
  
  render(){
    if(this.state.page === 'allCustomers'){
    return (
      <div className="App">
        <div className="App-header">
           <h1>Piedmont Springs App</h1>
        </div>
        <div className = "Section-header">
          <h2>Customers</h2>
        </div>
        <div className = "App-table">
          <HomeButton homePage={this.homePage} />
          <CustomerTable customerData={this.state.customerData} showCustomersByRoute={this.showCustomersByRoute} showCustomerByName={this.showCustomerByName} addCustomerPage={this.addCustomerPage} showAllCustomers={this.showAllCustomers} editCustomerPage={this.editCustomerPage} viewCustomer={this.viewCustomer}/>
        </div>
        </div>
        );
        }
    if(this.state.page === 'addCustomer'){
      return (
        <div className="App">
          <div className="App-header">
              <h1>Piedmont Springs App</h1>
          </div>
          <div className = "Section-header">
            <h2>Customers</h2>
          </div>
          <div className = "App-table">
            <HomeButton homePage={this.homePage} />
            <AddCustomer addCustomer={this.addCustomer} />
          </div>
          </div>
          );
          }
    if(this.state.page === 'editCustomer'){
      return (
        <div className="App">
          <div className="App-header">
              <h1>Piedmont Springs App</h1>
          </div>
          <div className = "Section-header">
            <h2>Customers</h2>
          </div>
          <div className = "App-table">
            <HomeButton homePage={this.homePage} />
            <EditCustomer addCustomer={this.editCustomer} />
          </div>
          </div>
          );
          }
    if(this.state.page === 'viewCustomer'){
      return (
        <div className="App">
          <div className="App-header">
              <h1>Piedmont Springs App</h1>
          </div>
          <div className = "Section-header">
            <h2>Customers</h2>
          </div>
          <div className = "App-table">
            <HomeButton homePage={this.homePage} />
            <ViewCustomer customerData={this.state.customerData} ticketData={this.state.ticketData}/>
          </div>
          </div>
          );
          }
    if(this.state.page === 'allTickets'){
      return(
        <div className="App">
          <div className="App-header">
            <h1>Piedmont Springs App</h1>
          </div>
          <div className = "Section-header">
            <h2>Tickets</h2>
          </div>
          <div className = "App-table">
            <HomeButton homePage={this.homePage} />
            <TicketTable ticketData={this.state.ticketData} showTicketsByCustomer={this.showTicketsByCustomer} showTicketsByNumber={this.showTicketsByNumber} showTicketsByDate={this.showTicketsByDate} showAllTickets={this.showAllTickets} editTicketPage={this.editTicketPage} addTicketPage={this.addTicketPage} printRoutePage={this.printRoutePage}/>
          </div>
        </div>
      );
    }

    if(this.state.page === 'addTicket'){
      return (
        <div className="App">
          <div className="App-header">
              <h1>Piedmont Springs App</h1>
          </div>
          <div className = "Section-header">
            <h2>Tickets</h2>
          </div>
          <div className = "App-table">
            <HomeButton homePage={this.homePage} />
            <AddTicket addTicket={this.addTicket} />
          </div>
          </div>
          );
    }

    if(this.state.page === 'editTicket'){
      return (
        <div className="App">
          <div className="App-header">
              <h1>Piedmont Springs App</h1>
          </div>
          <div className = "Section-header">
            <h2>Tickets</h2>
          </div>
          <div className = "App-table">
            <HomeButton homePage={this.homePage} />
            <EditTicket editTicket={this.editTicket} deleteTicket={this.deleteTicket}/>
          </div>
          </div>
          );
    }

    if(this.state.page === 'printRoute'){
      return (
        <div className="App">
          <div className="App-header">
              <h1>Piedmont Springs App</h1>
          </div>
          <div className = "Section-header">
            <h2>Tickets</h2>
          </div>
          <div className = "App-table">
            <HomeButton homePage={this.homePage} />
            <PrintRoute printTickets={this.printTickets} />
          </div>
          </div>
          );
    }

    if(this.state.page === 'allProducts'){
      return(
        <div className="App">
          <div className="App-header">
            <h1>Piedmont Springs App</h1>
          </div>
        <div className = "Section-header">
          <h2>Products</h2>
        </div>
        <div className = "App-table">
            <HomeButton homePage={this.homePage} />
            <ProductionTable productData={this.state.productData} showProductsByBottle={this.showProductsByBottle} addProduct={this.addProduct} showAllProducts={this.showAllProducts} removeProduct={this.removeProduct}/>
            <ProductionSchedule productionScheduleData={this.state.productionScheduleData} showProductionSchedule={this.showProductionSchedule} printProductionSchedule={this.printProductionSchedule} />
        </div>
        </div>
      );
    }
    else{
      return(
        <div className="App">
          <div className="App-header">
            <h1>Piedmont Springs App</h1>
          </div>
          <div className = "Section-header">
            <h2>Home Page</h2>
          </div>
            <div className = "App-table"></div>
            <MainMenu allProductsPage={this.allProductsPage} allCustomersPage={this.allCustomersPage} allTicketsPage={this.allTicketsPage} />
        </div>
      )
    }
  }
}

export default App;
