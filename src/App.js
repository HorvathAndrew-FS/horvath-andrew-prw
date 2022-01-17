import React, {Component} from 'react';

//header
import MainHeader from './components/MainHeader'

//form
import PostForm from './components/PostForm';
//posts or cards
import MyPosts from './components/PostArticle';

//ads
import MyAd from './components/MyAd';
import Sprouts from './images/sprouts.jpg';
import Tech from './images/tech-gadgets.jpg';

//left side
import LeftSideNav from './components/LeftNav';

class App extends Component {
  state = {
    pList: [{
      pName: 'I Love Mushrooms',
      pDesc: 'They are amazing sauteed with butter, garlic and fresh herbs! However, this is a toadstool and you probably shouldn&#39;t eat it.',
      pImg: Mushroom,
      pAlt: "Mushrooms on plate that has a color. They have been cooked."
    },
    {
      pName: 'Moon Walkin&#39',
      pDesc: 'zmix tapes, hair bands and Michael Jackson...those were the days!',
      pImg: Walkman,
      pAlt: "Its a walkmann with headphones. It's old so you may not know what it is anyways"
    }]
  }

  render() {
    return (
      <div>
        <MainHeader />
          <div style={styles.container}>
            <aside style={styles.leftNav}>
                <LeftSideNav />
            </aside>

              <section style={styles.postSection}>
                  <PostForm />
              </section>

                <aside style={styles.ads}>
                  <MyAd articleImg={Sprouts} articleAlt="This is my alt tag for brussel sprouts!!"
                    articleTitle="Brussel Sprouts"
                    articleText="Brussel sprouts are a wonderfully delicious vegetable. Eveyone should enjoy how amazing they are       when roasted! a little olive oil and some salt go a long way!" />

                  <MyAd articleImg={Tech} articleAlt="This is my alt tag for a bunch of techie gadgets!"
                    articleTitle="How Much Tech is Too Much Tech?"
                    articleStatement="There's no denying tech skills can give kids a leg up in the world of college and career."
                    articleText="But despite the benefits, too much tech use is contributing to serious health and
                      psychological concerns,       leaving leaders with the tough task of drawing a line between access and obsession. Let's take a closer look      at the impacts of too much tech use and explore 3 steps district tech leaders can take toward a more balanced     approach to technology." />
                  </aside>
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
    justifyContent: 'space-between',
    background: 'rgba(255, 235, 245, 1)',
  },
  postSection: {
    width: '60%',
    background: 'rgba(37, 68, 65, 1)',
    color: 'rgba(37, 68, 65, 1)',
    padding: '2rem',
    margin: '1rem 3rem 0 0',
    borderRadius: '.75rem',
  },
  leftNav: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,

  },
  ads: {
    paddingRight: 20,
  }
}
