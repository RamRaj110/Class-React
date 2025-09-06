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
// import Grocerry from './components/Grocerry';
import { lazy } from 'react';


const Grocerry = lazy(()=>import('./components/Grocerry'))



const App = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
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
    path: "/restaurants/:id",
    element: <RestMenu/>
  }
    ],
     errorElement: <Error/>,
  }
 

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);