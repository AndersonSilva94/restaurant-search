import { useState, useEffect } from 'react';

function usePersistentState(key, initialState) {
  const [state, setState] = useState(() => {
    const valueStorage = localStorage.getItem(key);

    if (valueStorage) return JSON.parse(valueStorage);
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState];
}

export default usePersistentState;
