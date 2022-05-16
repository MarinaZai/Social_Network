import React from 'react';
import s from './profile.module.css'

const Profile = () => {
    return (
      <div className='content'>
      <div>  <img src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img></div>
      <div>  <img src='https://www.meme-arsenal.com/memes/a51a7d2bb58dfa8bad5db2897bd087c7.jpg'></img></div>
      <div>
        My posts
        <div>
          New Posts
        </div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
    )
}

export default Profile;