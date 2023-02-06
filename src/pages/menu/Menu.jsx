import React from 'react'
import './menu.css'

import images from '../../assets/images'

const Menu = () => {
  return (
    <div className='menu section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='wrapper'>
        <div className='menu-info'>
          <h1>Menu</h1>
          <p className='p__opensans'> place menu here</p>
        </div>
      </div>
    </div>
  )
}

export default Menu