import React,{useState} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] =useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setFilter] = useState('')
  const [showAll,setShowAll] = useState(true)

  const personsToShow = showAll ? persons: persons.filter(person => RegExp(`^${filter}`,"gi").test(person.name) )

  const addPerson = (event)=>{
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
    }else if(!newName){
      alert(`You must enter a name`)
    }else{
      const personObject = {
        name:newName,
        number:newNumber,
      }
      setPersons([...persons,personObject])
    }
    setNewName('')
    setNewNumber('')
  }
  const handleNameAdded = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberAdded = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterAdded = (event) => {
    setFilter(event.target.value)
    if (event.target.value){
      setShowAll(false)
    }else{
      setShowAll(true)
    }
    
  }
  
return (
  <div>
    <div>debug:{newName} {newNumber} {filter} </div>
    <h2>Phonebook</h2>
      <Filter text="Filter shown with:" placeholder='Filter by name' value={filter} handleChanges={handleFilterAdded}/>
    <h3>Add a new</h3>
      <PersonForm handleSubmit={addPerson} nameValue={newName} numberValue={newNumber} 
      handleNameChanges={handleNameAdded} handleNumberChanges={handleNumberAdded} />
    <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    
    
  </div>
  
)
}
export default App