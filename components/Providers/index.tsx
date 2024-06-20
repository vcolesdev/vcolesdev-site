import React, {Attributes, ReactNode} from "react";

type Props = Attributes;
type Children = ReactNode[] | ReactNode;

interface ProviderElement {
  element: string;
  children: Children;
  className?: string;
  id?: string;
  [key: string]: any;
}

function Element(el: ProviderElement) {
  return React.createElement(
    el.element,
    {
      className: el.className,
      id: el.id,
      ...el,
    },
    el.children
  );
}

export default function Provider(el: ProviderElement) {
  return <Element {...el}>{el.children}</Element>;
}
