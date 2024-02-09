import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import { getWrappedImageProps, WrappedImageProps } from '../../../utils/wrapped-image-props';
import { Card } from '../../card/card';
import { CardBody } from '../../card/card-body';
import { CardImage, CardImageType } from '../../card/card-image';
import { Interactable } from '../../interactable';
import './styles.sass';

interface Props {
  hover?: boolean;
  linkTo: string;
  title: string;
  channelName: string;
  viewerCount: string;
  active?: boolean;
  tabIndex?: number;
}

export const LiveResultCard = (props: Props & WrappedImageProps) => {
  const classes: ClassValue = {
    'tw-live-result-card': true,
    'tw-live-result-card--hover': props.hover,
  };

  return (
    <div className={classnames(classes)}>
      <Interactable linkTo={props.linkTo} hover={props.hover} tabIndex={props.tabIndex}>
        <Card name={props.title} {...getDataProps(props)}>
          <div className="tw-live-result-card__wrapper">
            <CardImage imageType={CardImageType.Thumbnail} {...getWrappedImageProps(props)} />
            <CardBody overlay>
              <div className="tw-live-result-card__body">
                <h5 className="tw-live-result-card__title ellipsis">{props.channelName}</h5>
                <div className="tw-live-result-card__viewer-count-container flex align-items-center">
                  <svg height="12px" width="12px" viewBox="0 0 12 12" className="tw-live-result-card__user-icon flex-shrink-0">
                    <path d="M8.5 11H1v-1l2-2h2L3 6V1h6v5L7 8h2l2 2v1z" />
                  </svg>
                  <p className="tw-live-result-card__viewer-count ellipsis">{props.viewerCount}</p>
                </div>
                <p className="tw-live-result-card__info ellipsis">{props.title}</p>
              </div>
            </CardBody>
          </div>
        </Card>
      </Interactable>
    </div>
  );
};
