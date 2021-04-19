import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
