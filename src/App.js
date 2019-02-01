import React, { Component } from "react";
import Dashboard from "./component/dashboard/Dashboard";
import Form from "./component/form/Form";
import Header from "./component/header/Header";
import axios from 'axios';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount(){
    axios.get('/api/inventory').then(response => {
      let products = response.data;
      console.log(products);
      this.setState({
        products: products,
      })
  })
}

addInventory = (name, price, image) => {
  axios.post("/api/inventory", {name, price, image} ).then( response => {
    this.setState({
      products: [...this.state.products, {
        name: name,
        price: price,
        image: image
      }]
    })
  })
};
  
  render() {
    let {products} = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard products={products} addInventory={this.addInventory} />
        <Form />
      </div>
    );
  }
}

export default App;
