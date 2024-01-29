import { Form } from 'react-router-dom'

export const Registrar = () => {
  return (
    <>
        <h1 className="font-black text-4xl text-indigo-700 text-center my-10">Nuevo Registro</h1>
        <Form className='w-1/2 mx-auto bg-white shadow-sm p-5'>
            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="nombre">Nombre</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="text" placeholder='Tu Nombre' id='nombre'/>
            </div>

            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="apellido">Apellido</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="text" placeholder='Tu Apellido' id='apellido'/>
            </div>

            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="email">Email</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="email" placeholder='Tu Email' id='email'/>
            </div>

            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="telefono">TEL</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="tel" placeholder='Numero de teléfono' id='telefono'/>
            </div>

            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="empresa">Empresa</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="text" placeholder='Tu Empresa' id='empresa'/>
            </div>

            <input type="submit" value="Registrar Usuario" className='bg-indigo-600 text-white text-center py-2 px-3 mt-3 rounded-sm cursor-pointer hover:bg-indigo-800 transition-all'/>

        </Form>
    </>
  )
}
