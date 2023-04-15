import { useState } from 'react'
import data from './data'
import Person from './assets/components/Person'

const App = () => {
  const [people, setPeople] = useState(data)

  console.log('--> people', people)

  return (
    <div className="container">
      <h2>People</h2>
      <ul>
        {people.map((person) => (
          <li>
            <Person key={person.id} {...person} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
