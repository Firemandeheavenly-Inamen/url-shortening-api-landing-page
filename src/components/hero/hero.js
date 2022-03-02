import React from 'react'
import './hero.css';
import {ReactComponent as Illustrator} from '../../images/illustration-working.svg';

const Hero = () => {
  return (
    <main>
        <div className="main-wrapper">
            <div className="main-left">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights</p>
                <button>Get Started</button>
            </div>
            <div className="main-right">
                <Illustrator />
            </div>
        </div>
    </main>
  )
}

export default Hero