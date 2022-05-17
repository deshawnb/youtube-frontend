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
import SearchPage from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList"

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {

  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([])
  let searchTerm = 'skyrim'


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






  return (
    <div>
      <Navbar/>
      <SearchPage setSearchTerm={newSearch}/>
      <CommentList parentComments={comments}/>
      {/* <CommentForm addNewCommentProperty={addNewComment}/> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage videos ={videos}  />
            </PrivateRoute>
          }
        />
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
