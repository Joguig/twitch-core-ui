import * as classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  active?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  linkTo?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  pullRight?: boolean;
}

export const Tab = (props: Props) => {
  let tabItem: JSX.Element;

  const classes: ClassValue = {
    'tw-tabs__item': true,
    'mg-l-auto': props.pullRight,
  };

  if (props.linkTo) {
    tabItem = <Link disabled={props.disabled} className={props.active ? 'active' : ''} onClick={props.onClick} to={props.linkTo} role="tab">{props.children}</Link>;
  } else {
    tabItem = <button disabled={props.disabled} className={props.active ? 'active' : ''} onClick={props.onClick} role="tab">{props.children}</button>;
  }

  return (
    <li className={classnames(classes)} role="presentation" {...getDataProps(props)}>
      {tabItem}
    </li>
  );
};
