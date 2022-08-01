import React, {Component} from "react";
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            message: ""
        }
    }
    render(){
        return( <form className='p-5'>
            <br/><br/><br/>
            <h2>Login</h2>
            <br/>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={(event) => {this.setState({email: event.target.value})}} />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}} />
            </div>

            <span class="btn btn-primary m-1" onClick={() => this.onLogin()}>Submit</span>
            {this.state.message}
          </form>
        )
    }
    onLogin = () => {
        if (
            this.state.email === "test@test.com" &&
            this.state.password === "1234"
        ) {
            this.setState({message: <span className="text-success">Successfully Logged-in!</span>})
        } else {
            this.setState({message: <span className="text-danger">Invalid Login</span>})
        }
    }
}