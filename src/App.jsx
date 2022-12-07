import './App.css';
import NavBar from "./components/layout/NavBar"
import Header from "./components/layout/Header"
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/layout/Footer';
import Contact from './components/layout/Contact';
import Service from './components/layout/Service';

function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Service></Service>
      <ItemListContainer/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
