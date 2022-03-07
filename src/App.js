import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import StatsSection from './components/statistics/statistics';
import ShortenedApp from './components/form/ShortenedApp'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ShortenedApp/>
      <StatsSection/>
    </div>
  );
}

export default App;
