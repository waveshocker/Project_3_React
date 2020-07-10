import React, { Component } from "react";
import AuthService from "../services/auth.service";
import CheckIn from "../components/checkin.component";

export default class ProfileRest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Restaurant Profile
          </h3>
        </header>       
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>        
      </div>      
    );
  }
}
