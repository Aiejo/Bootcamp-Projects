import ReactDOM from 'react-dom/client';
import React,{useState} from 'react'

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Anecdote = ({text,votes}) => {
  return (
    <div>
      <p>{text}<br/>Has {votes} votes</p>
    </div>
  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(props.anecdotes.length).fill(0))

  const addVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const generateAnecdote = () => {
    let aux = selected

    while(aux===selected){
      aux = randomInt(props.anecdotes.length-1) 
    }
    // Primero se ejecuta la función y luego se vuelve a renderizar
    setSelected(aux)
    console.log(selected)
    }
  
  const randomInt = (max,min=0) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }

  const maxPosition = votes.findIndex(element => element === Math.max(...votes))
 
  return (
    <div>
      <Title text="Anecdote of the day"/>
      <Anecdote text={props.anecdotes[selected]} votes = {votes[selected]}/>
      <Button handleClick={addVote} text="Vote"/>
      <Button handleClick={generateAnecdote} text="Next anecdote"/>
      <Title text="Anecdote with most votes"/>
      <Anecdote text={props.anecdotes[maxPosition]} votes = {votes[maxPosition]}/>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);
  // Secuencia para configurar user snippet File > Preferences > user snippets > javascript
 // Snippet para console.log()
  // {
  //   "console.log": {
  //     "prefix": "clog",
  //     "body": [
  //       "console.log('$1')",
  //     ],
  //     "description": "Log output to console"
  //   }
  // }