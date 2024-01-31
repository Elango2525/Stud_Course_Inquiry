import Scroll from "../Scroll"
import {Link} from "react-router-dom"
import Header from "./common/header/Header"
import Footer from "./common/footer/Footer"
export default function Login() {

  return (
    <>
      <Header/>
    <div className="flex justify-center">
      <Scroll/>
        
    <div className="lg:w-2/5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 border-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-12 w-auto"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPPt3_Gxr3BtiMHRgQNlmZKnhZE0nafRH4383iyCtoFhi6EH3Fc8JNnjAStW_Nw8kbSm4uRfdr5YrvfTgslCesLfznl3YRDkgXAkFmKZuSD52qSRSAJPBh5uxNAt4e2HXIEjGoQwbzL-YQQS-Nzw93chFn88Dgk_5D0scrgOKfK_dk0BLVWjlJVb5J4Vo/s320/LOGOx-removebg-preview.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                 <Link to = '/coursedetails'> <a href="#" className="font-semibold text-vio hover:text-indigo-500">
                    Forgot password?
                  </a></Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not have Account?{' '}
            <Link to='/signup'><a href="#" className="font-semibold leading-6 text-vio hover:text-indigo-500">
              Create one
            </a></Link>
            
          </p>
        </div>
      </div>
      </div>
      </div>
      <Footer/>
      </>
  )
}
