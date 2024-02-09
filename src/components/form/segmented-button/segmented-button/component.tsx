import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../../utils/data-props';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
}

export const SegmentedButton = (props: Props) => {
  return (
    <div className={classnames('segmented-button')} {...getDataProps(props)}>
      {props.children}
    </div>
  );
};
