import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div name='footer' className='bg-[#000] pt-[170px] text-center text-white'>
      <div className='container mx-auto'>
        <div className='grid'>
          <div class="col-md-3">
            <div class="inror_box">
              <h3 className='text-white text-xl text-left pb-[20px] font-semibold'>INFORMATION </h3>
              <p className='text-white text-lg text-left pr-[31px] font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="inror_box">
              <h3 className='text-white text-xl text-left pb-[20px] font-semibold'>MY ACCOUNT </h3>
              <p className='text-white text-lg text-left pr-[31px] font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="inror_box">
              <h3 className='text-white text-xl text-left pb-[20px] font-semibold'>ABOUT  </h3>
              <p className='text-white text-lg text-left pr-[31px] font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="inror_box">
              <h3 className='text-white text-xl text-left pb-[20px] font-semibold'>CONTACTS  </h3>
              <p className='text-white text-lg text-left pr-[31px] font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div className='container mx-auto'>
          <div class="row">
            <div class="col-md-12">
              <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer