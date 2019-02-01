import React, { Component } from "react";
// import Header from '../header/Header';

export class Dashboard extends Component {
  render() {
    const { products } = this.props;
    let inventory = products.map( element => { 
        console.log(element.image);
     return <div key={element.id}>
        <h1>{element.name}</h1>
        <h2>{element.price}</h2>
        <img style={{ height: "100px" }} src={element.image} alt="here you go" />
          </div>;
     
    });
    return (
      <div>
        Dashboard
        {inventory}
      </div>
    );
  }
}

export default Dashboard;
