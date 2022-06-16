import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {GrGithub} from 'react-icons/gr'
import {FaFacebookSquare} from 'react-icons/fa'

const Headersocials = () => {
  return (
    <div className=' Header__socials'>
<a href='https://linkedin.com' target='_blank'><ImLinkedin /></a>
<a href='https://github.com' target='_blank'><GrGithub /></a>
<a href='https://facebook.com' target='_blank'><FaFacebookSquare /></a>
    </div>
  )
}

export default Headersocials