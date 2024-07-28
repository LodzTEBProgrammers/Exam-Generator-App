// ProtectedRoute.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { useGetUserQuery } from './services/userService';
import { setCredentials } from './services/auth/authSlice';

const ProtectedRoute = () => {
  const user = useGetUserQuery('user',{
    pollingInterval: 900000, // 15 minutes
  });  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user.data) dispatch(setCredentials(user.data.user))
  }, [user, dispatch]);
  const { userInfo, loading, error } = useSelector((state) => state.auth);

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div className='unauthorized flex flex-col justify-center items-center h-screen'>
        <div className='flex flex-col items-center gap-8 px-10 py-8 bg-[#f1f5f9] rounded-lg shadow-[#171717]/30 shadow-lg'>
          <svg width="80" height="100" viewBox="0 0 80 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="41.0704" width="79" height="56.1429" rx="5.5" fill="#171717" stroke="white"/>
            <path d="M10 36.2891C10 -9.42974 70 -9.42962 70 36.2891" stroke="#171717" stroke-width="6" stroke-linecap="round"/>
          </svg>
          <div className='flex flex-col items-center'>
            <h2 className='font-medium text-[#262626]'>Unauthorized entry:</h2>
            <p className='text-[1rem] text-[#6e6e6e]'>
              <NavLink to='/login' className={'underline'}>Sign in</NavLink> to get access for this site.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // returns child route elements
  return <Outlet />;
};

export default ProtectedRoute;
