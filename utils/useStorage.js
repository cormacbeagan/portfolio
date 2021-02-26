import { useState } from 'react';

export default function useStorage(key, init) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : init;
    } catch (e) {
      console.log(e);
      return init;
    }
  });

  const setStorageValue = (val) => {
    try {
      const valueToStore = val instanceof Function ? val(value) : val;
      setValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.log(e);
    }
  };
  return [value, setStorageValue];
}

//* based on the work of Andrew Bliss
//* https://andrewgbliss.medium.com/react-custom-hook-uselocalstorage-afbde976c72b
//* Accessed 18.02.21
