import * as React from 'react';
import './styles.sass';

interface Props {
  language?: string;
  children?: React.ReactNode;
}

export const DocumentationMarkup = (props: Props) => {
  return (
    <div className="documentation-markup mg-b-5 relative">
      <pre className="">
        <code>
          {props.children}
        </code>
      </pre>
      <div className="documentation-markup__label">
        <span>{props.language || 'React'}</span>
      </div>
    </div>
  );
};
