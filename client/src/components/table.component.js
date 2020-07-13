import React from "react";

const styles = {
    thead: {
      background: "white"
    }
  };

function Table(props) {
  console.log(props.record)  
  return (
    <table className="table table-striped">
      <thead style={styles.thead}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">UserName</th>
          <th scope="col">Restaurant</th>
          <th scope="col">Address</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>           
        </tr>
      </thead>
      <tbody>
          {props.record.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.username}</td>
              <td>{item.restaurant}</td>
              <td>{item.User.address}</td>
              <td>{item.User.phonenumber}</td>
              <td>{item.User.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}


export default Table;