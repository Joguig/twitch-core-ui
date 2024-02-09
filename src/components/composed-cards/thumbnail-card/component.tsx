import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import { getWrappedImageProps, WrappedImageProps } from '../../../utils/wrapped-image-props';
import { Card } from '../../card/card';
import { CardBody } from '../../card/card-body';
import { CardImage, CardImageType } from '../../card/card-image';
import './styles.sass';

interface Props {
  info: string | JSX.Element;
  linkTo?: string;
  title: string;
}

export const ThumbnailCard = (props: Props & WrappedImageProps) => {
  return (
    <div className="tw-thumbnail-card">
      <Card name={props.title} linkTo={props.linkTo} {...getDataProps(props)}>
        <CardImage imageType={CardImageType.Thumbnail} {...getWrappedImageProps(props)} />
        <CardBody>
          <h3 className="tw-thumbnail-card__title ellipsis">{props.title}</h3>
          <p className="tw-thumbnail-card__meta ellipsis">{props.info}</p>
        </CardBody>
      </Card>
    </div>
  );
};
