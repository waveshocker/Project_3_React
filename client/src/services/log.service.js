import axios from "axios";

class LogService {
    
  checkin(username, restaurant, userid, restaurantid) {
    console.log(restaurant);    
    return axios.post("/api/user/checkin", {
      username: username,
      restaurant: restaurant,
      userid: userid,
      restaurantid: restaurantid
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

  getrest(latitude, longitude) {
    console.log(latitude);
    return axios.get("/api/restaurant_search", {
      params: {
      latitude: latitude,
      longitude: longitude
      }
    })
    .then(response => {
      localStorage.setItem("restaurant", JSON.stringify(response.data));      
    })
  }

  getlog(restaurant, id) {
    console.log(restaurant);
    return axios.get("/api/log_pull", {
      params: {        
        restaurant: restaurant,
        id: id
      }
    })
    .then(response => {
      localStorage.setItem("log", JSON.stringify(response.data))
    })
  }
  
  

  getCurrentRestaurant() {
    return JSON.parse(localStorage.getItem('restaurant'));
  }

  getRestaurantLog() {
    return JSON.parse(localStorage.getItem('log'));
  }
}

export default new LogService();