import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
  display?: 'inline' | 'inline-flex' | 'block';
}

export const BalloonWrapper = (props: Props) => {
  const classes: ClassValue = {
    'tw-balloon-wrapper': true,
    [`tw-balloon-wrapper--${props.display}`]: !!props.display,
  };

  return (
    <div className={classnames(classes)} {...getDataProps(props)}>
      {props.children}
    </div>
  );
};
