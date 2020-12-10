
import React, { Component } from 'react';
import { settings } from '../services/protectedservices';

class Settings extends Component {
state = {
    username: this.props.user.username,
    password: this.props.user.password,
    confirmPassword: "",
    errorMessage: "" 
}

handleSubmit = (event) => {
event.preventDefault();
if (this.state.password !== this.state.confirmPassword) {
    this.setState ({
        errorMessage: "Passwords must be the same"
    })
    return}
console.log("passwords match!")

const credentials = {
    id: this.props.user._id,
    username: this.state.username,
    password: this.state.password
}
settings(credentials).then((res) => {
    console.log(res)})
}

handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value)
    console.log(name)
    this.setState({
      [name]: value,
    });
  };

 render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="">
                    <label htmlFor="Username">Change username</label>
                    <input name="username" type="text" placeholder ={this.props.user.username} onChange={this.handleInputChange}/> <br/>
                    <label htmlFor="Password">Change password</label>
                    <input type="password" name = "password" placeholder="Type new password" onChange={this.handleInputChange}/>
                    <input type="password" name = "confirmPassword" placeholder="Confirm new password" onChange={this.handleInputChange}/>
                    <button type="submit" >Update settings</button>  
                </form>
                {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : <> </>}
            </div>
        );
    }
}


export default Settings;