import './App.css'
import logo from './logo.png'
import CountdownTimer from './CountdownTimer'

function App() {
  const twitchDieDay = new Date(2024, 1, 27, 0, 0, 0) // 월은 0부터 시작하므로 1은 2월을 의미합니다.

  return (
    <div className='App'>
      <img className='logo' src={logo} alt='로고' />
      <h2 className='purpleText'>트위치 한국 철수까지...</h2>
      <CountdownTimer targetDate={twitchDieDay.toISOString()} />
      <div className='madeBys'>
        <a className='madeBy' href='https://twitter.com/_ggbDev_'>
          이거 만든 사람: 권기범
        </a>
        <a
          className='madeBy'
          href='https://github.com/gwongibeom/goodbye-twitch'
        >
          깃허브
        </a>
      </div>
    </div>
  )
}

export default App
