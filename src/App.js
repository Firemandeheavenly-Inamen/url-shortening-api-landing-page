import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import InfoSection from './components/statistics/statistics';
import ShortenedApp from './components/form/ShortenedApp'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ShortenedApp/>
      <InfoSection/>
    </div>
  );
}

export default App;
