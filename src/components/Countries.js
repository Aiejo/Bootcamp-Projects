import React,{useState} from "react";
import Specific from "./Specific";
import Searched from "./Searched";

const Countries = ({countries}) => {
    const [showSpecific,setShowSpecific] = useState(new Array(countries.length).fill(false))
    const copy = showSpecific

    const handleButton = (e) => {
        const index = e.target.value
        //Si quiero que al activar una se desactiven todas, paso aux
        // let aux = showSpecific.map(()=>false) 
        // aux[index] = !aux[index]

        copy[index] = !showSpecific[index]

        // OJO CON ESTO, TIENE QUE SER ASÍ
        setShowSpecific([...copy])

    }

    
    return (
        <div>
            {countries.length === 1 ?
            <Searched country={countries[0]} unique={true}/>
            :countries.map((country,i)=>
            (<div key={country.name.common}>
                {country.name.common}<button value={i} onClick={handleButton}>{showSpecific[i]?'Hide':'Show'} </button>  
                {showSpecific[i]?<Specific country={country}/>:null}        
            </div>)
            )
            } 
        </div>
        
    )
}

export default Countries