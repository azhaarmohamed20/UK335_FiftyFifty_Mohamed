import React, { createContext, useState } from 'react';

export const RollHistoryContext = createContext();

export const RollHistoryProvider = ({ children }) => {
  const [rollHistory, setRollHistory] = useState([]);

  return (
    <RollHistoryContext.Provider value={{ rollHistory, setRollHistory }}>
      {children}
    </RollHistoryContext.Provider>
  );
};
