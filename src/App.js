import { Reset } from "styled-reset";
import Notice from "./components/Event/Notice/Notice";
import Slide from "./components/Event/Slide/Slide";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Notice />
      <Slide />
    </>
  );
}

export default App;
