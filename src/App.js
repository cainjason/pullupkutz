import './App.css';
import Header from './Components/Header';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <ContainerMain className="app">
      <Header />
      <Navbar />
      <Body />
      <Footer />
    </ContainerMain>
  );
}

export default App;

const ContainerMain = styled.div``;