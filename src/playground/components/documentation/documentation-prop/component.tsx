import * as React from 'react';
import './styles.sass';

interface Props {
  property?: string;
  type?: string;
  default?: string;
  description?: string;
}

export const DocumentationProp = (props: Props) => {
  return (
    <div className="documentation-prop border-b pd-x-2 pd-y-2">
      <ul className="documentation-prop__wrapper flex align-items-center">
        <li className="documentation-prop__item">{props.property}</li>
        <li className="documentation-prop__item">{props.type}</li>
        <li className="documentation-prop__item">{props.default}</li>
        <li className="documentation-prop__item">{props.description}</li>
      </ul>
    </div>
  );
};
