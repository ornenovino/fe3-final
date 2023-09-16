import { useContext } from 'react'
import Card from '../Components/Card'
import DataContext from '../Contexts/dataContext'

const Home = () => {

  const { data: users } = useContext(DataContext);

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {users && users.map((user) => (<Card key={user.id} user={user} />))}
      </div>
    </main>
  )
}

export default Home;