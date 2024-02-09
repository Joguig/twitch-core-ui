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
  hover?: boolean;
  linkTo: string;
  videoName: string;
  channelName: string;
  videoDate: string;
  videoLength: string;
  active?: boolean;
  tabIndex?: number;
}

export const VideoResultCard = (props: Props & WrappedImageProps) => {
  const classes: ClassValue = {
    'video-result-card': true,
    'video-result-card--hover': props.hover,
  };

  return (
    <Interactable linkTo={props.linkTo} hover={props.hover} tabIndex={props.tabIndex}>
      <div className={classnames(classes)}>
        <Card name={props.videoName} row {...getDataProps(props)}>
          <CardImage imageType={CardImageType.Thumbnail} imageSize={CardImageSize.Small} {...getWrappedImageProps(props)} />
          <CardBody>
            <h5 className="video-result-card__title ellipsis">{props.videoName}</h5>
            <p className="video-result-card__info ellipsis">{props.videoDate} · {props.videoLength} · <span className="video-result-card__highlight">{props.channelName}</span></p>
          </CardBody>
        </Card>
      </div>
    </Interactable>
  );
};
