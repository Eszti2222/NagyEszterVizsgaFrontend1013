import React, { useState } from "react";

function Dropdown(props) {

    const [type, setType] = useState([""]);

    function handleTypeChange() {
       /* setType(()=>{
         
        });
        */
    }

    return (<>
        <p>Szobatípus:
            <select className="dropdown">
                <option selected>Összes típus</option>
                <option value="1" onClick={handleTypeChange}>{props.lista[1]}</option>
                <option value="2" onClick={handleTypeChange}>{props.lista[2]}</option>
            </select>
        </p>
    </>)

    //itt kéne megjeleníteni az adatbázisból a szobatipusok táblából a tipus_nev rekordot
}
export default Dropdown;