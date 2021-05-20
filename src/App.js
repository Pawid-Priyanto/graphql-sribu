import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const QUERY_MOVIE = `
{
    countries{
      code
      name
      native
      currency
    }
  }   
`;

const QUERY_MOVIES = `
{
  movies{
    id,
    name,
    genre,
    actor {
        id,
        name
    }
}
}`;
// https://n7b67.sse.codesandbox.io/graphql
// https://countries.trevorblades.com/
export default function App() {

  const [movie, setMovie] = useState([]);
  React.useEffect(() => {
    fetch("https://cors.bridged.cc/https://n7b67.sse.codesandbox.io/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        query: QUERY_MOVIES
      })
    })
      .then((response) => response.json())
      .then((data) => setMovie(data.data.movies))
      .catch(error => console.error(error, 'ini error'))
  }, []);
  console.log(movie.map(i => i.actor.name))
  return (
    <Router>
    <div className="App">
      <h1>Welcome To Netflix</h1>
     {/* {JSON.stringify(movie, 2, null)} */}
     {movie.map(item => (
       <>
       <li>{item.id}</li>
       <li>{item.name}</li>
       <li>{item.genre}</li>
       <Link to=""><li>{item.actor.name}</li></Link>
       </>
     ))}
    </div>
    </Router>
  );
}
