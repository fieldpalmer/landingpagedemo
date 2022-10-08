import Container from "react-bootstrap/Container"
import Showoff from "./Showoff";
import Welcome from "./Welcome"
import './App.css';
import Navbar from "./Navbar";

function App() {
  return (
    <Container fluid className="App">
      <Navbar />
      <Welcome />
      <Showoff />
    </Container>
  );
}

export default App;
