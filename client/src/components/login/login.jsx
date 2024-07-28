import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../services/auth/authActions";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { loading, userInfo,error } = useSelector((state) => state)
  const navigate = useNavigate()
const dispatch = useDispatch()
  const handleSubmit =  (e) => {
    e.preventDefault();
    
      dispatch(userLogin(data));
    
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/user-profile')
    }
  }, [navigate, userInfo])


  return (
    <section className='contact relative z-10 flex justify-center items-center h-screen lg:mt-0'>
        <div className="container w-full max-w-xl px-6">
          <form className="bg-white shadow-md rounded-xl px-5 lg:px-8 pt-6 pb-8 mb-4" method="">
              <h3 className="!text-[32px] !font-bold text-center mb-4">Sign In</h3>
              <div className="mb-2">
                <label className="block text-md" htmlFor="email">
                  Your email:
                </label>
                <input
                  className="shadow appearance-none border rounded-full border-black/30 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div className="mb-8">
                <label className="block text-md" htmlFor="password">
                  Your password:
                </label>
                <input
                  className="shadow appearance-none border rounded-full border-black/30 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
              </div>
              <div className='w-full flex justify-center mb-3'>
                <button
                  type="submit"
                  className="w-full lg:w-9/12 rounded-full bg-[--BackgroundThird-DarkMode] py-2 px-3 text-white transition-colors duration-200"
                  disabled={loading}
                >
                  Login
                </button>
              </div>
              {loading && (
                <div className="text-center">
                  Ładowanie...
                </div>
              )}
              {error && (
                <div className="text-center text-red-500">
                  {error}
                </div>
              )}
              <div className="w-full lg:w-9/12 flex justify-center mx-auto">
                <p className="text-[--TextFourth-DarkMode] text-center">
                  By creating an account you agree to the Terms of use and Privacy Policy.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-5 gap-2">
                <div>
                  <a href="" className="text-[--TextThird-DarkMode] text-md underline  underline-offset-1">
                    Other issue with sign in
                  </a>
                </div>
                <div>
                  <a href="" className="text-[--TextThird-DarkMode] text-md underline  underline-offset-1">
                    Forget your password
                  </a>
                </div>
              </div>
          </form>
        </div>
    </section>
  );
};

export default Login;
