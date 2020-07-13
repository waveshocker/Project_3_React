import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import LogService from "../services/log.service";
import CheckButton from "react-validation/build/button";
import Table from "../components/table.component";


const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const namecheck = value => {
if (value.length < 1) {
    return (
    <div className="alert alert-danger" role="alert">
        The name must be a name.
    </div>
    );
}
};


export default class GuestLog extends Component {
    constructor(props) {
      super(props);

      this.handlePull = this.handlePull.bind(this);
      this.onChange = this.onChange.bind(this);
     
      this.state = {
        currentUser: AuthService.getCurrentUser(),
        restaurant: "",
        record: [{id: "", username: "", restaurant: "", User: { address: "", phonenumber: "", email: "" }}]
      };
      
    }
    
    //check if log is updated, if so display it
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID);
      }
    }

    handlePull(e) {
        e.preventDefault();
        LogService.getlog(
            this.state.restaurant,
            this.state.currentUser.id
        ).then(
          console.log(LogService.getRestaurantLog()),
          this.setState({
            record: LogService.getRestaurantLog()
          })         
        )       
      }
    
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
      
  
    render() {
        return (       
        <div>

        <Form
            onSubmit={this.handlePull}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Restaurant Log Pull</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="restaurant"
                    value={this.state.resturant}
                    onChange={this.onChange}
                    validations={[required, namecheck]}
                  />
                </div>                

                <div className="form-group">
                  <button className="btn btn-primary">Guest Log Pull</button>
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

              
          <Table record = {this.state.record}/>            

          </div> 
      
        )}
  }