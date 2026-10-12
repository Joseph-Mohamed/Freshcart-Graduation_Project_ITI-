import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Brands from './components/Brands/Brands'
import NotFound from './components/NotFound/NotFound'
import BrandsDetails from './components/BrandsDetails/BrandsDetails'

function App() {

  const routers = createBrowserRouter([
  {
    path: '',
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },        
      { path: '/home', element: <Home /> },        
      { path: '/products', element: <Products /> }, 
      { path: '/productdetails/:id', element: <ProductDetails /> }, 
      { path: '/brands', element: <Brands /> }, 
      { path: '/brandDetails/:id', element: <BrandsDetails /> }, 
      { path: '*', element: <NotFound /> }
    ]
  }
]);
  return (
    <>
    {/* <Layout />
    <Home />
    <Products />
    <ProductDetails />  */}
    <RouterProvider router={routers} />;
    </>
  )
}

export default App
