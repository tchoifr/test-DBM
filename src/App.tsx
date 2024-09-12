import "./App.css";
import SectionCarousel from "./components/SectionCarousel";
import SectionHeader from "./components/SectionHeader";
import SectionLanding from "./components/SectionLanding";

function App() {
  return (
    <div className="App">
      <SectionHeader />
      <SectionLanding />
      <SectionCarousel />
    </div>
  );
}

export default App;
