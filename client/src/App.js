import Container from "react-bootstrap/Container"
import Showoff from "./Showoff";
import Welcome from "./Welcome"
import './App.css';
import Navbar from "./Navbar";
import Display from "./Display";
import FAQ from "./FAQ";

function App() {
  return (
    <Container fluid className="App">
      <Navbar />
      <Welcome />
      <Display />
      <Showoff />
      {/* Testimonials */}
      {/* sign up */}
      <FAQ />
      {/* FAQs */}
      {/* footer w/ TOS and Privacy Policy */}
    </Container>
  );
}

export default App;
