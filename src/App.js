import './App.css';
import Footer from './components/footer/footer'
import GetStarted from './components/Get-Started/getStarted';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
