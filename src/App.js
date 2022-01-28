import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch('https://randomuser.me/api/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setUserData(data.results.map(user => ({
          picture: `${user.picture.medium}`,
          firstName: `${user.name.first}`,
          lastName: `${user.name.last}`,
          emailAddress: `${user.email}`,
          phoneNumber: `${user.cell}`,
          address: `${user.location.street.number} ${user.location.street.name}`,
          city: `${user.location.city}`,
          userState: `${user.location.state}`,
          zipCode: `${user.location.postcode}`,
          country: `${user.location.country}`,
          username: `${user.login.username}`,
          password: `${user.login.password}`,
        })));
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";
      


  return (
    <div>
      <h1>Settings</h1>
      <h2 style={styles.h2}>{loading}</h2>
        {!loading && userData.length > 0 ? userData.map(user => {
          const {firstName, lastName, username, picture, address} = user;
          return <UserForm key={username} username={username} firstName={firstName} lastName={lastName} img={picture} alt="this is a user photo" address={address}/>
        }) : null
      }
    </div>
  )
}

export default App;

const styles = {

}