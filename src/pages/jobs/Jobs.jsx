import React from 'react'
import './jobs.css'

import images from '../../assets/images'

const Jobs = () => {
  return (
    <div className='jobs section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='wrapper'>
        <div className='jobs-info'>
          <h1>Jobs</h1>
          <p className='p__opensans'>Looking to work for us?</p>
          <a href='/'><button>Contact</button></a>
        </div>
      </div>
    </div>
  )
}

export default Jobs