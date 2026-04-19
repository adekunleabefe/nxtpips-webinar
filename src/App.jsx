import { BrowserRouter, Routes, Route } from "react-router-dom";
import Webinar from "./pages/Webinar";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;