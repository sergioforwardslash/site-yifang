import React from 'react'
import { InstagramFeed } from '../../components'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { images } from '../../constants'
import './home.css'

const Home = () => {
  return (
    <div className='home section-padding' style={{backgroundImage: `url(${images.background})`, backgroundSize: '100%'}}>
      <div className='welcome wrapper'>
        <div className=' welcome-info' style={{backgroundImage: `url(${images.teas})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h1>Welcome to Yi Fang Glendale</h1>
          <p>Enjoy a refreshing drink made with our fresh ingredients!</p>

          <a href='https://www.toasttab.com/yifang-fruit-tea-glendale-251-north-brand-boulevard-unit-a-advfe/v3/#d10144b72-2359-4d9e-ac04-725cb5f4d119d6579997c-4428-4e97-aa49-b15f214b149b'>
            <button className='custom-button'>Explore Menu <HiArrowNarrowRight className='button-arrow' /></button></a>
        </div>
      </div>

      <div className='maps wrapper'>
        <div className='maps-info wrapper-info'>
          <h1>Find Us on Brand and California</h1>
            <h2>Located convieniently near the Americana</h2>

          <p>251 N Brand Blvd, Glendale, CA 91203</p>
          <p>Opening Hours</p>
          <p>Mon - Fri: 12:00 pm - 10:00 pm</p>
          <p>Sat - Sun: 12:00 pm - 11:00 pm</p>
        </div>

        <div className='wrapper-map'>
          <iframe title='yifang-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.8652275634863!2d-118.25766048437306!3d34.149789980579584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c1ac4aca4b87%3A0x723db551630ad6ac!2sYifang%20Taiwan%20Fruit%20Tea%20-%20Glendale!5e0!3m2!1sen!2sus!4v1675210987806!5m2!1sen!2sus" />
        </div>
        {/* <span class="yelp-review" data-review-id="NiRKoQ8ZS-ugig8pB_P4MA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=3qXqoRdgfx-VPEKc9TsIag" rel="nofollow noopener">Madelyn L.</a>'s <a href="https://www.yelp.com/biz/yifang-taiwan-fruit-tea-glendale?hrid=NiRKoQ8ZS-ugig8pB_P4MA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/hjZrBeZS7bstV6cEbCzpNQ" rel="nofollow noopener">Yifang Taiwan Fruit Tea</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span> */}
      </div>

   
      <div>
        <InstagramFeed  token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
      </div>
    </div>
  )
}

export default Home