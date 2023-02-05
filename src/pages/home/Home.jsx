import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import images from '../../assets/images'
import './home.css'

const Home = () => {
  return (
    <div className='home section-padding' style={{backgroundImage: `url(${images.background})`, backgroundSize: '100%'}}>
      <div className='welcome wrapper'>
        <div className='wrapper-info welcome-info' style={{backgroundImage: `url(${images.threedrink})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <h1>Welcome to Yi Fang Glendale</h1>
          <p className='p__opensans'>Enjoy a refreshing drink made with our fresh ingredients!</p>

          <a href='/menu'><button className='custom-button'>Explore Menu <HiArrowNarrowRight className='button-arrow' /></button></a>
        </div>
      </div>

      <div className='maps wrapper'>
        <div className='maps-info wrapper-info'>
          <h1>Come in for a tasty tea</h1>
          <p className='p__opensans'>251 N Brand Blvd, Glendale, CA 91203</p>
          <p className='p__cormorant' style={{ color:'#a73535fa', margin: '2rem 0' }}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 12:00 pm - 10:00 pm</p>
          <p className='p__opensans'>Sat - Sun: 12:00 pm - 11:00 pm</p>
        </div>

        <div className='wrapper-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.8652275634863!2d-118.25766048437306!3d34.149789980579584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c1ac4aca4b87%3A0x723db551630ad6ac!2sYifang%20Taiwan%20Fruit%20Tea%20-%20Glendale!5e0!3m2!1sen!2sus!4v1675210987806!5m2!1sen!2sus" />
        </div>
      </div>
    </div>
  )
}

export default Home