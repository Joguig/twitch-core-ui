import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import './styles.sass';

export enum BalloonSize {
  ExtraSmall = 1,
  Small,
  Medium,
  Large,
  ExtraLarge,
}

const BALLOON_SIZE_CLASSES = {
  [BalloonSize.ExtraSmall]: 'tw-balloon--xs',
  [BalloonSize.Small]: 'tw-balloon--sm',
  [BalloonSize.Medium]: 'tw-balloon--md',
  [BalloonSize.Large]: 'tw-balloon--lg',
  [BalloonSize.ExtraLarge]: 'tw-balloon--xl',
};

export enum BalloonDirection {
  Top = 1,
  Bottom,
  Left,
  Right,
  TopLeft,
  TopRight,
  BottomRight,
  BottomLeft,
  TopCenter,
  BottomCenter,
  LeftCenter,
  RightCenter,
}

const BALLOON_DIRECTION_CLASSES = {
  [BalloonDirection.Top]: 'tw-balloon--up',
  [BalloonDirection.Bottom]: 'tw-balloon--down',
  [BalloonDirection.Left]: 'tw-balloon--left',
  [BalloonDirection.Right]: 'tw-balloon--right',
  [BalloonDirection.TopLeft]: 'tw-balloon--up tw-balloon--left',
  [BalloonDirection.TopRight]: 'tw-balloon--up tw-balloon--right',
  [BalloonDirection.BottomRight]: 'tw-balloon--down tw-balloon--right',
  [BalloonDirection.BottomLeft]: 'tw-balloon--down tw-balloon--left',
  [BalloonDirection.TopCenter]: 'tw-balloon--up tw-balloon--center',
  [BalloonDirection.BottomCenter]: 'tw-balloon--down tw-balloon--center',
  [BalloonDirection.LeftCenter]: 'tw-balloon--left tw-balloon--center',
  [BalloonDirection.RightCenter]: 'tw-balloon--right tw-balloon--center',
};

interface Props {
  children?: React.ReactNode;
  direction?: BalloonDirection;
  noPadding?: boolean;
  noTail?: boolean;
  offsetX?: string;
  offsetY?: string;
  show?: boolean;
  size?: BalloonSize;
  toggle?: boolean;
  tooltip?: boolean;
}

export const Balloon = (props: Props) => {
  const classes: ClassValue = {
    'tw-balloon': true,
    'tw-balloon--no-tail': props.noTail,
    'tw-balloon--no-padding': props.noPadding,
    'block': props.show,
    'tw-balloon--tooltip': props.tooltip,
    'tw-balloon--toggle': props.toggle,
  };

  if (props.size) {
    classes[BALLOON_SIZE_CLASSES[props.size]] = true;
  }

  if (props.direction) {
    classes[BALLOON_DIRECTION_CLASSES[props.direction]] = true;
  } else {
    classes[BALLOON_DIRECTION_CLASSES[BalloonDirection.Bottom]] = true;
  }

  let marginLeft: string | undefined;
  let marginRight: string | undefined;
  let marginTop: string | undefined;
  let marginBottom: string | undefined;

  if (props.offsetX) {
    if (
      props.direction === BalloonDirection.Left ||
      props.direction === BalloonDirection.TopLeft ||
      props.direction === BalloonDirection.BottomLeft ||
      props.direction === BalloonDirection.LeftCenter
    ) {
      marginRight = props.offsetX;
    } else {
      marginLeft = props.offsetX;
    }
  }

  if (props.offsetY) {
    if (
      props.direction === BalloonDirection.Top ||
      props.direction === BalloonDirection.TopLeft ||
      props.direction === BalloonDirection.TopRight ||
      props.direction === BalloonDirection.TopCenter
    ) {
      marginBottom = props.offsetY;
    } else {
      marginTop = props.offsetY;
    }
  }

  const styles: React.CSSProperties = {
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  };

  return (
    <div className={classnames(classes)} {...getDataProps(props)} style={styles}>
      {props.children}
    </div>
  );
};
