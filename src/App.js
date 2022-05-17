// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import useAuth from "../src/hooks/useAuth";
import { KEY } from "./localKey";
import { Outlet, Link } from "react-router-dom";




// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchPage from "./components/SearchBar/SearchBar";
import VideoPage from "./pages/VideoPage/VideoPage";







function App() {

const [user, token] = useAuth();
const [videos, setVideos] = useState([]);
const [searchTerm, setSearchTerm] = useState("castles");
const [videoId, setVideoId] = useState("5qap5aO4i9A")
const [singleVideo, setSingleVideo] = useState({})

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
              <HomePage videoId={videoId} videos ={videos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setVideoId={setVideoId} singleVideo={singleVideo} setSingleVideo={setSingleVideo} />
            </PrivateRoute>
          }
        />
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="videopage" element={<VideoPage searchTerm={searchTerm} videoId={videoId} setVideoId={setVideoId} singleVideo={singleVideo}/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} >
          <Route path="videopage" element={<VideoPage />} />
        </Route>
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
