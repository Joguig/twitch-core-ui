import * as classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

interface Props {
  border?: boolean;
  children?: React.ReactNode;
  linkTo?: string;
  name?: string;
  row?: boolean;
}

export const Card = (props: Props) => {
  const classes: ClassValue = {
    'tw-card': true,
    'tw-card--bordered': props.border,
    'tw-card--row': props.row,
  };

  let cardContent: JSX.Element;

  if (props.linkTo) {
    cardContent = (
      <Link to={props.linkTo} className="tw-card__layout" data-a-target="card-link">
        {props.children}
      </Link>
    );
  } else {
    cardContent = (
      <div className="tw-card__layout">
        {props.children}
      </div>
    );
  }

  return (
    <div key={props.name} className={classnames(classes)} {...getDataProps(props)}>
      {cardContent}
    </div>
  );
};
