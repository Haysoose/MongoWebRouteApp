import './App.css';
import React, {Component} from 'react';
import CustomerTable from './components/CustomerTable';
import TicketTable from './components/TicketTable';
import ProductionTable from './components/ProductionTable';
import ProductionSchedule from './components/ProductionSchedule';
import print from 'print-js';
import * as Realm from "realm-web";

const REALM_APP_ID = "route-app-dmxam"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });
const mongodb = app.currentUser.mongoClient("mongodb-atlas");
const customers = mongodb.db("Route").collection("Customers");
const tickets = mongodb.db("Route").collection("Tickets");
const products = mongodb.db("Route").collection("Production");
const productionSchedule = mongodb.db("Route").collection("ProductionSchedule");

// Create a component that displays the given user's details
/*function UserDetail({ user }) {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
}*/

// Create a component that lets an anonymous user log in
/*function Login({ setUser }) {
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
}*/


class App extends Component {
  constructor(props){
    super(props);
    this.showCustomersByRoute = this.showCustomersByRoute.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
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
    this.state = {
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
      print({printable: newProductionScheduleData, properties: ['name', 'bottle', 'water', 'label', 'cases', 'date', 'special instructions'], type: 'json'});
    }
  
  render(){
    return (
      <div className="App">
        <div className="App-header">
           <h1>Piedmont Springs Routing Software</h1>
        </div>
        <div className = "Section-header">
          <h2>Customers</h2>
        </div>
        <div className = "App-table">
          <CustomerTable customerData={this.state.customerData} showCustomersByRoute={this.showCustomersByRoute} addCustomer={this.addCustomer} showAllCustomers={this.showAllCustomers}/>
        </div>
        <div className = "Section-header">
          <h2>Tickets</h2>
        </div>
        <div className = "App-table">
          <TicketTable ticketData={this.state.ticketData} showTicketsByCustomer={this.showTicketsByCustomer} showTicketsByNumber={this.showTicketsByNumber} addTicket={this.addTicket} showAllTickets={this.showAllTickets} />
        </div>
        <div className = "Section-header">
          <h2>Production</h2>
        </div>
        <div className = "App-table">
            <ProductionTable productData={this.state.productData} showProductsByBottle={this.showProductsByBottle} addProduct={this.addProduct} showAllProducts={this.showAllProducts} removeProduct={this.removeProduct}/>
            <ProductionSchedule productionScheduleData={this.state.productionScheduleData} showProductionSchedule={this.showProductionSchedule} printProductionSchedule={this.printProductionSchedule} />
        </div>
        <div className="Footer">
          <p>App Made By Hayden Marlowe</p>
        </div>
      </div>
    );
  }
}

export default App;
