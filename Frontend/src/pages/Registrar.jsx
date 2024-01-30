import { Form, useActionData, redirect } from 'react-router-dom'
import { Formulario } from '../components/Formulario';
import { Error } from '../components/Error';

export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const errores = [];



    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    if (!regex.test(email)) {
        errores.push('El email no es valido');
    }

    if (errores.length > 0) {
        return errores;
    }



    try {
        const url = `http://localhost:4000/api/crud/registrar`;
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const resultado = await respuesta.json();

        if (resultado.msg) {
            errores.push(resultado.msg)
            return errores;
        }


        return redirect('/');


    } catch (error) {
        console.log(error);
        return null;
    }



}

export const Registrar = () => {

    const errores = useActionData();


    return (
        <>
            <h1 className="font-black text-4xl text-indigo-700 text-center mt-10 mb-5">Nuevo Registro</h1>
            {errores?.length && errores.map((error, i) => (
                <Error key={i}>
                    {error}

                </Error>

            ))}
            <Form className='w-1/2 mx-auto bg-white shadow-sm p-5' method='POST' noValidate>
                <Formulario />
                <input type="submit" value="Registrar Usuario" className='bg-indigo-600 text-white text-center py-2 px-3 mt-3 rounded-sm cursor-pointer hover:bg-indigo-800 transition-all' />

            </Form>
        </>
    )
}
