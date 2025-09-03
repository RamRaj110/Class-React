import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error'
import RestMenu from './components/RestMenu';


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
  },{
    path: "/restaurants/:id",
    element: <RestMenu/>
  }
    ],
     errorElement: <Error/>,
  }
 

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);