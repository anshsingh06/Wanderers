import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Head from "./components/ui/Head";
import HomePage from "./components/pages/HomePage";
import ItineraryPage from "./components/pages/ItineraryPage";
// import Stories from "./components/pages/Stories";
// import HiddenGems from "./components/pages/HiddenGems";
// import Safety from "./components/pages/Safety";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        {/* <Route path="/stories" element={<Stories />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
        <Route path="/safety" element={<Safety />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

