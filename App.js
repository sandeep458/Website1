import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Header/Navbar';
import Search from './components/Body/Search/Search';
import PhotoGallery from './components/Gallery/PhotoGallery';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

 const App =()=> {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <PhotoGallery />
       <Button />
   <Footer />
      </div>
    )
  }

export default App;
