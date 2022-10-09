import React from 'react';

const FAQ = () => {
   return (
      <div className='container'>
         <div className='row'>
            <div className='col'>
               <div className='accordion accordion-flush' id='accordionFlushExample'>
                  <div className='accordion-item'>
                     <div className='accordion-header' id='flush-headingOne'>
                        <button
                           className='accordion-button collapsed'
                           type='button'
                           data-bs-toggle='collapse'
                           data-bs-target='#flush-collapseOne'
                           aria-expanded='false'
                           aria-controls='flush-collapseOne'
                        >
                           <h3>Question #1</h3>
                        </button>
                     </div>
                     <div
                        id='flush-collapseOne'
                        className='accordion-collapse collapse'
                        aria-labelledby='flush-headingOne'
                        data-bs-parent='#accordionFlushExample'
                     >
                        <div className='accordion-body'>
                           Placeholder content for this accordion, which is intended to demonstrate
                           the <code>.accordion-flush</code> class. This is the first item's
                           accordion body.
                        </div>
                     </div>
                  </div>
                  <div className='accordion-item'>
                     <div className='accordion-header' id='flush-headingTwo'>
                        <button
                           className='accordion-button collapsed'
                           type='button'
                           data-bs-toggle='collapse'
                           data-bs-target='#flush-collapseTwo'
                           aria-expanded='false'
                           aria-controls='flush-collapseTwo'
                        >
                           <h3>Question #2</h3>
                        </button>
                     </div>
                     <div
                        id='flush-collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='flush-headingTwo'
                        data-bs-parent='#accordionFlushExample'
                     >
                        <div className='accordion-body'>
                           Placeholder content for this accordion, which is intended to demonstrate
                           the <code>.accordion-flush</code> class. This is the second item's
                           accordion body. Let's imagine this being filled with some actual content.
                        </div>
                     </div>
                  </div>
                  <div className='accordion-item'>
                     <div className='accordion-header' id='flush-headingThree'>
                        <button
                           className='accordion-button collapsed'
                           type='button'
                           data-bs-toggle='collapse'
                           data-bs-target='#flush-collapseThree'
                           aria-expanded='false'
                           aria-controls='flush-collapseThree'
                        >
                           <h3>Question #3</h3>
                        </button>
                     </div>
                     <div
                        id='flush-collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='flush-headingThree'
                        data-bs-parent='#accordionFlushExample'
                     >
                        <div className='accordion-body'>
                           Placeholder content for this accordion, which is intended to demonstrate
                           the <code>.accordion-flush</code> class. This is the third item's
                           accordion body. Nothing more exciting happening here in terms of content,
                           but just filling up the space to make it look, at least at first glance,
                           a bit more representative of how this would look in a real-world
                           application.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FAQ;
