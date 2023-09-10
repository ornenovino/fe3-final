import { useState, useEffect } from 'react'
import Card from '../Components/Card'

const Home = () => {

  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {users && users.map((user) => (<Card key={user.id} user={user} />))}
      </div>
    </main>
  )
}

export default Home;