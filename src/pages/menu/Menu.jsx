import React from 'react'
import './menu.css'

import { images } from '../../constants'

const Menu = () => {
  return (
    <div className='menu section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='wrapper'>
        <div className='menu-info'>
          <h1>Menu</h1>
          <p className='p__opensans'>Check out our most up to date menu below!</p>
          <a href='https://www.toasttab.com/yifang-fruit-tea-glendale-251-north-brand-boulevard-unit-a-advfe/v3/#d10144b72-2359-4d9e-ac04-725cb5f4d119d6579997c-4428-4e97-aa49-b15f214b149b'>
            <button className='custom-button'>Menu</button>
          </a>
        </div>
        <div className='menu-img'>
          <img src={images.yiFangPineapple} alt="yifang pineapple" />
        </div>
      </div>
    </div>
  )
}

export default Menu