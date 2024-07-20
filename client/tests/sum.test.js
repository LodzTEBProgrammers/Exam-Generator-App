
import authReducer from '../src/services/auth/authSlice.js'
import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';
test('should handle LOGIN_SUCCESS', () => {
  const initialState = { user: null };
  const action = { type: LOGIN_SUCCESS, payload: { user: { name: 'John Doe' } } };
  const expectedState = {  user: { name: 'John Doe' } };
  expect(authReducer(initialState, action)).toEqual(expectedState);
});
test('should handle LOGOUT', () => {
  const initialState = { isAuthenticated: true, user: { name: 'John Doe' } };
  const action = { type: LOGOUT };
  const expectedState = { isAuthenticated: false, user: null };
  expect(authReducer(initialState, action)).toEqual(expectedState);
});