
import React, { Component } from 'react';

class Settings extends Component {
state = {
    username: this.props.user.username,
    password: this.props.user.password,
    confirmPassword: "",
}

handleSubmit = (event) => {
event.preventDefault();



const credentials = {
    id: this.props.user._id
}
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
                <form action="">
                    <label htmlFor="Username">Change username</label>
                    <input name="username" type="text" placeholder ={this.props.user.username} onChange={this.handleInputChange}/> <br/>
                    <label htmlFor="Password">Change password</label>
                    <input type="password" name = "password" placeholder="Type new password" onChange={this.handleInputChange}/>
                    <input type="password" name = "confirmPassword" placeholder="Confirm new password" onChange={this.handleInputChange}/>
                    <button onSubmit={this.handleSubmit}>Update settings</button>
                </form>
            </div>
        );
    }
}


export default Settings;