
import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Profile extends Component {


    render() {
        return (
            <div>
               <h1> Hello there {this.props.user.username}!</h1> 

               <Link to={"/settings"}>Edit your profile</Link>
               <Link to={"/"}>Create a movie night</Link>
                <Link to={"/"}>Join a movie night</Link>

            </div>
        );
    }
}

export default Profile;