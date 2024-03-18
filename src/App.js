import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Poster from './components/Poster';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header />
      <Poster />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
