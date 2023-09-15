import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {

  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(json => setDentist(json))
  }, [id])

  return (
    <>
      <h1>Detail Dentist </h1>
      <table >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentist?.name}</td>
          <td>{dentist?.email}</td>
          <td>{dentist?.phone}</td>
          <td>{dentist?.website}</td>
        </tr>
      </table>
    </>
  )
}

export default Detail