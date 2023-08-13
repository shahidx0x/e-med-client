import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";
export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/user/login",
          element: <Login />,
        },
        {
          path: "/user/signup",
          element: <Signup />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
function Root() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <>
      <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldnt find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded bg-indigo-600 text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
