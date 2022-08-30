import React,{useState,useEffect} from "react";
import axios from 'axios';
import Countries from "./components/Countries";

const App = () => {
  const [filter,setFilter] = useState('')
  const [countriesData,setCountriesData] = useState([])
  const [show,setShow] = useState(false)
  

  const countries= countriesData.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))


  const handleFilter = (event) => {
    setFilter(event.target.value)
    if(event.target.value){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  // yo solo debo traer los datos una vez
  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountriesData(response.data)
    })
  } 
  useEffect(hook,[])
  
return (
  <div>
    <form>
       <span>Find countries </span>
       <input placeholder="search for countries" value={filter} onChange={handleFilter} ></input>
    </form>
    <div>
      { show ?
          countries.length > 10 ?
            'Too many matches, specify another filter'
            :<Countries countries={countries}/>
        : ''}
    </div>
  </div>
  
)
}
export default App