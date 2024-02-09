import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import { getWrappedImageProps, WrappedImageProps } from '../../../utils/wrapped-image-props';
import { Card } from '../../card/card';
import { CardBody } from '../../card/card-body';
import { CardImage, CardImageSize, CardImageType } from '../../card/card-image';
import { Interactable } from '../../interactable';
import './styles.sass';

interface Props {
  active?: boolean;
  hover?: boolean;
  info: string;
  linkTo: string;
  title: string;
  tabIndex?: number;
}

export const CommunityResultCard = (props: Props & WrappedImageProps) => {
  const classes: ClassValue = {
    'community-result-card': true,
    'community-result-card--hover': props.hover,
  };

  return (
    <Interactable linkTo={props.linkTo} hover={props.hover} tabIndex={props.tabIndex}>
      <div className={classnames(classes)}>
        <Card name={props.title} row {...getDataProps(props)}>
          <CardImage imageType={CardImageType.BoxArt} imageSize={CardImageSize.Small} {...getWrappedImageProps(props)} />
          <CardBody>
            <h5 className="community-result-card__title ellipsis">{props.title}</h5>
            <p className="community-result-card__info card__info ellipsis">{props.info}</p>
          </CardBody>
        </Card>
      </div>
    </Interactable>
  );
};
