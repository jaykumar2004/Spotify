import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import "./output.css";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import { useCookies } from "react-cookie";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  return (
    <div className="w-screen h-screen font-Nunito">
      <BrowserRouter>
        {cookie.token ? (
          //logged in routes
          <Routes>
            <Route path="/" element={<HelloComponent />} />
            <Route path="/home" element={<LoggedInHomeComponent />} />
            <Route path="/uploadSong" element={<UploadSong />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        ) : (
          //logged out routes
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is hello from coponent</div>;
};

export default App;
