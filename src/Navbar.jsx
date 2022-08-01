import React, {Component} from "react";

class NavBar extends Component{

  render(){
    return(
    
      <nav>

        <ul class="position-absolute top-0 start-0 nav nav-tabs fixed-top position-absolute" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button onClick={() => {this.props.changePage(3)}} class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Products</button>
          </li>
          <li class="nav-item" role="presentation">
            <button onClick={() => {this.props.changePage(1)}} class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Customers</button>
          </li>
          <li class="nav-item" role="presentation">
            <button onClick={() => {this.props.changePage(2)}} class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Login</button>
          </li>
        </ul>    
      
      </nav>

    );
  }
}

export default NavBar;