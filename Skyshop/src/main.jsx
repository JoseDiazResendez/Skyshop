import ReactDOM from 'react-dom/client'
import Home from './Routes/App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Layout from './Routes/layout.jsx'
import {About} from './Routes/About.jsx'
import {Support} from './Routes/Support.jsx'

//export default llamarse como sea y sin {}
//export nombre exacto y entre {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'Nosotros',
        element: <About />
      },
      {
        path: 'Soporte',
        element: <Support />
      },
      /*{
        path: 'Busqueda',
        element: <Busqueda />
      }*/
    ]
  },
]);
/*
PascalCase - Componentes
camelCase
snake_case
kebabk-case
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
