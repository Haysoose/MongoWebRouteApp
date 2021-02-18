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
    this.addTicket = this.addTicket.bind(this);
    this.showAllTickets = this.showAllTickets.bind(this);
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
      const ticketsByCustomer = await tickets.find({customer: _name});
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

    async addTicket(_customer, _number, _cases, _date){
      await tickets.insertOne({
        customer: _customer,
        qbNumber: _number,
        cases: _cases,
        date: _date
      });
      const newTicket = await tickets.find({qbNumber: _number});
      print({printable: newTicket, properties:['customer', 'qbNumber', 'cases', 'date'], type: 'json'});
      alert("Ticket Number "+_number+" Added");
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
            <TicketTable ticketData={this.state.ticketData} showTicketsByCustomer={this.showTicketsByCustomer} showTicketsByNumber={this.showTicketsByNumber} addTicket={this.addTicket} showAllTickets={this.showAllTickets} />
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
