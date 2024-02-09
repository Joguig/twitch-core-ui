import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import { WrappedImageProps } from '../../utils/wrapped-image-props';
import './styles.sass';

export type AvatarSize = 30 | 36 | 40 | 50 | 96 | 300;

interface Props {
  size: AvatarSize;
}

export const Avatar = (props: Props & WrappedImageProps) => {
  let defaultAvatar: string;

  if (props.size === 300) {
    defaultAvatar = 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_300x300.png';
  } else if (props.size === 96) {
    defaultAvatar = 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png';
  } else {
    defaultAvatar = 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png';
  }

  return (
    <figure className={classnames('avatar', `avatar--size-${props.size}`)} {...getDataProps(props)}>
      <img src={props.imageSrc || defaultAvatar} alt={props.imageAlt} onLoad={props.onImageLoad} onError={props.onImageError} />
    </figure>
  );
};
