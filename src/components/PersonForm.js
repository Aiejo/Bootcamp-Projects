import React from "react";

const PersonForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
      <div>
        Name:<input placeholder='Add a new name' value={props.nameValue} onChange={props.handleNameChanges}/>
      </div>
      <div>
        Number:<input placeholder='Add a new number' value={props.numberValue} onChange={props.handleNumberChanges} type='number'/>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
      </form>
    )
}
export default PersonForm