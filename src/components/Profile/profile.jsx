import React from 'react';
import s from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
      <div>
      <div>  <img src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img></div>
      <div>  <img src='https://www.meme-arsenal.com/memes/a51a7d2bb58dfa8bad5db2897bd087c7.jpg'></img></div>
      <MyPosts/>
    </div>
    )
}

export default Profile;