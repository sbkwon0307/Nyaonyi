import React,{useState} from "react";
import cat from './images/cat-FirstMeet.png'
import catFood from './images/catFood.png'
import catToy from './images/catToy.png'
import Box from './images/textBoxLong.png'
import feedFood from './pages/FeedFood.js'
import MsgText from './pages/MsgText.js'
import './App.css';

function App() {
  const [heart, setHeart] = useState(parseInt(localStorage.getItem("heart")));
  const feedFood = () => {
                          setHeart(heart+1); 
                          localStorage.setItem("heart",heart);
                        }

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
                  <div class="msgBoxText">
                      <p>냐옹이가 {heart}개 만큼 맛있게 먹었습니다.</p>
                  </div>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
