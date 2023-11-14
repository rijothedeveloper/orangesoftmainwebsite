import './App.css'
import video from './assets/video/hero_video.mp4'
import logo from './assets/images/logo.png'

function App() {

  return (
    <>

            <video className="hero-section background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
                <source src={video} type="video/mp4" />
            </video>
            <div className="hero-section overlay"></div>
            <section className="hero-content" >
                <div className="nav-section">
                    <div >
                    <img src={logo} />
                    </div>
                    <div className="navbar">
                        <ul>
                            <li><a href="">Services</a></li>
                            <li><a href="">Info</a></li>
                            <li><a href="">Reviews</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                </div>

                <h1>We help small business + nonprofits get online.</h1>
                <h2>We build affordable SEO friendly website and offer an amazing digital marketing</h2>
                <h2>We create content and videos that helps you connect with your target customers.</h2>
                <div className="check-work-button">
                    Check Out Our Work
                </div>
            </section>


    </>
  )
}

export default App
