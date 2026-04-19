import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Webinar from "./pages/Webinar";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect homepage */}
        <Route path="/" element={<Navigate to="/webinar" replace />} />

        <Route path="/webinar" element={<Webinar />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;