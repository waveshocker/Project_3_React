import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import LogService from "../services/log.service";
import CheckButton from "react-validation/build/button";



export default class CheckIn extends Component {
    constructor(props) {
      super(props);

      this.handleRegister = this.handleRegister.bind(this);
     
      this.state = {
        currentUser: AuthService.getCurrentUser(),
        restaurant: ""
      };
      
    }    

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(function(position) {        
        LogService.getrest(position.coords.latitude, position.coords.longitude)                 
      })      
    }

    handleRegister(e) {
        e.preventDefault();
        console.log(LogService.getCurrentRestaurant());
        LogService.checkin(
            this.state.currentUser.username,
            LogService.getCurrentRestaurant().restaurant,
            this.state.currentUser.id,
            LogService.getCurrentRestaurant().id
        )
      }
  
    render() {
        return (       
        <div>

          <Form
              onSubmit={this.handleRegister}
              ref={c => {
                this.form = c;
              }}
              >
  
              <div>
                <div className="form-group">
                  <button className="btn btn-primary">Check In</button>
                </div>
              </div>          

              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />
            </Form>
          </div>  
      
        )}
  }