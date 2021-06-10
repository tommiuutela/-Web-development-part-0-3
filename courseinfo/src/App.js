import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = () => {
    console.log()
  
    return(
      <h1>{course}</h1>
    )
  }
  
  
  const Content = () => {
    console.log()
    return (
      <>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/>
      <Part part={parts[3].name} exercises={parts[3].exercises}/>
      </>
    )
  }
  const Part = (props) =>{
    return (
        <>
        <p>
          {props.part} {props.exercises}
        </p>
        </>
    )
  }
  
  const Total = (props) => {
    return (
      <>
      <p>Number of exercises {parts[1].exercises + parts[2].exercises + parts[3].exercises}</p>
      </>
    )
  }

  return (
    <div>
      <Header/>
      <Content/>
      <Total/>
      
    </div>
  )
}

export default App