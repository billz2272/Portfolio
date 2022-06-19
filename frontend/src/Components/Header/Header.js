import React from 'react'
import './Header.css'
import CTA from './CTA'
import Bill from '../../assets/vendet.jpg'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header id='header'>
        <div className='container header__container'>
<h3>Hello I'm</h3>
<h1>William(Billy) Zimmerman</h1>
<p className="blink">You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...You got hacked...</p>
<h3 className='text-light'>I've been hacked and back.</h3>
<CTA />
<HeaderSocials />
<div className='Bill'>
<img className='img-bill' src={Bill} alt='A perfect pic '/>




</div>




</div>
    </header>
  )
}

export default Header