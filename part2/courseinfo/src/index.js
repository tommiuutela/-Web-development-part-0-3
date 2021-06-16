import ReactDOM from 'react-dom'
import App from './App.js'

const courses = [
  {
    id: 1,
    assignments: 10,
    content: 'Fundamentals of React',
    important: true
  },
  {
    id: 2,
    assignments: 7,
    content: 'Using props to pass data',
    important: false
  },
  {
    id: 3,
    assignments: 14,
    content: 'State of a component',
    important: true
  },
  {
    id: 4,
    assignments: 11,
    content: 'Redux',
    important: true
  },
  {
    id: 5,
    assignments: 15,
    content: 'Node.js',
    important: true
  },
  {
    id: 6,
    assignments: 12,
    content: 'Routing',
    important: true
  }
 

  
]
const result = courses.map(courses => courses.id)
console.log(result)

ReactDOM.render(
  <App courses={courses} />,
  document.getElementById('root')
)
export default courses