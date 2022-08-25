import "./App.css";
import Header from "./Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import Login from "./Login/Login";

import { Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
