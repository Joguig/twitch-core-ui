import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
  overlay?: boolean;
}

export const CardBody = (props: Props) => {
  const classes: ClassValue = {
    'tw-card-body': true,
    'tw-card-body--overlay': props.overlay,
  };

  return (
    <div className={classnames(classes)} {...getDataProps(props)}>
      {props.children}
    </div>
  );
};
