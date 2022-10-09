import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import WebGraphic from '../images/web-flow-sample.jpg';

const Display = () => {
   return (
      <Container className='mb-4'>
         <Image fluid src={WebGraphic} />
      </Container>
   );
};

export default Display;
