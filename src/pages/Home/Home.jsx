import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../assets/hero_banner.jpg'
import HeroTitle from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero-banner">
            <img src= {HeroBanner} alt="" className='banner-img'></img>
        <div className="hero-title">
            <img src={HeroTitle} alt='' className='hero-title-img'></img>
            <p> Discovering his ties to a secret ancient order a young
              man living in modern Istanbul embarks on a quest to save the
              city from an inmortal enemy.
            </p>
            <div className="hero-buttons">
                <button className='button'>
                    <img src={play_icon} alt=''></img>
                    Play
                </button>
                <button className='button dark-button'>
                    <img src={info_icon} alt=''></img>
                    More Info
                </button>
            </div>
            <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home