import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye } from "react-icons/fa";

const UserForm = props => {
    const [passwordVis, setPasswordVis] = useState(false);

    const togglePW = (e) => {
        e.preventDefault();
        setPasswordVis(!passwordVis);
    };
    
    return (

        

        <StyledForm>
            <h1 style={styles.formTitle}>Edit User Profile</h1>

            <p><img src={props.img} alt={props.alt} /></p>

        <fieldset class="name-items">
            <div>
              <label for="fname" style={styles.fName}>First</label>
              <input value={props.firstName} type="text" name="fname"/>
            </div>
            <div>
              <label for="lname" style={styles.lName}>Last</label>
              <input value={props.lastName} type="text" name="lname" placeholder="Last"/>
            </div>
        </fieldset>
        
        <fieldset>
          <label for="email">Email</label>
          <input value={props.emailAddress} type="text" name="email"/>
          
          <label for="contact-number">Contact Number</label>
          <input value={props.contactNumber} type="text" name="contact-number"/>
        </fieldset>
        
        <fieldset>
          <label for="address">Address</label>
          <input value={props.address} type="text" name="address" placeholder="Street address" />
          <input type="text" name="address" placeholder="Street address line 2" />

            <label for="city">City</label>
            <input value={props.city} type="text" name="city" placeholder="City" />

            <label for="state">State</label>
            <input value={props.userState} type="text" name="state" placeholder="State" />
            
            <label type="text" name="Zip Code">Zip Code</label>
            <input value={props.zipCode} type="text" name="name" placeholder="Postal / Zip code" />
    
            <label for="country">Country</label>
            <input value={props.country} type="text" name="country" placeholder="Country" />
        </fieldset>

        <fieldset>
                <div>
              <label for="username" >Username</label>
              <input value={props.username} type="text" name="username" placeholder="Username" />
            </div>

            <div class="pw-wrapper">
              <label for="password" >Password</label>
              <input value={props.password} type={passwordVis ? "text" : "password"} name="password" placeholder="Password"/>
              <span class="btn-toggle" onClick={togglePW} >{<FaEye />}</span>
              {/* <button class="btn-toggle" onClick={togglePW}>Show Password</button> */}
            </div>
        </fieldset>




            {/* 
            picture: `${user.picture.large}`,
          firstName: `${user.name.first}`,
          lastName: `${user.name.last}`,
          emailAddress: `${user.email}`,
          contactNumber: `${user.cell}`,
          address: `${user.location.street.number} ${user.location.street.name}`,
          city: `${user.location.city}`,
          userState: `${user.location.state}`,
          zipCode: `${user.location.postcode}`,
          country: `${user.location.country}`,
          username: `${user.login.username}`,
          password: `${user.login.password}`,
            */}
        </StyledForm>
    )
}

export default UserForm;

const StyledForm = styled.form`
        display: flex;
        flex-direction: column;        
        background: white;
        color: blue;
        font-size: 2rem;
        

        fieldset {
            outline: none;
            border: none;
        }
        label {
            display: block;
            margin: 1rem 0 0 0;
        }
        input {
            padding: 1rem;
            border-radius: .75rem;
            margin: 0rem 1rem 0 0
        }
        .name-items {
            display: flex;
            flex-direction: row;
            color: orange;
        }
        .pw-wrapper {
            position: relative;
        }
        .btn-toggle {
            position: absolute;
            font-size: 2rem;
            bottom: 10%;
            left: 17%;
        }
        span:hover {
            cursor: pointer;
            color: red;
        }

`

const styles = {}
