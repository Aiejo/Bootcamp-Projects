import React,{useEffect,useState} from "react";
// import axios from 'axios'


const api_key = process.env.REACT_APP_API_KEY


const Searched = ({country}) => {
    const [weatherData, setWeatherData] = useState({
        temperature:0,
        weather_icons:[''],
        wind_speed:0,
        wind_dir:'',
        })

    useEffect(()=> {
        const params = new URLSearchParams({
            access_key:api_key,
            query:country.capital[0]
        })
        fetch(`http://api.weatherstack.com/current?${params}`)
        .then(response => response.json())
        .then(data=>{
            console.log(data.current)
            setWeatherData(data.current)
        })
        
    },[country])
    
    // const fetchAPI= async () => { esto iría en el hook
        //     const params = new URLSearchParams({
        //         access_key:api_key,
        //         query:country.capital[0]
        //     })
            
        //     const response = await fetch(`http://api.weatherstack.com/current?${params}`)
        //     const data = await response.json()
        //     return data
        //     //forma pro
        //     // return await (await fetch(`http://api.weatherstack.com/current?${params}`)).json()
        // }
        
        // fetchAPI().then(response=>{
        //     console.log(response.current)
        //     setWeatherData(response.current)
        // })
    // const hook = () => {
    //     axios.get('http://api.weatherstack.com/current',{paramas:{access_key:api_key,query:country.capital[0]} })
    //     .then(response=>{
    //         console.log(response)
    //         setWeatherData(response.data.current)    
    //     })
    // }
    
    return (
        <>
            <h1>{country.name.common}</h1>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <h2>Spoken Languages: </h2>
            <ul>
                {Object.values(country.languages).map(lang => 
                <li key={lang}>{lang}</li>)}
                
            </ul>
            <h2>Flag: </h2>
            <img src={country.flags.png} alt='flag'/>
            <h3>Weahter in {country.capital[0]}</h3>
            <p><strong>Temperature: </strong>{weatherData.temperature} Celcius</p>
            <img src={weatherData.weather_icons[0]} alt='icon-weather'/>
            <p><strong>Wind: </strong>{weatherData.wind_speed} mph direction {weatherData.wind_dir}</p>
            </>
    )
}

export default Searched