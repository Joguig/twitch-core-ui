import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  checked?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  id: string;
  label: string;
  name?: string;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  tabIndex?: number;
  value?: string;
}

export const CheckBox = (props: Props) => {
  return (
    <div className={classnames('checkbox')}>
      <input
        type="checkbox"
        className="tw-form__input"
        checked={props.checked}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onFocus={props.onFocus}
        tabIndex={props.tabIndex}
        value={props.value}
        {...getDataProps(props)}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
