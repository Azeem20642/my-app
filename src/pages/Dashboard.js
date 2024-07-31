import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>First Name: {user.user_firstname}</p>
          <p>Email: {user.user_email}</p>
          <p>Phone: {user.user_phone}</p>
          <p>City: {user.user_city}</p>
          <p>Zipcode: {user.user_zipcode}</p>
        </div>
      ) : (
        <p>No user information available</p>
      )}
    </div>
  );
}

export default Dashboard;
