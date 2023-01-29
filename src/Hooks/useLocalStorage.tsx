import React from "react";

function getSavedValue(key: any, initialValue: any) {
  const savedValue = JSON.parse(localStorage.getItem(key) || "{}");
  if (Object.keys(savedValue).length !== 0) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key: any, initialValue: any) {
  const [value, setValue] = React.useState(() => {
    return getSavedValue(key, initialValue);
  });
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
