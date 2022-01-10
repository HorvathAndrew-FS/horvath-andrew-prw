import React, {Component} from 'react';
//color variables
import GlobalStyle from './GlobalStyles'
//images
import AvatarIcon from '../src/images/AvatarAndrew.jpg';
import Avatar from '../src/components/Avatar';

//buttons
import ButtonStandard from './components/buttons/ButtonStandard';
import ButtonOutline from './components/buttons/ButtonOutline';
import ButtonSmall from './components/buttons/ButtonSmall';

class App extends Component {
  render() {
    return (
      <div className='App' style={styles.container}>
        <h2>Buttons:</h2>
        <div style={styles.btnContainer}>
            <ButtonStandard btnText='Standard' />
            <ButtonOutline btnText='Outline' />
            <ButtonSmall btnText='Small' />
        </div>


        {/*
        <div>
        <Avatar AvatarIcon={AvatarIcon} />
        <img src={AvatarIcon} alt='logo' style={styles.logo} />
        </div> */}
      </div>
    );
  }
}

export default App;

const styles = {
  body: {
    padding: '10px'
},
  container: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    background: '#ccc',
    height: '100vh',
    fontSize: '.75rem',
    borderRadius: '5px'
  },
  bntContainer: {
    width: '100%'
  },
  logo: {
    height: '50%',
    borderRadius: '30%'
  },
  //button styles

}
