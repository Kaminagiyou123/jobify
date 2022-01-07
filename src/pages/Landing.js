import React from 'react'
import { Logo } from '../components'
import main from '../assets/images/main.svg'

import Wrapper from '../assets/wrappers/LandingPage'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracing</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ipsum, perferendis laboriosam veritatis labore assumenda excepturi
            reiciendis odio dicta blanditiis reprehenderit non dolor doloribus
            totam unde architecto perspiciatis! Dolores et labore delectus
            aspernatur beatae! Iure omnis doloribus porro sit nihil!
          </p>
          <button className='btn btn-hero'> Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
