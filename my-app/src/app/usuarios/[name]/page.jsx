import axios from "axios";

async function getDatos() {
    const url="https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuario({params}){

    const NomCod= decodeURIComponent(params.name);

    const usu = await getDatos();
    
    const usuE = usu.filter(usu => usu.name === NomCod)

    return(
        usuE.map((usu)=>(
        <>
        <h1>{NomCod}</h1>
        <p>{usu.id}</p>
        <p>{usu.username}</p>
        <p>{usu.email}</p>
        <p>{usu.address.street}</p>
        <p>{usu.address.suite}</p>
        <p>{usu.address.city}</p>
        <p>{usu.address.zipcode}</p>
        <p>{usu.address.geo.lat}</p>
        <p>{usu.address.geo.lng}</p>
        </>
        ))
        
    )
}