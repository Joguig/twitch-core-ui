import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import { Balloon, BalloonDirection } from '../balloon/balloon';
import { BalloonWrapper } from '../balloon/balloon-wrapper';
import { SVG, SVGAsset, SVGType } from '../svg';
import './styles.sass';

export enum StatSize {
  Default = 1,
  Small,
  Large,
}

interface Props {
  label: string;
  value: string;
  live?: boolean;
  icon?: SVGAsset;
  overlay?: boolean;
  size?: StatSize;
  noTooltip?: boolean;
}

const SIZE_CLASSES = {
  [StatSize.Default]: '',
  [StatSize.Small]: 'tw-stat--sm',
  [StatSize.Large]: 'tw-stat--lg',
};

const SIZE_MAP = {
  [StatSize.Default]: 16,
  [StatSize.Small]: 14,
  [StatSize.Large]: 20,
};

export const Stat = (props: Props) => {
  const classes: ClassValue = {
    'tw-stat': true,
    'tw-stat--live': props.live,
    'tw-stat--overlay': props.overlay,
  };

  let size;

  if (props.size) {
    classes[SIZE_CLASSES[props.size]] = true;
    size = SIZE_MAP[props.size];
  } else {
    size = SIZE_MAP[StatSize.Default];
  }

  let icon;

  if (props.icon) {
    icon = (<SVG width={size} height={size} type={SVGType.Inherit} asset={props.icon}/>);
  }

  let tooltip = props.noTooltip ? '' : (
    <Balloon tooltip direction={BalloonDirection.BottomCenter}>{props.value} {props.label}</Balloon>
  );

  return (
    <BalloonWrapper>
      <div className={classnames(classes)} {...getDataProps(props)}>
        <span className="tw-stat__icon">{icon}</span>
        <span className="tw-stat__value">{props.value}</span>
      </div>
      {tooltip}
    </BalloonWrapper>
  );
};
