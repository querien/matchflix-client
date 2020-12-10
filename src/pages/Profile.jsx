
import React, { Component } from 'react';

class Profile extends Component {


    render() {
        return (
            <div>
               <h1> Hello there {this.props.user.username}!</h1> 
            </div>
        );
    }
}

export default Profile;