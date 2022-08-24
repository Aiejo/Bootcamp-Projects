import ReactDOM from 'react-dom/client';
import React,{useState} from 'react'

const Title = ({text}) =>{
  return (
    <h1>{text}</h1>
  )
}

const Statistics = (props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td style={{paddingLeft:'10px'}}>{props.value}</td>
    </tr>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.type}</button>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)

  const avg = (good+-bad)/all ? (good-bad)/all : 0
  const pos = `${good/all ? good/all*100 : 0} %`
  
  const handleButtonClick = (value) => {
      switch (value){
        case 1:
          setGood(good+1)
          setAll(all+1)
          break;

        case 0:
          setNeutral(neutral+1)
          setAll(all+1)
          break;

        case -1:
          setBad(bad+1)
          setAll(all+1)
          break;

        default:
            break;
      }
    }


  return (
    <div>

      <Title text="Give Feedback"/>
      <Button type = {"good"} handleClick = {()=>handleButtonClick(1)}/>
      <Button type = {"neutral"} handleClick = {()=>handleButtonClick(0)}/>
      <Button type = {"bad"} handleClick = {()=>handleButtonClick(-1)}/>
      <Title text="Statistics"/>
      <table>
        <tbody>
          <Statistics text="Good" value={good}/>
          <Statistics text="Neutral" value={neutral}/>
          <Statistics text="Bad" value={bad}/>
          <Statistics text="all" value={all}/>
          <Statistics text="average" value={avg}/>
          <Statistics text="positive" value={pos}/>
        </tbody>
      </table>

    </div>
    

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);