import React from 'react'
import './jobs.css'

import { images } from '../../constants'

const Jobs = () => {
  return (
    <div className='section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='jobs'>
        <div className='jobs-info'>
          <h1>Need a Job?</h1>
          <p className='p__opensans'>Come work for us!</p>
          <a href='/'><button className='custom-button'>Apply Now</button></a>
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

        <div className='jobs-form'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSci079XcMzEHn6IFikBbHP1KCNiYfM8_JCLlwifBSm4oNPHpQ/viewform?embedded=true">Loading…</iframe>
        </div>
      </div>
    </div>
  )
}

export default Jobs