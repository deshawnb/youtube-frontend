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
import Videopage from "./pages/VideoPage/Videopage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import SearchPage from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {

  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [singleVideo, setSingleVideo] = useState({})
  const [relatedVideos, setRelatedVideos] = useState([])
  let searchTerm = "skyrim"



  useEffect(() => {
    fetchVideos(searchTerm);
  }, []);

  function newSearch(filter){
    searchTerm = filter;
    fetchVideos(searchTerm)
  }

  async function fetchVideos(searchTerm){
    try {
      console.log(searchTerm)
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&type=video&relatedToVideo&part=snippet&maxResults=5`);
      setVideos(response.data.items);
      console.log(videos)
    } catch (error) {
      console.log(error.message);
    }
  };






  return (
    <div>
      <Navbar/>
       <SearchPage setSearchTerm={newSearch}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage  videos ={videos}  singleVideo={singleVideo} setSingleVideo={setSingleVideo} />
            
            </PrivateRoute>

          }
        />
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="videopage" element={<Videopage KEY={KEY} videos={videos} searchTerm={searchTerm} singleVideo={singleVideo} relatedVideos={relatedVideos} setSingleVideo={setSingleVideo} setRelatedVideos={setRelatedVideos}/>}/>
         
        
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
