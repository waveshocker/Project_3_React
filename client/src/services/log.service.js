import axios from "axios";

class LogService {
    
  checkin(username, restaurant) {
    console.log(restaurant);    
    return axios.post("/api/user/checkin", {
      username: username,
      restaurant: restaurant
    });
  }

  createrest(restaurant, id) {
    console.log(restaurant);
    console.log(id);
    return axios.post("/api/user/createrest", {
      restaurant: restaurant,
      id: id
    });
  }

  getCurrentRestaurant() {
    return JSON.parse(localStorage.getItem('restaurant'));;
  }
}

export default new LogService();