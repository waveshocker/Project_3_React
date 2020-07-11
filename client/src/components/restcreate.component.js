import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import LogService from "../services/log.service";
import CheckButton from "react-validation/build/button";

export default class CreateRest extends Component {
    constructor(props) {
      super(props);
      this.handleRegister=this.handleRegister.bind(this);
      this.onChange = this.onChange.bind(this);

      this.state = {
        currentUser: AuthService.getCurrentUser(),
        restaurant: "", 
      };      
    }    

    handleRegister(e) {
        e.preventDefault();        
        LogService.createrest(
            this.state.restaurant,
            this.state.currentUser.id            
        ).then()
      }

      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
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
                      <label htmlFor="restaurant">Restaurant</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="restaurant"
                        value={this.state.restaurant}
                        onChange={this.onChange}                        
                      />
                    </div>                       
    
                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Create Restaurant</button>
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
        );
      }
  }