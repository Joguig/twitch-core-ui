import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  autoFocus?: boolean;
  checked?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  id: string;
  name?: string;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  tabIndex?: number;
  value?: string;
}

export const Toggle = (props: Props) => {
  return (
    <div className={classnames('tw-toggle')}>
      <input
        autoFocus={props.autoFocus}
        checked={props.checked}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onFocus={props.onFocus}
        tabIndex={props.tabIndex}
        type="checkbox"
        value={props.value}
        {...getDataProps(props)}
      />
      <label htmlFor={props.id} className="tw-toggle__button" />
    </div>
  );
};
