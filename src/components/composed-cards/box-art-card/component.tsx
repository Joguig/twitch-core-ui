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

export const BoxArtCard = (props: Props & WrappedImageProps) => {
  return (
    <div className="tw-box-art-card">
      <Card name={props.title} linkTo={props.linkTo} {...getDataProps(props)}>
        <CardImage imageType={CardImageType.BoxArt} {...getWrappedImageProps(props)} />
        <CardBody>
          <h3 className="tw-box-art-card__title ellipsis">{props.title}</h3>
          <p className="tw-box-art-card__meta ellipsis">{props.info}</p>
        </CardBody>
      </Card>
    </div>
  );
};
