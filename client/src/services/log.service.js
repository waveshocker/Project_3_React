import axios from "axios";

class LogService {
    
  checkin(username, restaurant) {
    console.log(restaurant);    
    return axios.post("/api/user/checkin", {
      username: username,
      restaurant: restaurant
    });
  }

  createrest(restaurant, id, latitude, longitude) {
    console.log(restaurant);
    console.log(id);
    console.log(latitude);
    console.log(longitude);
    return axios.post("/api/user/createrest", {
      restaurant: restaurant,
      id: id,
      latitude: latitude,
      longitude: longitude
    });
  }

  getrest() {
    return axios.get("/api/getrest")
    .then(response => {
      return response.json();
    })
  }
  

  getCurrentRestaurant() {
    return JSON.parse(localStorage.getItem('restaurant'));;
  }
}

export default new LogService();