import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes } from 'react-router-dom';


function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
          </Routes>
        </div>
      </div>
   );
}

export default App;
