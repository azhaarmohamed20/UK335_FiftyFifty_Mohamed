// /components/CoinFlipHistoryContext.js
import React, { createContext, useState } from 'react';

export const CoinFlipHistoryContext = createContext();

export const CoinFlipHistoryProvider = ({ children }) => {
  const [coinFlipHistory, setCoinFlipHistory] = useState([]);


  return (
    <CoinFlipHistoryContext.Provider value={{ coinFlipHistory, setCoinFlipHistory }}>
      {children}
    </CoinFlipHistoryContext.Provider>
  );
};
