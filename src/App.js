import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data Entries</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Age</th>
            <th>Domain</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>IP</th>
            <th>Address</th>
            <th>University</th>
            <th>Bank</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.domain}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.ip}</td>
              <td>{user.address.address}, {user.address.city}, {user.address.state}</td>
              <td>{user.university}</td>
              <td>{user.bank.cardType}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;