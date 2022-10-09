import React from 'react';
import Testimonial1 from '../images/testimonial1.jpg';
import Testimonial2 from '../images/testimonial2.jpg';
import Testimonial3 from '../images/testimonial3.jpg';

const Testimonials = () => {
   return (
      <div className='container my-5'>
         <div className='row'>
            <div className='col'>
               <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
                  <div className='carousel-indicators'>
                     <button
                        type='button'
                        data-bs-target='#carouselExampleCaptions'
                        data-bs-slide-to='0'
                        className='active'
                        aria-current='true'
                        aria-label='Slide 1'
                     ></button>
                     <button
                        type='button'
                        data-bs-target='#carouselExampleCaptions'
                        data-bs-slide-to='1'
                        aria-label='Slide 2'
                     ></button>
                     <button
                        type='button'
                        data-bs-target='#carouselExampleCaptions'
                        data-bs-slide-to='2'
                        aria-label='Slide 3'
                     ></button>
                  </div>
                  <div className='carousel-inner'>
                     <div className='carousel-item active'>
                        <img src={Testimonial1} className='d-block w-100' alt='...' />
                        <div className='carousel-caption d-none d-md-block'>
                           <h5>First slide label</h5>
                           <p>Some representative placeholder content for the first slide.</p>
                        </div>
                     </div>
                     <div className='carousel-item'>
                        <img src={Testimonial2} className='d-block w-100' alt='...' />
                        <div className='carousel-caption d-none d-md-block'>
                           <h5>Second slide label</h5>
                           <p>Some representative placeholder content for the second slide.</p>
                        </div>
                     </div>
                     <div className='carousel-item'>
                        <img src={Testimonial3} className='d-block w-100' alt='...' />
                        <div className='carousel-caption d-none d-md-block'>
                           <h5>Third slide label</h5>
                           <p>Some representative placeholder content for the third slide.</p>
                        </div>
                     </div>
                  </div>
                  <button
                     className='carousel-control-prev'
                     type='button'
                     data-bs-target='#carouselExampleCaptions'
                     data-bs-slide='prev'
                  >
                     <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                     <span className='visually-hidden'>Previous</span>
                  </button>
                  <button
                     className='carousel-control-next'
                     type='button'
                     data-bs-target='#carouselExampleCaptions'
                     data-bs-slide='next'
                  >
                     <span className='carousel-control-next-icon' aria-hidden='true'></span>
                     <span className='visually-hidden'>Next</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
