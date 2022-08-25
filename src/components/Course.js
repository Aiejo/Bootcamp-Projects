import React from "react";

const Header = ({name}) => {
    return (
        <h3>{name}</h3>
    )
}

const Content = ({parts}) =>{
    // El primer elemento de del map debe contener key
    return (
        <div>
            {parts.map(
                part => 
                <Part key={part.id} part={part}/>
                )}
            <Total exercises = {parts.map(part => part.exercises)}/>
        </div>
    )
}
const Part = ({part}) => {
    return (
        <p>{`${part.name} ${part.exercises}`}</p>
    )
}

const Total = ({exercises}) => {
    return (
        <strong>Total of {exercises.reduce((total, value)=>total+value)} exercises</strong>
    )
}


const Course = ({courses}) => {
    // El primer elemento de del map debe contener key
    return (
        <div>
            {courses.map(course=>{
                return (
                    <div key={course.id}>
                        <Header name={course.name}/>
                        <Content parts={course.parts}/>
                    </div>
                )
            })}
        </div>
    )
}


export default Course