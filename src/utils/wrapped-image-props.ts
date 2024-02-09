import * as React from 'react';

export interface WrappedImageProps {
  imageAlt: string;
  imageSrc: string;
  onImageError?: React.EventHandler<React.SyntheticEvent<HTMLImageElement>>;
  onImageLoad?: React.EventHandler<React.SyntheticEvent<HTMLImageElement>>;
}

const PROP_KEYS = new Set(['imageAlt', 'imageSrc', 'onImageError', 'onImageLoad']);

// tslint:disable-next-line:no-any
export function getWrappedImageProps(props: any): WrappedImageProps {
  let dataProps: { [key: string]: {} } = {};
  for (let key of Object.keys(props)) {
    if (PROP_KEYS.has(key)) {
      dataProps[key] = props[key];
    }
  }

  return (dataProps as {}) as WrappedImageProps;
}
