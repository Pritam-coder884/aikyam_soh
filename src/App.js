import React, { useEffect } from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/Home/Home";
import HomeChat from "./pages/chat/HomeChat";
import AuthSignup from "./pages/signupAuth/Register";
import ChatPage from "./components/chatComponent/ChatPage";
import socketIO from "socket.io-client";
import { useNavigate, Routes, Route } from "react-router-dom";
import Event from "./pages/events/Event";
import StoriesPage from "./pages/Stories/Stories";
import ReunionPage from "./pages/Reunion/ReunionPage";
import GalleryPage from "./pages/gallery/Gallery";
import Job from "./pages/job/Job";
const socket = socketIO.connect("http://localhost:9000");
// const socket = socketIO.connect('http://localhost:9000');

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/events" element={<Event />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/authsignup" element={<AuthSignup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/homechat" element={<HomeChat socket={socket} />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        <Route path="/stories" element={<StoriesPage />}></Route>
        <Route path="/reunion" element={<ReunionPage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/job" element={<Job />}></Route>
        {/* <Route path="/homechat" element={<HomeChat socket={socket} />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
