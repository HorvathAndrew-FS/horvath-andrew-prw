import React, {Component} from 'react';

//images
// import AvatarIcon from '../src/images/AvatarAndrew.jpg';
// import Avatar from '../src/components/Avatar';

//buttons
import ButtonStandard from './components/buttons/ButtonStandard';
import ButtonOutline from './components/buttons/ButtonOutline';
import ButtonSmall from './components/buttons/ButtonSmall';

//form
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className='App' style={styles.container}>
        <h2 style={styles.h2}>Buttons:</h2>
        <div style={styles.btnContainer}>
            <ButtonStandard btnText='Standard' />
            <ButtonOutline btnText='Outline' />
            <ButtonSmall btnText='Small' />
        </div>

        <h2 style={styles.h2}>Post Form:</h2>
        <div style={styles.btnContainer}>
          <PostForm />
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
  container: {
    margin: '0 auto',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(255, 235, 245, 1)',
    height: '100vh',
    width: '75%',
    borderRadius: '5px'
  },
  btnContainer: {
    width: '100%',
    marginBottom: '2rem'
  },
  h2: {
    marginBottom: '.5rem',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'rgba(247, 100, 107, 1)',
    textTransform: 'uppercase',
  },
  logo: {
    height: '50%',
    borderRadius: '30%'
  },
  //button styles

}
