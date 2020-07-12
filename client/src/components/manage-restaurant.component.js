import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isMobilePhone } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vEmail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vUsername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vPassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vPhonenumber = value => {
  if (!isMobilePhone(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid phone number.
      </div>
    );
  }
};

export default class RegisterRestaurant extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChange = this.onChange.bind(this);
    

    this.state = {
      restName: "",
      restAddress: "",

      restUsername: "",
      restEmail: "",
      restPhone: "",
      restContactName: "",
      restContactEmail: "",
      restContactPhone: "",
      restPassword: "",
      successful: false,
      message: ""
    };
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="restName">Restaurant Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="restName"
                    value={this.state.restName}
                    onChange={this.onChange}
                    //validations={[required, vusername]}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="restAddress">Address</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="restAddress"
                    value={this.state.restAddress}
                    onChange={this.onChange}
                    //validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.restUsername}
                    onChange={this.onChange}
                    validations={[required, vUsername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="restEmail">Restaurant Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="restEmail"
                    value={this.state.restEmail}
                    onChange={this.onChange}
                    validations={[required, vEmail]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="restPhone">Restaurant Phone</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="restPhone"
                    value={this.state.restPhone}
                    onChange={this.onChange}
                    validations={[required, vPhonenumber]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="restContactName">Supervisor Contact Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="restContactName"
                    value={this.state.restContactName}
                    onChange={this.onChange}
                    //validations={[required, vemail]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="restPhone">Contact Phone</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="restContactPhone"
                    value={this.state.restContactPhone}
                    onChange={this.onChange}
                    validations={[required, vPhonenumber]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="restPassword"
                    value={this.state.restPassword}
                    onChange={this.onChange}
                    validations={[required, vPassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
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
        </div>
      </div>
    );
  }
}