import React from 'react'
import './catering.css'

import images from '../../assets/images'

const Catering = () => {
  return (
    <div className='catering section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='wrapper'>
        <div className='catering-info' style={{ backgroundImage: `url(${images.catering})`, backgroundSize: '100%' }}>
          <h1>Catering</h1>
          <p className='p__opensans'>Book us for you next event!</p>
          <a href='/'><button>Contact</button></a>
        </div>
      </div>
    </div>
  )
}

export default Catering