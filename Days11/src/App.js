import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error'
import RestMenu from './components/RestMenu';
import { lazy } from 'react';
import store from './components/utils/store';
import { Provider } from 'react-redux';
import Cart from './components/Cart';

const Grocerry = lazy(()=>import('./components/Grocerry'))



const App = () => {
  return (
    <Provider store={store}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
 {
    path:"/about",
    element: <About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
   {
    path:"/grocerry",
    element:<Suspense fallback={<h1>Loading...</h1>}><Grocerry/></Suspense>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path: "/restaurants/:id",
    element: <RestMenu/>
  },
    ],
     errorElement: <Error/>,
  }
 

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);