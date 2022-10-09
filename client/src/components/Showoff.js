import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Showoff1 from '../images/showoff_1.jpg';
import Showoff2 from '../images/showoff_2.jpg';
import Showoff3 from '../images/showoff_3.jpg';

const Showoff = () => {
   return (
      <Container>
         <Row>
            <Col>
               <Card>
                  <Card.Img variant='top' src={Showoff1} />
                  <Card.Body>
                     <Card.Title>Card title</Card.Title>
                     <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                     </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                     <small className='text-muted'>Last updated 3 mins ago</small>
                  </Card.Footer>
               </Card>
            </Col>
            <Col>
               <Card>
                  <Card.Img variant='top' src={Showoff2} />
                  <Card.Body>
                     <Card.Title>Card title</Card.Title>
                     <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                     </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                     <small className='text-muted'>Last updated 3 mins ago</small>
                  </Card.Footer>
               </Card>
            </Col>
            <Col>
               <Card>
                  <Card.Img variant='top' src={Showoff3} />
                  <Card.Body>
                     <Card.Title>Card title</Card.Title>
                     <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to show
                        that equal height action.
                     </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                     <small className='text-muted'>Last updated 3 mins ago</small>
                  </Card.Footer>
               </Card>
            </Col>
         </Row>
      </Container>
   );
};

export default Showoff;
