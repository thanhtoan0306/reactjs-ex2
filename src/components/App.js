import React, { useState } from 'react';
import Game from './Game'

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}

export function App() {
  const [count, setCount] = React.useState(0);
  return (
    <StarMatch />
  );
}
