import React from 'react'
import {Course} from './components/course.js'
import {Sum} from './components/course.js'

const App = ({courses}) => {
const assMap = courses.map(courses => courses.assignments)
const sum = assMap.reduce(( a, b ) => a + b)
console.log(assMap)
console.log(sum)

  return (
    <div>
      <h1>Half stack application development</h1>
      <ul>
      {courses.map(course => 
          <Course key={course.id} course={course}/>
      )}
      </ul>
      <Sum sum={sum}/>
      </div>
  )
}

export default App