import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  autoFocus?: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  name: string;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  tabIndex?: number;
  value?: string;
}

export const Radio = (props: Props) => {
  return (
    <div className={classnames('radio')}>
      <input
        className="tw-form__input"
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onFocus={props.onFocus}
        tabIndex={props.tabIndex}
        type="radio"
        value={props.value}
        {...getDataProps(props)}
      />
      <label htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};
