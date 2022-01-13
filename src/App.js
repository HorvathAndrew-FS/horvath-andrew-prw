import React, {Component} from 'react';

//images
// import AvatarIcon from '../src/images/AvatarAndrew.jpg';
// import Avatar from '../src/components/Avatar';
//header
import MainHeader from './components/MainHeader'

//form
import PostForm from './components/PostForm';

//ads
import MyAd from './components/MyAd';
import Sprouts from './images/sprouts.jpg';
import Tech from './images/tech-gadgets.jpg';

//left side
import LeftSideNav from './components/LeftNav';
class App extends Component {
  render() {
    return (
      <div>
          <MainHeader />
      <div style={styles.container}>
        <LeftSideNav styles={styles.leftNav} />

        <div style={styles.mainContent}>
          <PostForm />
        </div>
          <aside style={styles.ads}>
            Advertisers
            <MyAd articleImg={Sprouts} articleAlt="This is my alt tag for brussel sprouts!!"
          articleTitle="Brussel Sprouts"
          articleText="Brussel sprouts are a wonderfully delicious vegetable. Eveyone should enjoy how amazing they are when roasted! a little olive oil and some salt go a long way!" />
          
          <MyAd articleImg={Tech} articleAlt="This is my alt tag for a bunch of techie gadgets!"
          articleTitle="How Much Tech is Too Much Tech?"
          articleStatement="There's no denying tech skills can give kids a leg up in the world of college and career."
          articleText="
          But despite the benefits, too much tech use is contributing to serious health and psychological concerns, leaving leaders with the tough task of drawing a line between access and obsession. Let's take a closer look at the impacts of too much tech use and explore 3 steps district tech leaders can take toward a more balanced approach to technology." />
          </aside>
          <div class="container">Text</div>
      
          


        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgba(255, 235, 245, 1)',
  },
  leftNav: {
    display: 'flex',
  },
  mainContent: {
    display: 'flex',
    flex: 2,
  },
  ads: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,

  }
}
