import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  hint?: string;
  id?: string;
  label: string;
}

export const FormGroup = (props: Props) => {
  const classes: ClassValue = {
    'tw-form__group': true,
    'tw-form__group--error': props.error,
  };

  let formHint: JSX.Element | undefined;

  if (props.hint && !props.error) {
    formHint = <p className="tw-form__hint">{props.hint}</p>;
  } else if (props.errorMessage && props.error) {
    formHint = <p className="tw-form__hint--error">{props.errorMessage}</p>;
  }

  return (
    <div className={classnames(classes)} {...getDataProps(props)}>
      <label className="tw-form__label" htmlFor={props.id}>{props.label}</label>
      {props.children}
      {formHint}
    </div>
  );
};
