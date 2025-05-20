import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import "./output.css"
import Signup from "./routes/Signup";
import Home from "./routes/Home";

function App() {
  return (
    <div className="w-screen h-screen font-Nunito">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HelloComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is hello from coponent</div>;
};

export default App;
