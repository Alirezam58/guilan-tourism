import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='videos/video-1.mp4' autoPlay loop muted />
            <h1>طبیعت بی نظیر گیلان</h1>
            <p>سفر به گیلان را امروز آغاز نمایید</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>آغاز نمایید</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>بیشتر ببینید <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection
