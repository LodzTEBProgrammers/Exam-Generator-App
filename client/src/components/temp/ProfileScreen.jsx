import React from 'react';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <div>Loading...</div>; // or some other placeholder or redirect
  }

  return (
    <div>
      <h1>Profile Screen</h1>
      <p>Welcome, {userInfo.first_name} {userInfo.last_name}!</p>
    </div>
  );
};

export default ProfileScreen;
