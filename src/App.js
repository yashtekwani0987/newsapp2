import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import News from './components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


 const App = ()=>  {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<News key="general" pageSize={5} category="general" />} ></Route>
            <Route path='/business' element={<News key="business" pageSize={5} category="business" />}></Route>
            <Route path='/entertainment' element={<News key="entertainment" pageSize={5} category="entertainment" />} ></Route>
            <Route path='/general' element={<News key="general" pageSize={5} category="general" />}></Route>
            <Route path='/health' element={<News key="health" pageSize={5} category="health" />}></Route>
            <Route path='/science' element={<News key="science" pageSize={5} category="science" />}></Route>
            <Route path='/sports' element={<News key="sports" pageSize={5} category="sports" />}></Route>
            <Route path='/technology' element={<News key="technology" pageSize={5} category="technology" />}></Route>
          </Routes>
        </Router>

      </>
    )
}
export default App




