import './App.css';
import Footer from './components/footer/footer'
import GetStarted from './components/Get-Started/getStarted';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import StatsSection from './components/statistics/statistics';
import ShortenedApp from './components/form/ShortenedApp'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GetStarted />
      <Footer />
      <ShortenedApp/>
      <StatsSection/>
    </div>
  );
}

export default App;
