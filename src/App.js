import React, { useEffect } from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/Home/Home";
import HomeChat from "./pages/chat/HomeChat";
import ChatPage from "./components/chatComponent/ChatPage";
import socketIO from "socket.io-client";
import { useNavigate, Routes, Route } from "react-router-dom";
import StoriesPage from "./pages/Stories/Stories";
import ReunionPage from "./pages/Reunion/ReunionPage";
const socket = socketIO.connect("http://localhost:9000");

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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/homechat" element={<HomeChat socket={socket} />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        <Route path="/stories" element={<StoriesPage />}></Route>
        <Route path="/reunion" element={<ReunionPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
