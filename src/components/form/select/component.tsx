import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onBlur?: React.FormEventHandler<HTMLSelectElement>;
  onChange?: React.FormEventHandler<HTMLSelectElement>;
  onFocus?: React.FormEventHandler<HTMLSelectElement>;
  onSelect?: React.FormEventHandler<HTMLSelectElement>;
  tabIndex?: number;
  value?: string;
}

export const Select = (props: Props) => {
  const classes: ClassValue = {
    'tw-form__input': true,
    'tw-form__input--disabled': props.disabled,
  };

  return (
    <select
      className={classnames(classes)}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      id={props.id}
      name={props.name}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onSelect={props.onSelect}
      tabIndex={props.tabIndex}
      value={props.value}
      {...getDataProps(props)}
    >
      {props.children}
    </select>
  );
};
