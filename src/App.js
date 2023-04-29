import React,{useState,useEffect,useRef} from "react";
import {Motion, spring} from "react-motion";
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
  //처음 접속 시 로컬스토리지에서 하트 값 가져오기. 없으면 0으로 설정
  let startHeart = (localStorage.getItem("heart"))==null? 0 : parseInt(localStorage.getItem("heart"));
  //하트, 메세지 값 설정
  const [heart, setHeart] = useState(startHeart);
  const [msgText, setMsgText] = useState('');

  function handleButtonClick(){
    //하트 +1 업데이트 후 하트 값에 따라 메세지 변화
    setHeart(heart+1);
    setMsgText(changeText());
  }
  const changeText = () => {
    if(heart<10) return (`냐옹이가 아직 당신을 낯설어합니다.`)
    else if(heart>=10&&heart<30) return ("냐옹이가 당신을 조금은 기억합니다.")
    else if(heart>30) return ("냐옹이가 조금 경 계를 풀었습니다.")
  }  

  //고양이 움직임 표현 -> react-motion 사용해서
  const [isVisible, setIsVisible] = useState(false);

  //const [catImg, setCatImg] = useState(0);
  //const [intervlId, setIntervalId] = useState(null);
  //let timeoutId = useRef(null);
  //const images = [cat, cat2];
           


  useEffect(()=>{
  /*  const id = setInterval(()=>{
      setCatImg(catImg=>(catImg+1)%images.length);
    },1000);
    setIntervalId(id);
    return () => clearInterval(id);
  },[catImg]*/
});                    
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
