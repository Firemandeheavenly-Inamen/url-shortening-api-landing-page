import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import ShortenedApp from './components/form/ShortenedApp'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ShortenedApp/>
    </div>
  );
}

export default App;
