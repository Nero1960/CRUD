
export const Formulario = () => {
    return (
        <>
            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="nombre">Nombre</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="text" placeholder='Tu Nombre' id='nombre' name='nombre' />
            </div>

            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="apellido">Apellido</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="text" placeholder='Tu Apellido' id='apellido' name='apellido' />
            </div>

            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="email">Email</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="email" placeholder='Tu Email' id='email' name='email'/>
            </div>

            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="telefono">TEL</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="tel" placeholder='Numero de teléfono' id='telefono' name='telefono'/>
            </div>

            <div className="mb-3">
                <label className='block text-gray-500 font-semibold text-xl' htmlFor="empresa">Empresa</label>
                <input className='mt-2 w-full p-2 border rounded placeholder-gray-400' type="text" placeholder='Tu Empresa' id='empresa' name='empresa' />
            </div>

        </>
    )
}
