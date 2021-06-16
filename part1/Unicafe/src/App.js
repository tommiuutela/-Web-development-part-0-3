import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.clicks===0)
  {
    return(
      <div>
        No feedback given
      </div>
    )   
  }
  return (
    <div>
      <p>Number of votes: {props.clicks}</p>
      <p>Average: {props.sum/props.clicks}</p>
      <p>Positive: {props.good*100/props.clicks}</p>
    </div>
  ) 
}
const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text}: {props.vote}</p>
    </div>
  ) 
}


const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [sum, setSum] = useState(0)
 

  const handleSetGood = () => {
    setGood(good + 1)
    setClicks(clicks + 1)
    setSum(sum + 1)
    console.log(clicks, sum)
   
   
  }

  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
    setClicks(clicks + 1)
   
  }
  const handleSetBad = () => {
    setBad(bad + 1)
    setClicks(clicks + 1)
    setSum(sum - 1)
   
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <div>
      <div>
        <header>GIVE FEEDBACK</header>
        <Button handleClick={handleSetGood} text='Good' />
        <Button handleClick={handleSetNeutral} text='Neutral' />
        <Button handleClick={handleSetBad} text='Bad' />
        <header>STATISTICS</header>
        <StatisticsLine vote={good} text='Good'/>
        <StatisticsLine vote={neutral} text='Neutral'/>
        <StatisticsLine vote={bad} text='Bad'/>    
        <Statistics clicks={clicks} sum={sum} good={good}/>                 
      </div>
    </div>
  )
}
export default App