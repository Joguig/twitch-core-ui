import * as React from 'react';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
}

export const DocumentationProps = (props: Props) => {
  return (
    <div className="documentation-props full-width">
      <ul className="documentation-props__header flex align-items-center pd-x-2 pd-y-1">
        <li className="documentation-props__header-item">Property</li>
        <li className="documentation-props__header-item">Type</li>
        <li className="documentation-props__header-item">Default</li>
        <li className="documentation-props__header-item">Description</li>
      </ul>
      <div className="documentation-props__wrapper border-l border-r">
        {props.children}
      </div>
    </div>
  );
};
