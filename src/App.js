import HeaderPage from './Header/Header';
import HomePage from './HomePage/HomePage';
import AboutMePage from './AboutMePage/AboutMePage';
import ProjetosPage from './ProjetosPage/ProjetosPage';
import ContactPage from './ContactPage/ContactPage';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <HeaderPage />
      <div id="home">
        <HomePage />
      </div>
      <div id="about-me">
        <AboutMePage />
      </div>
      <div id="projetos">
        <ProjetosPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
