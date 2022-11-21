import React from 'react'
import '../assets/scss/home.scss'
import Slider from '../components/Slider'

const Home = () => {
  return (
  <div className='home'>
    <div className='home-slider'>
      <div className='content'>
        <ul>
          <li>Inspiring stories of rural women adapting to climate change impacts.</li>
          <li>A platform for these stories to be heard.</li>
        </ul>
      </div>
      <div className='slider'>
        <Slider/>
      </div>
      <div className='content-hidden'>
        <ul>
          <li>Inspiring stories of rural women adapting to climate change impacts.</li>
          <li>A platform for these stories to be heard.</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Home