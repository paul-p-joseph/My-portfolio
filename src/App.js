import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
