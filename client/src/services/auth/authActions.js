import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie } from '../../utils';

const backendURL = 'http://localhost:5000';

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // aby przesyłać ciasteczka między domenami

      };

      const { data } = await axios.post(
        `${backendURL}/login`,
        { email, password },
        config
      );

      // store SessionID in cookies
      //const response = await login(data).unwrap();
      //const token = response.data?.token; 
      // setCookie('SessionID', token, { path: '/', secure: true, sameSite: 'None' });
      console.log(data.cookies.SessionID);
      setCookie('SessionID', data);
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)