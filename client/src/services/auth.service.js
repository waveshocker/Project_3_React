import axios from "axios";

class AuthService {
  login(username, password) {    
    return axios
      .post("/api/user/login", {
        username: username,
        password: password
      })
      .then(response => {        
        // if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        // }
        // return response.data;
      });
  }

  logout() {
    localStorage.clear();
  }

  register(username, email, password, name, phonenumber, address, isrestaurant) {
    console.log(name)
    return axios.post("/api/user/signup", {
      username: username,
      email: email,
      password: password,
      name: name,
      phonenumber: phonenumber,
      address: address,
      isrestaurant: isrestaurant
    });
  }  

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getCurrentLocation() {
    return JSON.parse(localStorage.getItem('location'));;
  }
}

export default new AuthService();