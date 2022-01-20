import React, {Component} from 'react';

//header
import MainHeader from './components/MainHeader'

//form
import PostForm from './components/PostForm';
//List images
import Mushroom from '../src/images/mushroom.jpg';
import Walkmann from '../src/images/walkmann.jpg';
import Stormtroopers from '../src/images/stormtroopers.jpg';

//ads
import MyAd from './components/MyAd';
import Sprouts from './images/sprouts.jpg';
import Tech from './images/tech-gadgets.jpg';

//left side
import LeftSideNav from './components/LeftNav';
import PostArticle from './components/PostArticle';

class App extends Component {
  state = {
    pList: [{
      pName: 'I Love Mushrooms!!',
      pText: 'They are amazing sauteed with butter, garlic and fresh herbs! However, this is a toadstool and you probably shouldnt eat it.',
      pImg: Mushroom,
      pAlt: "Mushrooms on plate that has a color. They have been cooked."
    },
    {
      pName: 'Moon Walkin',
      pText: 'Mix tapes, hair bands and Michael Jackson ...those were the days!',
      pImg: Walkmann,
      pAlt: "Its a walkmann with headphones. It's old so you may not know what it is anyways"
    },
    {
      pName: 'Be Advised!',
      pText: 'The Stromtroopers have begun work on the power supply for the new and improved Death Star...',
      pImg: Stormtroopers,
      pAlt: "It's stormtroopers and someone gave them a power supply. Everyone look out."
    }],
    color: 'rgba(255, 235, 245, 1)',
  }

  //lifecycle
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: 'rgba(126, 217, 87, 1)'});
    }, 5000);
  }

  //getting the user input values from the form
  getInput = e => {
    this.setState({...this.props, [e.target.name]: e.target.value});
  };
  
  //add item function
  addItem = e => {
    e.preventDefault();
    this.setState({
      pList: [...this.state.pList,{pName:this.state.pName, pText: this.state.pText, pImg: this.state.pImg}]
    });
    e.target.reset();
  }

  //delete item function
  removeItem = (id) => {
    const newList = this.state.pList.filter((item) => item.pName !== id.pName );
    this.setState({pList:newList});
  }

  render() {

    let postList = this.state.pList.map((element, i) =>{
      return <PostArticle
                key={i}
                val={element}
                deleteItem={() => this.removeItem(element)} />
    })
    return (
      <div>
        <MainHeader />
          <div style={styles.container}>
            <aside style={styles.leftNav}>
                <LeftSideNav />
            </aside>

              <section style={styles.postSection}>
                  <h1 style={{color: this.state.color, textTransform: 'uppercase', fontSize: '5rem', marginBottom: '2rem', textAlign: 'center', fontFamily: 'Montserrat'}}>
                    Welcome to Mango Digital</h1>
                  <PostForm 
                  getInput={this.getInput}
                  addItem={this.addItem}
                  btnText="Post" />
                  {postList}
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
    width: '75%',
    background: 'rgba(37, 68, 65, 1)',
    color: 'rgba(37, 68, 65, 1)',
    padding: '3rem',
    margin: '1rem 3rem 0 0',
    borderRadius: '.75rem',
  },
  leftNav: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,

  },
  ads: {
    paddingRight: 20,
  }
}
