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
          username: `${user.login.username}`,
          firstName: `${user.name.first}`,
          lastName: `${user.name.last}`,
          picture: `${user.picture.medium}`
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
          const {firstName, lastName, username, picture} = user;
          return <UserForm key={username} username={username} firstName={firstName} lastName={lastName} img={picture} alt="this is a user photo" />
        }) : null
      }
    </div>
  )
}

export default App;

const styles = {

}