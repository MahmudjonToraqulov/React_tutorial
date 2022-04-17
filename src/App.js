import React from 'react'
import ReactRouter from './components/hooks/react_router';
 

function App() {
  return (  <>
      <h1>React Router</h1>
      <a href='http://localhost:3000/'> home </a>
      <a href='http://localhost:3000/about'> about </a>
      <a href='http://localhost:3000/contact'>   contact</a>
      <hr />
        <ReactRouter />
      </>
  );
}

export default App;
