import React from 'react'
import './catering.css'

import { images } from '../../constants'

const Catering = () => {
  return (
    <div className='catering section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='wrapper catering-container'>
        <div className='catering-info' style={{ backgroundImage: `url(${images.catering})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>Catering</h1>
          <p className='p__opensans'>Book us for you next event!</p>
          <a href='/catering/order'><button className="custom-button">
              <span className="custom-span">
                Contact
              </span>
              <svg
                className="custom-svg"
                viewBox="-5 -5 110 110"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="custom-path"
                  d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"
                />
              </svg>
            </button></a>
        </div>
      </div>
    </div>
  )
}

export default Catering