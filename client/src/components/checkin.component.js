import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import LogService from "../services/log.service";
import CheckButton from "react-validation/build/button";

export default class CheckIn extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "Test2",
        restaurant: "MCD2"
      };
      this.handleRegister=this.handleRegister.bind(this);
    }    

    handleRegister(e) {
        e.preventDefault();        
        LogService.checkin(
            this.state.username,
            this.state.restaurant
        ).then()
      }
  
    render() {
        return (
        <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (    
              <div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Check In</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
      
        )}
  }