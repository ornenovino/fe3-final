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
      <p>{dentist?.name}</p>
      <p>{dentist?.email}</p>
      <p>{dentist?.phone}</p>
      <p>{dentist?.website}</p>
    </>
  )
}

export default Detail