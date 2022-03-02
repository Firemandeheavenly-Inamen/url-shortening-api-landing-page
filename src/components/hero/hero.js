import React from 'react'
import './hero.css';
import {ReactComponent as Illustrator} from '../../images/illustration-working.svg';

const Hero = () => {
  return (
    <main>
        <div className="main-wrapper">
            <div className="main-left">
                <h1 className="title">More than just shorter links</h1>
                <p className="subheading">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="getstarted">Get Started</button>
            </div>
            <div className="main-right">
                <Illustrator className="illustrator"/>
            </div>
        </div>
    </main>
  )
}

export default Hero