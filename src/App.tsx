import Header from "./Component/Header";
import Herosection from "./Component/Herosection";
import Solutions from "./Component/Solutions";
import Web3Objectives from "./Component/Web3Objectives";
import './App.css';

function App() {
  return (
    <div className="w-screen">
      <Header />
      <Herosection />
      <Solutions />
      <Web3Objectives />
    </div>
  );
}

export default App;