import * as React from 'react';
import { Demo } from '../../../components/demo';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
}

export const DocumentationComponent = (props: Props) => {
  return (
    <div className="documentation-component">
      <Demo>
        {props.children}
      </Demo>
    </div>
  );
};
