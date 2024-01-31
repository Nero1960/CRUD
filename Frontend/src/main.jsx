import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Inicio, loader as usuariosLoader } from './pages/Inicio'
import { IndexLayout} from './Layouts/IndexLayout'
import { Registrar, action as registrarUsuarioAction } from './pages/Registrar'
import { Actualizar, loader as actualizarLoader, action as actualizarAction} from './pages/Actualizar'
import { action as eliminarAction } from './components/ListadoUsuarios'
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
        element: <Registrar/>,
        action: registrarUsuarioAction
      },

      {
        path: '/actualizar/:_id',
        element: <Actualizar/>,
        loader: actualizarLoader,
        action: actualizarAction
      },

      {
        path: '/eliminar/:_id',
        action: eliminarAction
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
