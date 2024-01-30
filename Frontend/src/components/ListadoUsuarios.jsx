import { useNavigate, Form, redirect } from "react-router-dom";
import Editar from '../img/PencilSquare.svg'
import Eliminar from '../img/Trash.svg'


export const ListadoUsuarios = ({ usuario }) => {
    const { nombre, apellido, email, telefono, _id, empresa } = usuario;
    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-xl text-gray-800">{nombre}  {apellido}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600 "> <span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>

            <td className="p-6  flex gap-x-2 items-center">
                <button>
                    <img src={Editar} alt="icon-editar" width="30" height="30"/>
                </button>

                <Form>
                    <button type="submit" className="p-1">
                        <img src={Eliminar} alt="icon Eliminar" width={30} height={30} />
                    </button>
                </Form>


            </td>
        </tr>
    )
}
