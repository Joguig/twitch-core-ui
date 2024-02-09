import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import './styles.sass';

export enum ProgressBarSize {
  Default,
  Small,
  ExtraSmall,
}

const PROGRESS_BAR_SIZE_CLASSES = {
  [ProgressBarSize.Small]: 'tw-progress-bar--sm',
  [ProgressBarSize.ExtraSmall]: 'tw-progress-bar--xs',
};

export enum ProgressBarType {
  Default,
  VODPreview,
  Caution,
  Error,
}

const PROGRESS_BAR_TYPE_CLASSES = {
  [ProgressBarType.Caution]: 'tw-progress-bar--caution',
  [ProgressBarType.Error]: 'tw-progress-bar--error',
  [ProgressBarType.VODPreview]: 'tw-progress-bar--vod',
};

interface Props {
  countdown?: number;
  onCountdownEnd?: (e: React.AnimationEvent<HTMLDivElement>) => void;
  size?: ProgressBarSize;
  type?: ProgressBarType;
  value?: number;
}

export const ProgressBar = (props: Props) => {
  const classes: ClassValue = {
    'tw-progress-bar': true,
    'tw-progress-bar--countdown': !!props.countdown,
  };

  if (props.size) {
    classes[PROGRESS_BAR_SIZE_CLASSES[props.size]] = true;
  }

  if (props.type) {
    classes[PROGRESS_BAR_TYPE_CLASSES[props.type]] = true;
  }

  return (
    <div className={classnames(classes)} {...getDataProps(props)}>
      <div
        onAnimationEnd={props.onCountdownEnd}
        className="tw-progress-bar__fill"
        style={{
          width: `${props.value}%`,
          animationDuration: props.countdown ? `${props.countdown}s` : '',
        }}
      />
    </div>
  );
};
