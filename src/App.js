import React, { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

export default App;
