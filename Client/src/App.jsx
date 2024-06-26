import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./Pages/Home'))
const Menu = lazy(() => import('./Pages/MenuPage'));
const Contact = lazy(() => import('./Pages/Contact'));
const Gallery = lazy(() => import('./Pages/Gallery'));
const Blog = lazy(() => import('./Pages/BlogPage'));
const Booking = lazy(() => import('./Pages/Booking'));
const AdminPanel = lazy(() => import('./Pages/AdminPanel'));
const Signin = lazy(() => import('./Pages/Signin.jsx'));
const Signup = lazy(() => import('./Pages/Signup'));
const CartPage = lazy(() => import('./Pages/CartPage.jsx'));
import Loading from './Components/Loading.jsx';
import { Provider } from 'react-redux';
import { store } from './REDUX/Store.js'
import Paymentsuccess from './Pages/Paymentsuccess.jsx';
import ProtectedRoute from './Pages/ProtectedRoute.jsx';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/home' Component={Home} />
            <Route path='/menu' Component={Menu} />
            <Route path='/blog' Component={Blog} />
            <Route path='/gallery' Component={Gallery} />
            <Route path='/contact' Component={Contact} />
            <Route path='/booking' Component={Booking} />
            <Route path='/adminpanel' element={
              <ProtectedRoute >
                <AdminPanel />
              </ProtectedRoute>}>
            </Route>
            <Route path='/signin' Component={Signin} />
            <Route path='/signup' Component={Signup} />
            <Route path='/cart' Component={CartPage} />
            <Route path='/Paymentsucess' Component={Paymentsuccess} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App