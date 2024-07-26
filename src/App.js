import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import NotFoundPage from "./pages/NotFoundPage.js";
import Login from "./pages/Login/index.js";
import Main from "./pages/Main/index.js";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;