import './styles/theme.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Theory from './components/Theory';
import Research from './components/Research';
import DataAnalysis from './components/DataAnalysis';
import CaseAnalysis from './components/CaseAnalysis';
import Team from './components/Team';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Theory />
        <Research />
        <DataAnalysis />
        <CaseAnalysis />
        <Team />
      </main>
    </div>
  );
}

export default App;
