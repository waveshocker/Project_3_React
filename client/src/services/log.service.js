import axios from "axios";

class LogService {
    
  checkin(username, restaurant) {
    console.log(restaurant);    
    return axios.post("/api/user/checkin", {
      username: username,
      restaurant: restaurant
    });
  }

  getCurrentRestaurant() {
    return JSON.parse(localStorage.getItem('restaurant'));;
  }
}

export default new LogService();