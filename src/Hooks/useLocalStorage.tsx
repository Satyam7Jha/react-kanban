import React from "react";

function getSavedValue(key: any, initialValue: any) {
  const savedValue = JSON.parse(localStorage.getItem(key) || "null");
  if (savedValue !== "null" && savedValue !== null) return savedValue;
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
