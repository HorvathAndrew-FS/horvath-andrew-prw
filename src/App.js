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

//ads
import MyAd from './components/MyAd';
import Sprouts from './images/sprouts.jpg';
import Tech from './images/tech-gadgets.jpg';

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

        <h2 style={styles.h2}>Right Side Ads:</h2>
        <div style={styles.btnContainer}>
          <MyAd articleImg={Sprouts} articleAlt="This is my alt tag for brussel sprouts!!"
          articleTitle="Brussel Sprouts"
          articleText="Brussel sprouts are a wonderfully delicious vegetable. Eveyone should enjoy how amazing they are when roasted! a little olive oil and some salt go a long way!" />
          
          <MyAd articleImg={Tech} articleAlt="This is my alt tag for a bunch of techie gadgets!"
          articleTitle="How Much Tech is Too Much Tech?"
          articleStatement="There's no denying tech skills can give kids a leg up in the world of college and career."
          articleText="
          But despite the benefits, too much tech use is contributing to serious health and psychological concerns, leaving leaders with the tough task of drawing a line between access and obsession. Let's take a closer look at the impacts of too much tech use and explore 3 steps district tech leaders can take toward a more balanced approach to technology." />
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
