import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img>
      </div>
      <div className={s.descriptionBlock}>
      ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;

