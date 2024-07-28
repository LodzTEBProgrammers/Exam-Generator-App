import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCookie } from '../../utils';

const backendURL = 'http://localhost:5000';

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // aby przesyłać ciasteczka między domenami
      };

      const loginResponse = await axios.post(
        `${backendURL}/login`,
        { email, password },
        config
      );

      // idk dlaczego nie trzeba dawać setCookie

      //      setCookie('SessionID', loginResponse.data.cookies.SessionID);
      // Drugie zapytanie do pobrania danych użytkownika
      const userResponse = await axios.get(
        `${backendURL}/user`,
        config
      );

      const { data: userData } = userResponse;
      return userData.user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else if (error.message) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

// authActions.js
export const userLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const config = {
        withCredentials: true, // przesyłaj ciasteczka między domenami
      };

      const response = await axios.get(`${backendURL}/logout`, config);

      return response.data; // zwróć dane z odpowiedzi, jeśli potrzebne
    } catch (error) {
      // obsługa błędów
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else if (error.message) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }
  }
);