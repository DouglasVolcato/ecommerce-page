import React, {Component} from "react";
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            message: "",
            regEmail:"",
            regPassword:"",
            registerMessage: "",
            users: [],
            passwords: [],
        }
    }
    render(){
        return( 
            <div>
                <form className='p-5'>
                    <h2>Login</h2>
                    <br/>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={(event) => {this.setState({email: event.target.value})}} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}} />
                    </div>

                    <span className="btn btn-primary m-1" onClick={() => this.onLogin()}>Submit</span>
                    {this.state.message}
                </form>

                <form className='p-5'>
                    <h2>Register</h2>
                    <br/>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.regEmail} onChange={(event) => {this.setState({regEmail: event.target.value})}} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.regPassword} onChange={(event) => {this.setState({regPassword: event.target.value})}} />
                    </div>

                    <span className="btn btn-primary m-1" onClick={() => this.onRegister()}>Submit</span>
                    {this.state.registerMessage}
                </form>
            </div>
        )
    }

    onRegister = () => {

        loop: while(true){
            for (let n of this.state.users) {
                if (this.state.regEmail === n){
                    this.setState({registerMessage: <span className="text-danger">Registered Email</span>});
                    break loop;
                }
            }

            if (this.state.regEmail.includes("@") && this.state.regEmail.includes(".")){

                if (this.state.regPassword.length >= 8){

                    const newUser = this.state.users;
                    const newPassword = this.state.passwords;
                    newUser.push(this.state.regEmail);
                    newPassword.push(this.state.regPassword);

                    this.setState({users: newUser});
                    this.setState({passwords: newPassword});
                    this.setState({registerMessage: <span className="text-success">Successfully Registered</span>});
                    break;

                } else {
                    this.setState({registerMessage: <span className="text-danger">Your password must contain at least 8 characters</span>});
                    break;
                }

            } else {
                this.setState({registerMessage: <span className="text-danger">Enter a valid email</span>});
                break;
            }
        }
    }

    onLogin = () => {

        loginLoop: while(true){
            for(let n of this.state.users){
                if (n === this.state.email){
                    
                    if (this.state.users.indexOf(this.state.email) === this.state.passwords.indexOf(this.state.password)){
                        this.setState({message: <span className="text-success">Successfully Logged-in</span>});
                        break loginLoop;
                    }
                    this.setState({message: <span className="text-danger">Invalid password</span>});
                    break loginLoop;
                }
            }
            this.setState({message: <span className="text-danger">Invalid email</span>});
            break;
        }
    }
}