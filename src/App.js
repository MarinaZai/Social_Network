import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes } from 'react-router-dom';
import store from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer store={props.store} />} />
            <Route path='/profile' element={<Profile store={props.store} />} />
          </Routes>
        </div>
      </div>
   );
}

export default App;
