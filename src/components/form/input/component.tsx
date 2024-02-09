import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

export enum InputType {
  Text,
  Email,
  Password,
  Search,
}

interface Props {
  autoComplete?: string;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  iconLeft?: boolean;
  iconRight?: 1 | 2;
  id?: string;
  maxLength?: number;
  name?: string;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  tabIndex?: number;
  type: InputType;
  value?: string;
}

export const Input = (props: Props) => {
  const classes: ClassValue = {
    'tw-form__input': true,
    'tw-form__input-group--icon-left': props.iconLeft,
    'tw-form__input-group--icon-right': props.iconRight === 1,
    'tw-form__input-group--2-icons-right': props.iconRight === 2,
  };

  return (
    <input
      type={InputType[props.type].toLowerCase()}
      className={classnames(classes)}
      placeholder={props.placeholder}
      autoCorrect={props.autoCorrect ? 'on' : 'off'}
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
      disabled={props.disabled}
      id={props.id}
      name={props.name}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onKeyDown={props.onKeyDown}
      maxLength={props.maxLength}
      readOnly={props.readOnly}
      tabIndex={props.tabIndex}
      value={props.value}
      {...getDataProps(props)}
    />
  );
};
