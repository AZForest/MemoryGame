
import './App.css';
import React, { Component }from 'react';
import WinMessage from './components/WinMessage/WinMessage';
/*import image from './assets/brown.png';*/
import banana from './assets/icons/banana.png';
import coconut from './assets/icons/coconut.png';
import palm from './assets/icons/palmtree.png';
import rum from './assets/icons/rum.png';
import shell from './assets/icons/shell.png';
import wave from './assets/icons/wave.png';
import pine from './assets/icons/pineapple.png';
import anchor from './assets/icons/anchor.png';


class App extends Component {

  state = {
    cardsArr: [
      {name: "card1", id: 1, isClicked: false, type: "a", removed: false, icon: banana},
      {name: "card2", id: 2, isClicked: false, type: "b", removed: false, icon: coconut},
      {name: "card3", id: 3, isClicked: false, type: "c", removed: false, icon: palm},
      {name: "card4", id: 4, isClicked: false, type: "d", removed: false, icon: rum},
      {name: "card5", id: 5, isClicked: false, type: "e", removed: false, icon: shell},
      {name: "card6", id: 6, isClicked: false, type: "f", removed: false, icon: wave},
      {name: "card7", id: 7, isClicked: false, type: "g", removed: false, icon: pine},
      {name: "card8", id: 8, isClicked: false, type: "h", removed: false, icon: anchor},
      {name: "card9", id: 9, isClicked: false, type: "a", removed: false, icon: banana},
      {name: "card10", id: 10, isClicked: false, type: "b", removed: false, icon: coconut},
      {name: "card11", id: 11, isClicked: false, type: "c", removed: false, icon: palm},
      {name: "card12", id: 12, isClicked: false, type: "d", removed: false, icon: rum},
      {name: "card13", id: 13, isClicked: false, type: "e", removed: false, icon: shell},
      {name: "card14", id: 14, isClicked: false, type: "f", removed: false, icon: wave},
      {name: "card15", id: 15, isClicked: false, type: "g", removed: false, icon: pine},
      {name: "card16", id: 16, isClicked: false, type: "h", removed: false, icon: anchor},
    ],
    didWin: false,
    moves: 0,
  };

  flipCardHandler = (id) => {
    console.log(this.state.baseState);
    const newArray = [...this.state.cardsArr];
    // const element = newArray[id - 1];
    let element;
    newArray.forEach(item => {
      if (item.id === id) {
        element = item;
      }
    })

    let sc = [];
    newArray.forEach((card, index) => {
      if (newArray[index].isClicked === true) {
          sc.push(newArray[index]);
      };
      return sc;
    });
    if (sc.length < 2) {
      element.isClicked = !element.isClicked;
    } 
    let prevMoves = this.state.moves;
    prevMoves += 1;
    this.setState({cardsArr: newArray, moves: prevMoves});


    let secondArray = this.state.cardsArr;
    let sc2 = [];
    secondArray.forEach((card, index) => {
      if (secondArray[index].isClicked === true) {
        sc2.push(secondArray[index]);
      }
      return sc2;
    })
    console.log(sc2);

    if (sc2.length === 2) {
      setTimeout(() => {
         //IF CARDS MATCH
         if (sc2[0].type === sc2[1].type) {
           this.removeHandler(sc2[0].id, sc2[1].id);
           this.checkWinHandler();
         } else {
           //IF CARDS DONT MATCH
           this.setFalseHandler();
         }
     }, 1500);
     
    }

  }

  removeHandler = (id1, id2) => {
      let nArr = this.state.cardsArr;
      nArr.forEach((el, index) => {
        if (nArr[index].id === id1) {
            nArr[index].removed = true;
            nArr[index].isClicked = false;

        }
        if (nArr[index].id === id2) {
            nArr[index].removed = true;
            nArr[index].isClicked = false;
        }
      });
      this.setState({cardsArr: nArr});
  }

  setFalseHandler = () => {
    const nArr = this.state.cardsArr;
      nArr.map((card, index) => {
        return nArr[index].isClicked = false;
      })
      this.setState({cardsArr: nArr})
  }


  checkWinHandler = () => {
    const nArr = this.state.cardsArr;
    let didWin = 0;
    for (let i = 0; i < this.state.cardsArr.length; i++) {
      if (nArr[i].removed) {
        didWin++;
      }
    }
    if (didWin === 16) {
      this.setState({didWin: true});
    }
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    array.forEach((item, index) => {
      item.id = index + 1;
    })
    return array;
  }

  restartGame = () => {
    window.location.reload();
  }

  componentDidMount() {
    document.title = "Matching Game";
    let shuffledArr = this.state.cardsArr;
    shuffledArr = this.shuffleArray(shuffledArr);
    this.setState({cardsArr: shuffledArr});
  }

  render() {

    let cardStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
      textAlign: "center",
      transition: "transform 1s",
      transformStyle: "preserve-3d",
      borderRadius: "20px",
      opacity: "1 !important"
    };
    let cardStyle2 = {
      position: "relative",
      width: "100%",
      height: "100%",
      textAlign: "center",
      transition: "opacity 1s ease-out",
      transformStyle: "preserve-3d",
      boxShadow: "0px 0px 10px 10px #79d279",
      borderRadius: "20px",
      opacity: "0",
    }
    let cardStyle3 = {
      position: "relative",
      width: "100%",
      height: "100%",
      textAlign: "center",
      transition: "transform 1s",
      transformStyle: "preserve-3d",
      transform: "rotateY(180deg)",
      borderRadius: "20px",
      opacity: "1"
    }


    let winMessage = "";
    if (this.state.didWin) {
      winMessage = <WinMessage score={this.state.moves} click={this.restartGame}/>;
    }


    let cards = this.state.cardsArr.map((card, index) => {
      return <div className="Ccard"
                  name={card.name} 
                  id={card.id} 
                  key={index}>
                <div onClick={() => this.flipCardHandler(card.id)} 
                    style={this.state.cardsArr[card.id -1].removed ? cardStyle2
                    : this.state.cardsArr[card.id - 1].isClicked ? cardStyle3
                    : cardStyle}>
                  <div className="card__face card__face--front"></div>
                  <div className="card__face card__face--back"><img src={card.icon} alt=""/></div>
                </div>
              </div>
    })

    return (
      <div className="App">
        <h1>Matching Game</h1>
        <div className="Cards">
          {cards}
        </div>
        <h2>Moves: {this.state.moves}</h2>
        {winMessage}
      </div>
    );
  }
  
}

export default App;