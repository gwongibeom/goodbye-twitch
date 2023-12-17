import React, { useState, useEffect } from 'react'
import moment from 'moment'
import TwitterShare from './TwitterShare'
import './CountdownTimer.css'

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [targetDate])

  function calculateTimeLeft(targetDate) {
    const now = moment()
    const target = moment(targetDate)
    const duration = moment.duration(target.diff(now))

    const days = Math.floor(duration.asDays())
    const hours = duration.hours()
    const minutes = duration.minutes()
    const seconds = duration.seconds()

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  return (
    <div className='CountdownTimer'>
      <h1>
        {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분{' '}
        {timeLeft.seconds}초 남음
      </h1>
      <div>
        <TwitterShare timeLeft={{ ...timeLeft }} />
      </div>
    </div>
  )
}

export default CountdownTimer
