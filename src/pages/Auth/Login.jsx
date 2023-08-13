import { Link } from "react-router-dom";
import video from "./video.mp4";

export default function Login() {
  return (
    <div>
      <section className="p-6 bg-gray-100 text-gray-800">
        <div className="flex justify-center gap-10">
          <div className="w-full  max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form noValidate="" action="" className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-full border-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                />
                <div data-lastpass-icon-root="true"></div>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full border-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                />
                <div className="flex justify-end text-xs text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div data-lastpass-icon-root="true"></div>
              </div>
              <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-indigo-600">
                Sign in
              </button>
            </form>
            <p className="text-xs text-center sm:px-6 text-gray-600">
              Dont have an account?
              <Link
                to="/user/signup"
                rel="noopener noreferrer"
                href="#"
                className="underline text-gray-800"
              >
                Sign up
              </Link>
            </p>
          </div>
          <video className="rounded" width="60%" height="500" loop autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
