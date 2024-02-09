import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import './styles.sass';

export enum AspectRatio {
  Aspect21x9 = 1,
  Aspect16x9,
  Aspect4x3,
  Aspect1x1,
  Aspect3x4,
  BoxArt,
}

export enum Align {
  Top = 1,
  Center,
  Bottom,
}

const ASPECT_RATIO_CLASSES = {
  [AspectRatio.Aspect21x9]: 'tw-aspect--21x9',
  [AspectRatio.Aspect16x9]: 'tw-aspect--16x9',
  [AspectRatio.Aspect4x3]: 'tw-aspect--4x3',
  [AspectRatio.Aspect1x1]: 'tw-aspect--1x1',
  [AspectRatio.Aspect3x4]: 'tw-aspect--3x4',
  [AspectRatio.BoxArt]: 'tw-aspect--boxart',
};

const ALIGN_CLASSES = {
  [Align.Top]: 'tw-aspect--align-top',
  [Align.Center]: 'tw-aspect--align-center',
  [Align.Bottom]: 'tw-aspect--align-bottom',
};

interface Props {
  ratio?: AspectRatio;
  align?: Align;
  children?: React.ReactNode;
  crop?: boolean;
}

export const Aspect = (props: Props) => {
  const classes: ClassValue = {
    'tw-aspect--crop': props.crop,
  };

  if (props.ratio) {
    classes[ASPECT_RATIO_CLASSES[props.ratio]] = true;
  } else {
    classes[ASPECT_RATIO_CLASSES[AspectRatio.Aspect16x9]] = true;
  }

  if (props.align) {
    classes[ALIGN_CLASSES[props.align]] = true;
  } else {
    classes[ALIGN_CLASSES[Align.Top]] = true;
  }

  return (
    <div className={classnames('tw-aspect', classes)} {...getDataProps(props)}>
      {props.children}
    </div>
  );
};
