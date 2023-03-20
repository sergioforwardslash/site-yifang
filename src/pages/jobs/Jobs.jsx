import React from 'react'
import './jobs.css'

import { images } from '../../constants'

const Jobs = () => {
  return (
    <div className='section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='jobs'>
        {/* <div className='jobs-info'>
          <h1>Need a Job?</h1>
          <p className='p__opensans'>Come work for us!</p>
         
        </div> */}

        <div className='jobs-form'>
        <iframe title='jobs-form' src="https://docs.google.com/forms/d/e/1FAIpQLSci079XcMzEHn6IFikBbHP1KCNiYfM8_JCLlwifBSm4oNPHpQ/viewform?embedded=true">Loading…</iframe>
        </div>

      </div>
    </div>
  )
}

export default Jobs