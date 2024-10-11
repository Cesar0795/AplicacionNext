import axios from "axios";
import Link from "next/link";
async function getUsuarios(){
    const url="https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    //console.log(universidades.data);
    return usuarios.data;
}
export default async function Usuario(){
    const universidades=await getUsuarios();
    return(
        <>
            <h1>usuarios</h1>
            <table className="table">
                <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Username</th>
                        <th>Email</th>
                        </tr>
                </thead>
                <tbody>
                        {
                            universidades.map((usuario)=>(
                                <tr>
                                    <td>{usuario.id}</td>
                                    <td><Link href={`/usuarios/${usuario.name}`}>{usuario.name}</Link></td>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.email}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}