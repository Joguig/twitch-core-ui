import * as React from 'react';
import './styles.sass';

interface Props {
  description: string;
  title: string;
  updateDate: string;
}

export const PageHeader = (props: Props) => {
  return (
    <div className="page-header">
      <div className="text-wrapper">
        <h3 className="page-header__title mg-b-4">{props.title}</h3>
        <p className="page-header__description mg-b-2">{props.description}</p>
        <p className="page-header__date">Updated {props.updateDate}</p>
      </div>
    </div>
  );
};
