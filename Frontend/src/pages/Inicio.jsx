import { useLoaderData } from 'react-router-dom'
import { ListadoUsuarios } from '../components/ListadoUsuarios';
import imagen from '../img/ilustracions.png'

export async function loader() {
    try {
        const url = `http://localhost:4000/api/crud/`
        const respuesta = await fetch(url);
        const resultado = respuesta.json();
        return resultado;


    } catch (error) {
        console.log(error);
        return [];

    }
}


export const Inicio = () => {

    const usuarios = useLoaderData();
    console.log(usuarios);

    return (
        <>
            <h1 className="font-black text-4xl text-indigo-700 text-center my-10">{usuarios.length > 0 ? 'Lista de Usuarios Registrados' : 'Comienza Registrando a Tus Usuarios'}</h1>

            <main className='mx-10 my-5'>
                {usuarios.length > 0 ? (
                    <table className="w-full bg-white shadow-sm  mt-5 table-auto">
                        <thead className="bg-indigo-600 text-white">
                            <tr className="text-left">
                                <th className="p-2 px-5">Usuarios</th>
                                <th className="p-2 px-5">Contacto</th>
                                <th className="p-2 px-5">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {usuarios.map(usuario => (
                                <ListadoUsuarios
                                    key={usuario._id}
                                    usuario={usuario}
                                />
                            ))}
                        </tbody>


                    </table>


                ) : (
                    <>
                        <img src={imagen} alt="imagen inicio" className='block -mt-24 mx-auto h-50' width={800} height={0} />
                    </>
                    

                )}

            </main>




        </>


    )
}
