import './App.css'
import video from './assets/video/hero_video.mp4'

function App() {

  return (
    <>
        <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
            <source src={video} type="video/mp4" />
        </video>
        <h1>THIS IS A RIVER.</h1>
        <h2>How majestic.</h2>
    </>
  )
}

export default App
