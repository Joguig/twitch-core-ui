import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import { WrappedImageProps } from '../../../utils/wrapped-image-props';
import { Aspect, AspectRatio } from '../../aspect';
import './styles.sass';

export enum CardImageType {
  Thumbnail = 1,
  BoxArt,
  Avatar,
}

export enum CardImageSize {
  Default = 1,
  ExtraSmall,
  Small,
  Large,
  ExtraLarge,
}

export enum CardImageAttach {
  BottomRight = 1,
  BottomLeft,
  TopRight,
  TopLeft,
}

interface Props {
  animatePreview?: boolean;
  imageAttach?: CardImageAttach;
  imageType?: CardImageType;
  imageSize?: CardImageSize;
  pinned?: boolean;
  children?: React.ReactNode;
}

const CARD_IMAGE_ASPECT_RATIO = {
  [CardImageType.Thumbnail]: AspectRatio.Aspect16x9,
  [CardImageType.BoxArt]: AspectRatio.Aspect3x4,
  [CardImageType.Avatar]: AspectRatio.Aspect1x1,
};

const CARD_IMAGE_SIZE_CLASSES = {
  [CardImageSize.ExtraSmall]: 'tw-card-img--xs',
  [CardImageSize.Small]: 'tw-card-img--sm',
  [CardImageSize.Large]: 'tw-card-img--lg',
  [CardImageSize.ExtraLarge]: 'tw-card-img--xl',
};

const CARD_TYPE_CLASSES = {
  [CardImageType.Thumbnail]: 'tw-card-img--thumbnail',
  [CardImageType.BoxArt]: 'tw-card-img--boxart',
  [CardImageType.Avatar]: 'tw-card-img--avatar',
};

const CARD_ATTACH_CLASSES = {
  [CardImageAttach.BottomRight]: 'tw-card-img--bottom-right',
  [CardImageAttach.BottomLeft]: 'tw-card-img--bottom-left',
  [CardImageAttach.TopRight]: 'tw-card-img--top-right',
  [CardImageAttach.TopLeft]: 'tw-card-img--top-left',
};

export const CardImage = (props: Props & WrappedImageProps) => {
  let imageType;

  if (props.imageType) {
    imageType = CARD_IMAGE_ASPECT_RATIO[props.imageType];
  } else {
    imageType = CARD_IMAGE_ASPECT_RATIO[AspectRatio.Aspect16x9];
  }

  const classes: ClassValue = {
    'tw-card-img': true,
    'tw-card-img--preview': props.animatePreview,
  };

  if (props.imageType) {
    classes[CARD_TYPE_CLASSES[props.imageType]] = true;
  }

  if (props.imageSize) {
    classes[CARD_IMAGE_SIZE_CLASSES[props.imageSize]] = true;
  }

  if (props.pinned && props.imageAttach) {
    classes[CARD_ATTACH_CLASSES[props.imageAttach]] = true;
    classes['tw-card-img--pinned'] = true;
  }

  return (
    <figure className={classnames(classes)} {...getDataProps(props)}>
      <Aspect ratio={imageType}>
        <img src={props.imageSrc} alt={props.imageAlt} onLoad={props.onImageLoad} onError={props.onImageError} />
      </Aspect>
      {props.children}
    </figure>
  );
};
