import { Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import Home from './pages/Home'
import UserAuthentication from './pages/UserAuthentication'

const MainRoutes = [
  <Route key='homeRoute' path="/" element={<Home />} />,
  <Route key='catalogRoute' path="/catalog/:filters" element={<Catalog />} />,
  <Route key='cartRoute' path="/cart" element={<Cart />} />,
  <Route key='registerRoute' path="user/login" element={<UserAuthentication />} />,
  <Route key='loginRoute' path="user/register" element={<UserAuthentication />} />,
]

export default MainRoutes
