import { useState } from "react";

export default function useStateStorage(
  key: string,
  defaultValue: any
): [any, Function] {
  const [state, setState] = useState(() => {
    const storageValue = window.localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : defaultValue;
  });

  const setStorage = (value: any) => {
    setState(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setStorage];
}
