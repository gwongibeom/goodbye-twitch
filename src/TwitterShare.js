import React from 'react'
import './TwitterShare.css'
const TwitterShare = ({ timeLeft }) => {
  const { days, hours, minutes, seconds } = timeLeft

  const korStringTime = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`
  const url = 'https://goodbye-twitch.gwon.us'
  const textPara = `?text=%23굿바이트위치 %0A🕊️트위치 철수까지 남은시간: ${korStringTime} ${url}`
  const shareUrl = `https://twitter.com/intent/tweet${textPara}`

  return (
    <div>
      <a className='x-share-btn' href={shareUrl} data-size='large'>
        𝕏에서 공유하기
      </a>
    </div>
  )
}

export default TwitterShare
