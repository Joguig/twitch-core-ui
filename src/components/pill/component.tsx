import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import './styles.sass';

interface Props {
  label: string;
}

export const Pill = (props: Props) => {
  return (
    <span className={classnames('tw-pill')} {...getDataProps(props)}>{props.label}</span>
  );
};
