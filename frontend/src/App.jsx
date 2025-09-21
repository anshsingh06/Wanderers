import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Head from "./components/ui/Head";
import HomePage from "./components/pages/HomePage";
import ItineraryPage from "./components/pages/ItineraryPage";
import StoryPage from "./components/pages/StoryPage";
import HiddenGems from "./components/pages/HiddenGems";
import SafetyPage from "./components/pages/SafetyPage";
import AttractionsPage from "./components/pages/AttractionsPage";
import CraftsPage from "./components/pages/CraftsPage";
import Bot from "./components/chatbot/bot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/stories" element={<StoryPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
        <Route path="/AttractionsPage" element={<AttractionsPage/>} />
        <Route path="/CraftsPage" element={<CraftsPage />} />
        <Route path="/chatbot" element={<Bot />} />
      </Routes>
    </Router>
  );
}

export default App;

