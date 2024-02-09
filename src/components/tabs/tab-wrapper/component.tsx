import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  alignRight?: boolean;
  children?: React.ReactNode;
}

export const TabWrapper = (props: Props) => {
  return (
    <div className={props.alignRight ? 'flex' : ''} {...getDataProps(props)}>
      <ul className={`tw-tabs ${props.alignRight ? 'mg-l-auto' : ''}`} role="tablist">
        {props.children}
      </ul>
    </div>
  );
};
