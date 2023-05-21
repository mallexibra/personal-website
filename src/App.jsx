import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Fragment/Home";
import About from "./Fragment/About";
import Portfolio from "./Fragment/Portfolio";
import Contact from "./Fragment/Contact";
import Blog from "./Fragment/Blog";
import Design from "./Layout/Design";
import Code from "./Layout/Code";
import Journal from "./Layout/Journal";
import Book from "./Layout/Book";

const App = () => {
  return (
    <div className='font-poppins  min-h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />}>
            <Route path='' element={<Code />} />
            <Route path='design' element={<Design />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />}>
            <Route path='' element={<Journal />} />
            <Route path='book' element={<Book />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
