import React, {useState} from "react";


const FeedButton = () => {


    const handleFeedButtonClick = () => {
        let updateHeart = heart + 1
        setHeart(updateHeart); 
        localStorage.setItem("heart",updateHeart)
        setMsgText(`냐옹이가 ${updateHeart}개 만큼 맛있게 먹었습니다!`)
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(()=>{
          setMsgText(changeText())
        },1300);
    }


    return (
        <div>
            <img src="../images/catFood.png" alt="catFood" width="300" onClick= {handleFeedButtonClick}/>
        </div>
    );
};

export default FeedButton;

