import React, {Component} from "react";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import CustomersList from "./CustomersList";

export default class App extends Component{

  state = {
    Dash: false,
    Log: false,
    Cart: true,
  }

  render(){
    return <>

      <Navbar 
        changePage={this.changePage}
      />
      {this.showCustomersList(this.state.Dash)}
      {this.showLogin(this.state.Log)}
      {this.showShoppingCart(this.state.Cart)}
    </>
  }

  changePage = (num) => {
    if (num === 1){
      this.setState({Dash: true, Log: false, Cart: false});
    } else if (num === 2){
      this.setState({Dash: false, Log: true, Cart: false});
    } else if (num === 3){
      this.setState({Dash: false, Log: false, Cart: true});
    }
  }
  showCustomersList = (boolean) => {
    if (boolean === true){
      return <CustomersList />
    }
  }
  showLogin = (boolean) => {
    if (boolean === true){
      return <Login />
    }
  }
  showShoppingCart = (boolean) => {
    if (boolean === true){
      return <ShoppingCart />
    }
  }
}