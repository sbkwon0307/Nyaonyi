import React from "react";
import cat from './images/cat-FirstMeet.png'
import catFood from './images/catFood.png'
import catToy from './images/catToy.png'
import Box from './images/textBoxLong.png'
import feedFood from './pages/FeedFood.js'
import updateHeart from './pages/MsgText.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="App"></div>
        <div class="mainDiv">  
            <img src={cat} alt="cat" width="500"/>  
            <img src={catFood} alt="catFood" width="300" 
                onClick= {feedFood}/>
            <img src={catToy} alt="catToy" width="300"/>
            <div class="msgBoxWrap">
                <div class="msgBoxImg">
                    <img src={Box} alt="Box"  width="1200"/>
                </div>
                <div class="msgBoxText">
                    <MsgText/>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
