import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Head from "./components/ui/Head";
import Footer from "./components/ui/Footer";
import HomePage from "./components/pages/HomePage";
import ItineraryPage from "./components/pages/ItineraryPage";
import StoryPage from "./components/pages/StoryPage";
// import HiddenGems from "./components/pages/HiddenGems";
import SafetyPage from "./components/pages/SafetyPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/stories" element={<StoryPage />} />
        {/* <Route path="/hidden-gems" element={<HiddenGems />} /> */}
        <Route path="/safety" element={<SafetyPage />} />
      </Routes>
    </Router>
  );
}

export default App;

