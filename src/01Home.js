import './global.css'

import Projects from './components/Projects'
import Writings from './components/Writings'
import Footer from './components/Footer'

const Home = () => {
    return(
        <div className="home">
            <div className="header">
                <div className="left">
                    <h1>Al Wayis Karnis</h1>
                    <p>UI UX Designer, Indonesia, West Java</p>
                    <div className="scard">
                        <div className="scard-span">ReactJS</div>
                        <div className="scard-span">Phyton</div>
                        <div className="scard-span">Php</div>
                    </div>
                </div>
                <div className="right">
                    <div className="photo"></div>
                </div>
            </div>
            <div className="landing">
                <div className="banner">
                    <div className="subbanner">
                        <div className="greenlamp"></div>
                        <p>Ready for a projects</p>
                    </div>
                </div>
                <div className="landinghead">
                    <h1>Crafting Engaging and Intuitive Web Experiences That Blend Creativity, Functionality, and Aesthetic Excellence</h1>
                </div>
                <div className="landingpara">
                    <p>In the digital world, a website is more than just a platform—it’s an experience. I specialize in designing intuitive and visually captivating websites that not only look stunning but also function seamlessly. By blending creativity with user-centric design principles,</p>
                </div>
            </div>
            <Projects/>
            <Writings/>
            <Footer/>
        </div>
    )
}

export default Home
