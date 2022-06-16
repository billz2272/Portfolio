import React from 'react'
import './Header.css'
import CTA from './CTA'
import Bill from '../../assets/Bill-3.jpg'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header id='header'>
        <div className='container header__container'>
<h3>Hello I'm</h3>
<h1>Bill Zimmer</h1>
<h3 className='text-light'>Fullstack Developer</h3>
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