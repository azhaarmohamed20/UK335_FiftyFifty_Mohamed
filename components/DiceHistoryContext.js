// /components/DiceRollHistoryContext.js
import React, { createContext, useState } from 'react';

export const DiceRollHistoryContext = createContext();

export const DiceRollHistoryProvider = ({ children }) => {
  const [diceRollHistory, setDiceRollHistory] = useState([]);

  return (
    <DiceRollHistoryContext.Provider value={{ diceRollHistory, setDiceRollHistory }}>
      {children}
    </DiceRollHistoryContext.Provider>
  );
};
