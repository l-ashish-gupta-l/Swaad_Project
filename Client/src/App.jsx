import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Pages/MenuPage';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Blog from './Pages/BlogPage';
import Booking from './Pages/Booking';
import AdminPanel from './Pages/AdminPanel';
import Signin from './Pages/Signin.jsx';
import Signup from './Pages/Signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/menu' Component={Menu} />
        <Route path='/blog' Component={Blog} />
        <Route path='/gallery' Component={Gallery} />
        <Route path='/contact' Component={Contact} />
        <Route path='/booking' Component={Booking} />
        <Route path='/adminpanel' Component={AdminPanel} />
        <Route path='/signin' Component={Signin} />
        <Route path='/signup' Component={Signup} />
      </Routes>
    </Router>
  )
}

export default App