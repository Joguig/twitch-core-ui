import * as React from 'react';
import { Link } from 'react-router-dom';
import { getDataProps } from '../../../utils/data-props';
import { getWrappedImageProps, WrappedImageProps } from '../../../utils/wrapped-image-props';
import { Aspect } from '../../aspect';
import { Balloon, BalloonDirection } from '../../balloon/balloon';
import { BalloonWrapper } from '../../balloon/balloon-wrapper';
import { Card } from '../../card/card';
import { CardBody } from '../../card/card-body';
import { CardImage, CardImageType } from '../../card/card-image';
// import { Layout, Position } from '../../layout';
import './styles.sass';

interface Props {
  linkTo: string;
  title: string;
  channelName: string;
  viewerCount: string;
  gameImageSrc: string;
  gameTitle: string;
  gameLinkTo: string;
}

export const LiveChannelCard = (props: Props & WrappedImageProps) => {
  return (
    <div className="tw-live-channel-card">
      <Card name={props.title} {...getDataProps(props)}>
        <Aspect>
          <div>
            <Link to={props.linkTo} title={props.title}>
              <CardImage imageType={CardImageType.Thumbnail} {...getWrappedImageProps(props)}/>
            </Link>
            <Link to={props.gameLinkTo} title={props.gameTitle}>
              <figure className="tw-live-channel-card__boxart">
                <BalloonWrapper display="block">
                  <Balloon tooltip direction={BalloonDirection.BottomCenter}>{props.gameTitle}</Balloon>
                  <CardImage imageSrc={props.gameImageSrc} imageAlt={props.gameTitle} imageType={CardImageType.BoxArt}/>
                </BalloonWrapper>
              </figure>
            </Link>
          </div>
        </Aspect>
        <CardBody>
          <h3 className="tw-live-channel-card__title ellipsis">
            <Link to="#" className="tw-live-channel-card__channel ">
              {props.title}
              </Link>
            </h3>
          <p className="tw-live-channel-card__meta">
            {props.viewerCount} viewers on <Link to="#" className="tw-live-channel-card__videos">{props.channelName}</Link>
          </p>
        </CardBody>
      </Card>
    </div >
  );
};
