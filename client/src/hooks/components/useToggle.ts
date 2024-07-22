import {useState} from "react";

export default function useToggle(initialState: unknown) {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };

  return [toggleValue, toggler];
}
