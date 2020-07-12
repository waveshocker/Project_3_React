import React, { Component } from "react";
import AuthService from "../services/auth.service";
import CreateRest from "../components/restcreate.component";
import Map from "../components/map.component";
import QrOutput from "../components/restaurantQrOutput";


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
        <Map
					google={this.props.google}
					center={{lat: 43.6453473, lng: -79.4296353}}
					height='300px'
					zoom={15}
				/> 
        <CreateRest/>
      <QrOutput/>    

      </div>      
    );
  }
}
