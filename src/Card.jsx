import React, {useState} from "react";
function Card(props) {

    const[submit, setSubmit] = useState();
   

    function handleSubmit(event){
        setSubmit((e)=>{
            event.target.value = document.getElementsByName("foglalthelyek");
        })
    }

    return (<div className="cardcontainer">
            <ul className="card-data" >
                <li>ID:{props.lista.id}</li>
                <li>Szobatípus: {props.lista.szobatipus}</li>
                <li>Emelet: {props.lista.emelet}</li>
                <li>Férőhely: {props.lista.ferohely}</li>
                <li name="foglalthelyek">Foglalt helyek: {props.lista.foglalthelyek}</li>
            
                <button value="submit" onClick={handleSubmit}>Helyet foglalok</button>
            </ul>


    </div>)
}
export default Card;