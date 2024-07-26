import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import NotFoundPage from "./pages/NotFoundPage.js";
import Login from "./pages/Login/index.js";
import Main from "./pages/Main/index.js";
import Start from "./pages/Start/index.js";
import ShowAll from "./pages/ShowAll/index.js";
import ShowDate from "./pages/ShowDate/index.js";
import ShowWeather from "./pages/ShowWeather/index.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/all" element={<ShowAll />} />
          <Route path="/date" element={<ShowDate />} />
          <Route path="/weather" element={<ShowWeather />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
