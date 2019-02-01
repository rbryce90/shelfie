import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userImage: "",
      userProduct: "",
      userPrice: ""
    };
  }

  sendInventory = event => {
    let {userProduct, userPrice, userImage} = this.state;
    this.props.addInventory(userProduct, userPrice, userImage);
  };
  cancel = event => {
    console.log("cancel");
  };

  updateUrl = event => {
    this.setState({
        userImage: event.target.value,
    })
    console.log(this.state.userImage)
  }
  updateName = event => {
    this.setState({
        userName: event.target.value,
    })
    console.log(this.state.userName)
  }
  updatePrice = event => {
    this.setState({
        userPrice: event.target.value,
    })
    console.log(this.state.userPrice)
  }

  cancel = event => {
      this.setState({
        userImage: "",
        userProduct: "",
        userPrice: ""
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addInventory}>
          <input type="text" name="url" onChange={this.updateUrl}/>
          <input type="text" name='name' onChange={this.updateName} />
          <input type="text" name='price' onChange={this.updatePrice} />
          <button onClick={this.cancel}> Cancel </button>
          <input type="submit" value="Add to Inventory" />
        </form>
      </div>
    );
  }
}

export default Form;
