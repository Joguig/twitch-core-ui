import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../../utils/data-props';
import './styles.sass';

export type SegmentedButtonType = 'radio' | 'checkbox';

interface Props {
  checked?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  label: string;
  name: string;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  tabIndex?: number;
  type?: SegmentedButtonType;
  value?: string;
}

export const SegmentedButtonOption = (props: Props) => {
  const classes: ClassValue = {
    'tw-button': true,
    'tw-button--radio': true,
  };

  return (
    <label className={classnames(classes)} htmlFor={props.id}>
      <input
        type={props.type || 'radio'}
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
      <span className="tw-button__label">{props.label}</span>
    </label>
  );
};
