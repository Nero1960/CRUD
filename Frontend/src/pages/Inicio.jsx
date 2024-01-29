import { useLoaderData } from 'react-router-dom'
import { ListadoUsuarios } from '../components/ListadoUsuarios';

export async function loader() {
    try {
        const url = `http://localhost:4000/api/crud/`
        const respuesta = await fetch(url);
        const resultado = respuesta.json();
        return resultado;


    } catch (error) {
        console.log(error);
        return null;

    }
}


export const Inicio = () => {

    const usuarios = useLoaderData();
    console.log(usuarios);

    return (
        <>
            <h1 className="font-black text-4xl text-indigo-700 text-center my-10">{usuarios.length > 0 ? 'Usuarios Registrados' : 'Comienza a registrar a tus usuarios'}</h1>

            <main className='mx-10 mt-5'>
                {usuarios.length ? (
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
                    <p className="text-center mt-2 text-xl">No hay Registros.</p>

                )}

            </main>




        </>


    )
}
