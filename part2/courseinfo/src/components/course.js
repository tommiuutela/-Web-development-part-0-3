import React from 'react'

const Course = ({ course }) => {
  
  return ( 
    <div>
    <li>{course.content} {course.assignments}</li>
    </div>
  )  
}

const Sum = ({ sum }) => {
  
  return (
  <div>
    <h1>
      Total of {sum} exercises
    </h1>
  </div>
  )
    
}

export {Course, Sum}
