import './App.css'

// React Router Dom importieren
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages importieren
import Home from './pages/Home';
import Blog from './pages/Blog';
import Details from './pages/Details';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* path: Link in der Aresszeile // element: page */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
