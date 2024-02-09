import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  autoFocus?: boolean;
  children?: React.ReactNode;
  cols?: number;
  disabled?: boolean;
  iconCount?: 1 | 2;
  id?: string;
  maxLength?: number;
  name?: string;
  onBlur?: React.FormEventHandler<HTMLTextAreaElement>;
  onChange?: React.FormEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FormEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  noResize?: boolean;
  rows?: number;
  tabIndex?: number;
  value?: string;
}

export const TextArea = (props: Props) => {
  let resize = props.noResize ? 'resize-none' : '';

  const classes: ClassValue = {
    'tw-form__input-group': true,
    'tw-form__input-group--icon-right': props.iconCount === 1,
    'tw-form__input-group--2-icons-right': props.iconCount === 2,
  };

  const textarea = (
    <textarea
      className={`tw-form__input ${resize}`}
      autoFocus={props.autoFocus}
      cols={props.cols}
      disabled={props.disabled}
      id={props.id}
      maxLength={props.maxLength}
      name={props.name}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onKeyDown={props.onKeyDown}
      placeholder={props.placeholder}
      rows={props.rows}
      tabIndex={props.tabIndex}
      value={props.value}
      {...getDataProps(props)}
    />
  );

  if (props.iconCount) {
    return (
      <div className={classnames(classes)}>
        {textarea}
        <div className="tw-form__icon-group tw-form__icon-group--right">
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      textarea
    );
  }
};
