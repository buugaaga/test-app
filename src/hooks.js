import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Unable to get ${key} from localstorage:`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
      try {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error(`Unable to save ${key} in localstorage:`, error)
      }
    }

  return [storedValue, setValue]
}