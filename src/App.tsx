import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection_temp";

import Solutions from "./Component/Solutions";
import Web3Objectives from "./Component/Web3Objectives";
import './App.css';

function App() {
  return (
    <div className="w-screen">
      <Header />
      <HeroSection />
      <Solutions />
      <Web3Objectives />
    </div>
  );
}

export default App;