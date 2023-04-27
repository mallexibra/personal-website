import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Fragment/Home";
import About from "./Fragment/About";
import Portfolio from "./Fragment/Portfolio";
import Contact from "./Fragment/Contact";
import Blog from "./Fragment/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

const App = () => {
  return (
    <div className='font-poppins  min-h-screen'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
