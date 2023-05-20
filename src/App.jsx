import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Fragment/Home";
import About from "./Fragment/About";
import Portfolio from "./Fragment/Portfolio";
import Contact from "./Fragment/Contact";
import Blog from "./Fragment/Blog";
import Design from "./Layout/Design";
import Code from "./Layout/Code";
import Journal from "./Layout/Journal";
import Book from "./Layout/Book";

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
    children: [
      {
        path: "design",
        element: <Design />,
      },
      {
        path: "code",
        element: <Code />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
    children: [
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "book",
        element: <Book />,
      },
    ],
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
