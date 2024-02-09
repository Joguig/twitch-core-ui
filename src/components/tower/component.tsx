import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import './styles.sass';

export enum TowerGutter {
  Default,
  ExtraSmall,
  Small,
  Large,
  None,
}

const TOWER_GUTTER_CLASSES = {
  [TowerGutter.ExtraSmall]: 'tw-tower--gutter-xs',
  [TowerGutter.Small]: 'tw-tower--gutter-sm',
  [TowerGutter.Large]: 'tw-tower--gutter-lg',
  [TowerGutter.None]: 'tw-tower--gutter-none',
};

export enum TowerChildWidth {
  ExtraSmall = 1, // 120px
  Small, // 180px
  Medium, // 240px
  Large, // 300px
}

const TOWER_CHILD_WIDTH_CLASESS = {
  [TowerChildWidth.ExtraSmall]: 'tw-tower--120',
  [TowerChildWidth.Small]: 'tw-tower--180',
  [TowerChildWidth.Medium]: 'tw-tower--240',
  [TowerChildWidth.Large]: 'tw-tower--300',
};

interface Props {
  center?: boolean;
  children?: React.ReactNode;
  childWidth?: TowerChildWidth;
  gutterSize?: TowerGutter;
  noGrow?: boolean;
  noWrap?: boolean;
  placeholderItems?: number;
  breakPointXS?: number; // >= 0px Breakpoint
  breakPointSM?: number; // >= 786px Breakpoint
  breakPointMD?: number; // >= 1024px Breakpoint
  breakPointLG?: number; // >= 1200px Breakpoint
  breakPointXL?: number; // >= 1400px Breakpoint
}

export const Tower = (props: Props) => {
  const classes: ClassValue = {
    'tw-tower': true,
    'tw-tower--nogrow': props.noGrow,
    'tw-tower--nowrap': props.noWrap,
    'justify-content-center': props.center,
    [`tower--xs-1-${props.breakPointXS}`]: !!props.breakPointXS,
    [`tower--sm-1-${props.breakPointSM}`]: !!props.breakPointSM,
    [`tower--md-1-${props.breakPointMD}`]: !!props.breakPointMD,
    [`tower--lg-1-${props.breakPointLG}`]: !!props.breakPointLG,
    [`tower--xl-1-${props.breakPointXL}`]: !!props.breakPointXL,
  };

  if (props.gutterSize) {
    classes[TOWER_GUTTER_CLASSES[props.gutterSize]] = true;
  }

  if (props.childWidth) {
    classes[TOWER_CHILD_WIDTH_CLASESS[props.childWidth]] = true;
  }

  const placeholderItems = new Array<JSX.Element>();
  if (props.placeholderItems) {
    for (let i = 0; i < props.placeholderItems; ++i) {
      placeholderItems.push((
        <div className="tw-tower_placeholder" key={i} />
      ));
    }
  }

  return (
    <div className={classnames(classes)} {...getDataProps(props)}>
      {props.children}
      {placeholderItems}
    </div>
  );
};
