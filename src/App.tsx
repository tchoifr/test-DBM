import "./App.css";
import SectionActualite from "./components/SectionActualite";
import SectionCarousel from "./components/SectionCarousel";
import SectionHeader from "./components/SectionHeader";
import SectionLanding from "./components/SectionLanding";

function App() {
  return (
    <div className="App">
      <SectionHeader />
      <SectionLanding />
      <SectionCarousel />
      <SectionActualite />
    </div>
  );
}

export default App;
