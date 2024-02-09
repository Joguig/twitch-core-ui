import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  disabled?: boolean;
  id?: string;
  name?: string;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  max?: number;
  min?: number;
  step?: number;
  tabIndex?: number;
  value?: string;
}

export const Range = (props: Props) => {
  return (
    <input
      className={classnames('tw-form__input')}
      id={props.id}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
      tabIndex={props.tabIndex}
      type="range"
      min={props.min}
      max={props.max}
      name={props.name}
      step={props.step}
      value={props.value}
      {...getDataProps(props)}
    />
  );
};
