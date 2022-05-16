// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import useAuth from "../src/hooks/useAuth";
import { KEY } from "./localKey";




// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchPage from "./components/SearchBar/SearchBar";






function App() {

const [user, token] = useAuth();
const [videos, setVideos] = useState([]);
const [searchTerm, setSearchTerm] = useState("castles");

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos(){
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&type=video&relatedToVideo&part=snippet&maxResults=5`);
      setVideos(response.data.items);
      console.log(videos)
    } catch (error) {
      console.log(error.message);
    }
  };






  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage videos ={videos}  />
            </PrivateRoute>
          }
        />
        <SearchPage setSearchTerm={setSearchTerm} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
          <Route path="/videopage" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
