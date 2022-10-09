import Container from 'react-bootstrap/Container';
import Showoff from './components/Showoff';
import Welcome from './components/Welcome';
import './App.css';
import Navbar from './components/Navbar';
import Display from './components/Display';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
   return (
      <Container fluid className='App'>
         <Navbar />
         <Welcome />
         <Display />
         <Showoff />
         <Testimonials />
         {/* sign up */}
         <FAQ />
         {/* footer w/ TOS and Privacy Policy */}
         <Footer />
      </Container>
   );
}

export default App;
