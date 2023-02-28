import React from 'react'
import './menu.css'

import { images } from '../../constants'

const Menu = () => {
  return (
    <div className='section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='jobs'>
        <div className='jobs-info'>
          <h1>Need a menu?</h1>
          <p className='p__opensans'>Come work for us!</p>
         
        </div>

        <div className='jobs-description'>
          <h2>
            What we offer:
          </h2>
          <ul>
            <li>Work/Life Balance</li>
            <li>Friendly Staff</li>
            <li>Complimentary Drinks</li>
            <li>etc.</li>
          </ul>
        </div>

     
      </div>
    </div>
  )
}

export default Menu