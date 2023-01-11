import React,{useState,useEffect,useRef} from "react";
import cat from './images/cat-FirstMeet.png'
import catFood from './images/catFood.png'
import catToy from './images/catToy.png'
import Box from './images/textBoxLong.png'
import feedFood from './pages/FeedFood.js'
import MsgText from './pages/MsgText.js'
import './App.css';

function App() {
  let startHeart = (localStorage.getItem("heart"))==null? 0 : parseInt(localStorage.getItem("heart"));
  const [heart, setHeart] = useState(startHeart);
  let timeoutId = useRef(null);
  const changeText = () => {
                        if(heart<10) return (`냐옹이가 아직 당신을 낯설어합니다.`)
                        else if(heart>=10&&heart<30) return ("냐옹이가 당신을 조금은 기억합니다.")
                        else if(heart>30) return ("냐옹이가 조금 경계를 풀었습니다.")
                        }
  const feedFood = () => {
                          let updateHeart = heart + 1
                          setHeart(updateHeart); 
                          localStorage.setItem("heart",updateHeart)
                          setMsgText(`냐옹이가 ${updateHeart}개 만큼 맛있게 먹었습니다!`)
                          timeoutId.current = setTimeout(()=>{
                            setMsgText(changeText())
                          },3000);
                        }
  const [msgText, setMsgText] = useState(changeText());
  useEffect(()=>{
      return () => clearTimeout(timeoutId.current);
  },[]);                      
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
                      <p>{msgText}</p>
                  </div>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
