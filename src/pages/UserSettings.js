import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';

function UserSettings() {
   const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

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
      .catch ((err) => {
        console.log("You're dumb app just caused an ERROR!!", err);
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);

    if (loading) return "Loading...";
    if (err) return "Error!";
      


  return (
    <div>
      <h1 style={styles.h1}>Settings</h1>
      <h2 style={styles.h2}>{loading}</h2>
        {!loading && userData.length > 0 ? userData.map(user => {
          const {firstName, lastName, username, picture, address} = user;
          return <UserForm key={username} username={username} firstName={firstName} lastName={lastName} img={picture} alt="this is a user photo" address={address}/>
        }) : null
      }
    </div>
  )
}

export default UserSettings;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '5rem',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        color: 'rgba(126, 217, 87, 1)',
    },
    content: {
        fontFamily: 'Montserrat',
        fontSize: '2.25rem',
        color: 'rgba(255, 235, 245, 1)',
        width: '75rem',
        marginTop: '2rem',
    }
}