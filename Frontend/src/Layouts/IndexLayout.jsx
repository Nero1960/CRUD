import { Outlet, Link, useLocation } from 'react-router-dom';
import imagenUsuario from '../img/User.svg'
import imagenAdd from '../img/UserPlus.svg'

export const IndexLayout = () => {

    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <div className='flex flex-col md:flex-row h-screen'>
                <aside className='md:w-1/4 bg-indigo-700 px-3'>
                    <p className='text-white font-bold text-center py-5 mt-5 text-2xl'>CRM React Router Dom</p>
                    <nav>
                        <ul className='space-y-2 mt-2 flex flex-col justify-center items-center md:justify-start md:items-start pb-10 md:pb-0'>
                            <li className='flex'>
                                <Link to='/' className={`${pathname === '/' ? 'text-indigo-300' : 'text-white'} font-semibold hover:text-indigo-300 transition-colors duration-3000 text-xl ms-4 me-2`}>Usuarios</Link>
                                <img src={imagenUsuario} alt="icon-user" width='20' height='20' className='font-extrabold' />
                            </li>

                            <li className='flex'>
                                <Link to='/registrar' className={`${pathname === '/registrar' ? 'text-indigo-300' : 'text-white'} font-semibold hover:text-indigo-300 transition-colors text-xl ms-4 me-2 duration-3000`}>Nuevo Registro</Link>
                                <img src={imagenAdd} alt="icon-user" width='20' height='20' className='font-extrabold' />
                            </li>
                        </ul>

                    </nav>


                </aside>
                <div className='md:w-3/4 overflow-scroll'>
                    <Outlet />
                </div>

            </div>

        </>

    )
}
