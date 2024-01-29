import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Inicio, loader as usuariosLoader } from './pages/Inicio'
import { IndexLayout} from './Layouts/IndexLayout'
import { Registrar } from './pages/Registrar'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexLayout/>,
    children: [
      {
        index: true,
        element: <Inicio/>,
        loader: usuariosLoader

      },

      {
        path: '/registrar',
        element: <Registrar/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
