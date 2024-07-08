const Login = () => {
  return (
    <section className='contact relative z-10 flex justify-center items-center h-screen mt-4 mb-11 lg:mt-0'>
        <div className="container w-full max-w-lg px-8">
          <form className="bg-white shadow-md rounded-xl px-5 lg:px-8 pt-6 pb-8 mb-4" method="">
              <h3 className="!text-[32px] !font-bold text-center mb-4">Sign In</h3>
              <div className="mb-2">
                <label className="block text-md" htmlFor="email">
                  Your email:
                </label>
                <input className="shadow appearance-none border rounded-full border-black/30 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
              </div>
              <div className="mb-8">
                <label className="block text-md" htmlFor="email">
                  Your password:
                </label>
                <input className="shadow appearance-none border rounded-full border-black/30 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
              </div>
              <div className='w-full flex justify-center mb-3'>
                <button type='submit' className="w-full lg:w-9/12 rounded-full bg-[--BackgroundThird-DarkMode] py-2 px-3 text-white transition-colors duration-200">Login</button>
              </div>
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
  )
}

export default Login