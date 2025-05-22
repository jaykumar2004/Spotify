import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import { useState } from "react";
import "./output.css";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import { useCookies } from "react-cookie";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import songContext from "./contexts/songContext";
import Search from "./routes/Search";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [cookie, setCookie] = useCookies(["token"]);

  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div className="w-screen h-screen font-Nunito">
      <BrowserRouter>
        {cookie.token ? (
          //logged in routes

          <songContext.Provider
            value={{
              currentSong,
              setCurrentSong,
              soundPlayed,
              setSoundPlayed,
              isPaused,
              setIsPaused,
            }}
          >
            <Routes>
              <Route path="/" element={<HelloComponent />} />
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/uploadSong" element={<UploadSong />} />
              <Route path="/myMusic" element={<MyMusic />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
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
