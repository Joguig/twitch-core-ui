import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
  marked?: boolean;
}

export const Brick = (props: Props) => {
  const classes: ClassValue = {
    'tw-brick': true,
    'tw-brick--pd-none': true,
    'tw-brick--marked': props.marked,
  };

  return (
    <div className={classnames(classes)} {...getDataProps(props)}>
      {props.children}
    </div>
  );
};
