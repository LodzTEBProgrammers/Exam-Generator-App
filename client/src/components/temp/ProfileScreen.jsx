// ProfileScreen.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../services/auth/authActions'; // dostosuj ścieżkę do odpowiedniego miejsca
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(userLogout())
      .unwrap()
      .then(() => {
        // Opcjonalne: dodatkowe czynności po wylogowaniu, np. przekierowanie do innej strony
        console.log('User logged out successfully');
        navigate("/")
        window.location.reload()

      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div>
      <h1>Profile Screen</h1>
      {userInfo && (
        <p>
          Welcome, {userInfo.first_name} {userInfo.last_name}!
        </p>
      )}
      <button className='button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileScreen;
