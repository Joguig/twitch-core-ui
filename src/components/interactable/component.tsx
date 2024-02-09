import * as classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { getDataProps } from '../../utils/data-props';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
  disabled?: boolean;
  hover?: boolean;
  linkTo?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  selected?: boolean;
  tabIndex?: number;
  targetBlank?: boolean;
}

export const Interactable = (props: Props) => {
  const classes: ClassValue = {
    'interactable': true,
    'interactable--selected': props.selected,
    'interactable--hover': props.hover,
    'interactable--disabled': props.disabled,
  };

  let target = props.targetBlank ? '_blank' : undefined;

  if (props.linkTo) {
    return (
      <Link onClick={props.onClick} to={props.linkTo} target={target} className={classnames(classes)} tabIndex={props.tabIndex ? props.tabIndex : 0} {...getDataProps(props)}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button onClick={props.onClick} disabled={props.disabled} className={classnames(classes)} tabIndex={props.tabIndex} {...getDataProps(props)} >
        {props.children}
      </button>
    );
  }

};
