import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PillBackground from "./components/PillBackground";

function App() {

  return (
    <BrowserRouter basename="/ReminderRx">
      <PillBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
