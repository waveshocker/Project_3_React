import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import LogService from "../services/log.service";
import CheckButton from "react-validation/build/button";
import Dropdown from 'react-bootstrap/Dropdown'

export default class CheckIn extends Component {
    constructor(props) {
      super(props);

      this.handleRegister=this.handleRegister.bind(this);
  
      this.state = {
        currentUser: AuthService.getCurrentUser(),
        restaurant: "MCD2"
      };
      
    }    

    handleRegister(e) {
        e.preventDefault();        
        LogService.checkin(
            this.state.currentUser.username,
            this.state.restaurant
        ).then()
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
              {!this.state.successful && (    
                <div>
                  <div className="form-group">
                    <button className="btn btn-primary">Check In</button>
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

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>  
      
        )}
  }