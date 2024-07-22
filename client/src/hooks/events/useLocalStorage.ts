"use client";

import {useEffect, useState} from "react";

type StorageKey = string;
type StorageValue = string;

export default function useLocalStorage() {
  const [localStorage, setLocalStorage] = useState<Storage | null>(null);

  useEffect(() => {
    setLocalStorage(window.localStorage);
  }, []);

  function getStorage(key: StorageKey) {
    if (!localStorage) return;
    if (!localStorage.getItem(key)) {
      console.error(`Key ${key} not found in localStorage`);
      return;
    }
    localStorage.getItem(key);
  }

  function setStorage(key: StorageKey, value: StorageValue) {
    if (!localStorage) return;
    if (localStorage.getItem(key)) {
      console.log(`Key ${key} already exists in localStorage, overwriting...`);
      localStorage.setItem(key, value);
      console.log(`Key ${key} set to ${value}`);
    }
    localStorage.setItem(key, value);
  }

  function removeStorage(key: string) {
    if (!localStorage) return;
    if (!localStorage.getItem(key)) {
      console.error(`Key ${key} not found in localStorage`);
      return;
    }
    localStorage.removeItem(key);
  }

  return {
    localStorage: localStorage,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage
  }
}