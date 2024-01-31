import { Form, useLoaderData, useActionData, redirect } from "react-router-dom"
import { Formulario } from "../components/Formulario"
import { Error } from "../components/Error";

export async function loader({ params }) {
    const _id = params._id;

    try {
        const url = `http://localhost:4000/api/crud/perfil/${_id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado;

    } catch (error) {
        console.log(error);
        return null;

    }
}

export async function action({ request, params }) {
    const _id = params._id;
    const formData = await request.formData();
    const usuario = Object.fromEntries(formData);

    const email = formData.get('email');
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const errores = [];



    if (Object.values(usuario).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    if (!regex.test(email)) {
        errores.push('El email no es valido');
    }

    if (errores.length > 0) {
        return errores;
    }

    try {

        const url = `http://localhost:4000/api/crud/actualizar/${_id}`;
        const respuesta = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(usuario),
            headers: { 'Content-Type': 'application/json' },
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

export const Actualizar = () => {

    const usuario = useLoaderData();
    const errores = useActionData();

    return (
        <>

            <h1 className="font-black text-4xl text-indigo-700 text-center mt-10 mb-5">Actualizar</h1>
            {errores?.length && errores.map((error, i) => (
                <Error key={i}>
                    {error}

                </Error>

            ))}
            <Form className='w-1/2 mx-auto bg-white shadow-sm p-5' method='PUT' noValidate>
                <Formulario usuario={usuario} />
                <input type="submit" value="Actualizar usuario" className='bg-indigo-600 text-white text-center py-2 px-3 mt-3 rounded-sm cursor-pointer hover:bg-indigo-800 transition-all' />

            </Form>

        </>
    )
}
