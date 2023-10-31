import React from 'react'
import '../PagesCss/PageCss.css'
import { useNavigate } from 'react-router-dom'

import { BiHomeAlt2 } from "react-icons/bi"

function PageStart() {
  const navigate = useNavigate();
  return (
    <div className='pageStart-container'>
      <div className='pageStart-wrap'>
        <BiHomeAlt2 size="30" color="gray"/>
        <div className='pageStart-title'>나에게 딱 맞는 주거지역 추천</div>
        <div className='pageStart-text'>
          라이프 스타일 테스트를 통해 나에게 딱 맞는 주거지역을 추천받아보세요.
          <br/>
          질문은 10개 내외로 진행됩니다.
        </div>

        <div className='startbtn'>
          <button className='pagestart-btn' onClick={()=> navigate('/myhome/pagesex')}>
            <sapn>시작하기</sapn>
          </button>
        </div>

      </div>
    </div>
  )
}

export default PageStart