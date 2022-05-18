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
import Videopage from "./pages/VideoPage/Videopage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import SearchPage from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList"
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {

  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState("5qap5aO4i9A")
  const [singleVideo, setSingleVideo] = useState({})
  const [comments, setComments] = useState([])
  const [relatedVideos, setRelatedVideos] =useState([])
  let searchTerm = "skyrim"


  useEffect(() => {
    fetchVideos(searchTerm);
    getAllComments();
  }, []);

  async function getAllComments(){
    let response = await axios.get('http://127.0.0.1:8000/api/comment/all');
    setComments(response.data);
  }

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
  async function fetchRelatedVideos(singleVideo){
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${singleVideo.id.videoId}&key=${KEY}&type=video&relatedToVideo&part=snippet&maxResults=5`);
      setRelatedVideos(response.data.items);
      console.log(relatedVideos)
    } catch (error) {
      console.log(error.message);
    }
  };






  return (
    <div>
      <Navbar/>
      <SearchPage setSearchTerm={newSearch}/>
      {/* <CommentList parentComments={comments}/> */}
      {/* <CommentForm addNewCommentProperty={addNewComment}/> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage videoId={videoId} videos ={videos}  setVideoId={setVideoId} singleVideo={singleVideo} setSingleVideo={setSingleVideo} />
            </PrivateRoute>

          }
        />
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="videopage" element={<Videopage fetchRelatedVideos={fetchRelatedVideos} videos={videos} searchTerm={searchTerm} videoId={videoId} setVideoId={setVideoId} singleVideo={singleVideo}/>}>
          <Route path="relatedvideos" element={<RelatedVideos relatedVideos={relatedVideos} setSingleVideo={setSingleVideo}    />}>
        </Route> 
        </Route>
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
