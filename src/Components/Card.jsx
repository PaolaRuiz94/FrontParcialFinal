import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import doctor from '../assets/doctor.jpg'
import { ContextGlobal } from "./utils/global.context";



const Card = ({ name, username, id }) => {

  const {data, setData} = useContext(ContextGlobal)

  const addFav = (dentistName, dentistUserName, dentistId)=>{
    if(data.filter(dentist =>dentist.id === dentistId).length > 0){
  
      setData((previousState) => previousState.filter(dentist =>dentist.id !== dentistId));
      return;
    }
      setData((previousState)=>
      previousState.length === 0 ? ([{name:dentistName, username: dentistUserName, id: dentistId}]):(
      [...previousState, {name:dentistName, username: dentistUserName, id: dentistId}])

      )
    }

  return (

    <div className="card">
    <Link to={'detail/'+id}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src={doctor} alt={name} width='200px'/>

        <h1>
          {name}
         
        </h1>

        <h2>

        {username}
        </h2>
  
        <h3>
          {id}
        </h3>
        </Link>
    <Link to={'favorites/'}>

        <button onClick={()=>addFav(name,username,id)} className="favButton">Add fav</button>
        </Link>

    </div>
  );
};

export default Card;
