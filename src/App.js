import React,{useState,useEffect,useRef} from "react";
import cat from './images/cat-FirstMeet.png'
import cat2 from './images/cat-FirstMeet2.png'
import catFood from './images/catFood.png'
import catBook2 from './images/catBook2.png'
import catToy from './images/catToy.png'
import Box from './images/textBoxLong.png'
import feedFood from './components/FeedFood.js'
import MsgText from './components/MsgText.js'
import './App.css';
import axios from 'axios';

function App() {
  const sendRequest = async() => {
    //const response = await axios.get('http://localhost:8090');
  }
  //하트 상태
  let startHeart = (localStorage.getItem("heart"))==null? 0 : parseInt(localStorage.getItem("heart"));
  const [heart, setHeart] = useState(startHeart);
  //메세지 창
  const [msgText, setMsgText] = useState('');
  function handleButtonClick(msgText){
    setMsgText(msgText);
  }

  const [catImg, setCatImg] = useState(0);
  const [intervlId, setIntervalId] = useState(null);
  let timeoutId = useRef(null);

  const images = [cat, cat2];
    
  const changeText = () => {
    if(heart<10) return (`냐옹이가 아직 당신을 낯설어합니다.`)
    else if(heart>=10&&heart<30) return ("냐옹이가 당신을 조금은 기억합니다.")
    else if(heart>30) return ("냐옹이가 조금 경 계를 풀었습니다.")
  }         


  useEffect(()=>{
    sendRequest();
    const id = setInterval(()=>{
      setCatImg(catImg=>(catImg+1)%images.length);
    },1000);
    setIntervalId(id);
    return () => clearInterval(id);
  },[catImg]);                    
  return (
    <div className="App">
      <nav>
        <div class="mainDiv">  
            <img src={images[catImg]} alt="cat" width="500"/> 
            <img src={catBook2} alt="catBook" width="300"/>
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
