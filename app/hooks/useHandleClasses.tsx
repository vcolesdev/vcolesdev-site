import React, {useEffect} from "react";
import classNames from "classnames";

/**
 * A custom hook that handles the classes of an element.
 * @param defaultClass
 * @param myClasses
 */
const useHandleClasses = (defaultClass: string, myClasses?: string | []) => {
  const [elementClasses, setElementClasses] = React.useState<string>("");

  useEffect(() => {
    const classes = myClasses
      ? defaultClass
      : classNames(defaultClass, myClasses);

    setElementClasses(classes);
  }, [elementClasses]);

  return elementClasses;
};

export default useHandleClasses;
