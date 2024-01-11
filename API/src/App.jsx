import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [ApiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get('https://reactnd-books-api.udacity.com/books', {
      headers: { 'Authorization': 'whatever-you-want' }
    })
      .then((response) => {
        const data = response.data.books;
        setApiData(data);
      })
  },[]);

  return (
    <div>
      {ApiData.map((item) => (
        <div className='container'>
          <div className='subcontainer'>
            <h3>{item.title}</h3>
            <img src={item.imageLinks.smallThumbnail}  />
            <div>{item.authors}</div>
          </div>
          
          <article >{item.description}</article>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;