import React from 'react';
// import WebGraphic from '../images/web-flow-sample.jpg';
import WebGraphic from '../images/laptop_setup.png';

const Display = () => {
   return (
      <div className='container mb-4'>
         <div className='row'>
            <div className='col'>
               <img className='fluid' alt='product-demo' src={WebGraphic} />
            </div>
         </div>
      </div>
   );
};

export default Display;
