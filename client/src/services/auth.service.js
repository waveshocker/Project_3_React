import axios from "axios";

class AuthService {
  login(username, password) {
    return axios
      .post("/api/diner/login", {
        username: username,
        password: password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, name, phonenumber, address) {
    console.log(name)
    return axios.post("/api/diner/signup", {
      username: username,
      email: email,
      password: password,
      name: name,
      phonenumber: phonenumber,
      address: address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();