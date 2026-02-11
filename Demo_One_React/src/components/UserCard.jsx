import React from 'react'
import imgPic from '../assets/img.jpg'
import './UserCard.css'
const UserCard = () => {
    return (
        <div className='user-container'>
            <p id='user-name'>User Card</p>
            <img id='user-img' src={imgPic} alt="user-card" />
            <p id='user-desc'> Description of User Card</p>

        </div>
    )
}

export default UserCard
