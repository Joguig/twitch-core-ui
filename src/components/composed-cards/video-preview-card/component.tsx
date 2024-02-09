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
import { Display, FlexDirection, FlexWrap, Layout, Position } from '../../layout';
import { ProgressBar, ProgressBarSize, ProgressBarType } from '../../progress-bar';
import { Stat, StatSize } from '../../stat';
import { SVGAsset } from '../../svg';
import './styles.sass';

interface Props {
  animatePreview?: boolean;
  previewImageSrc: string;
  boxArtOverlay?: boolean;
  date: string;
  info?: string | JSX.Element;
  linkTo: string;
  length: string;
  title: string;
  channelLinkTo: string;
  channelName: string;
  viewerCount: string;
  gameImageSrc: string;
  gameTitle: string;
  gameLinkTo: string;
  progress?: number;
  hover?: boolean;
}

export const VideoPreviewCard = (props: Props & WrappedImageProps) => {

  let boxart = (
    <Link to={props.gameLinkTo} title={props.gameTitle}>
      <figure className={`tw-video-preview-card__boxart ${props.boxArtOverlay ? 'tw-video-preview-card__boxart--overlay' : ''}`} >
        <BalloonWrapper display="block">
          <Balloon tooltip direction={BalloonDirection.BottomCenter}>{props.gameTitle}</Balloon>
          <div className="tw-video-preview-card__image-wrapper">
            <CardImage imageSrc={props.gameImageSrc} imageAlt={props.gameTitle} imageType={CardImageType.BoxArt}/>
          </div>
        </BalloonWrapper>
      </figure>
    </Link>
  );

  let progressbar = (
    <Layout position={Position.Absolute} attachBottom fullWidth>
      <ProgressBar size={ProgressBarSize.Small} value={props.progress} type={ProgressBarType.VODPreview}/>
    </Layout>
  );

  return (
    <div className={`tw-video-preview-card ${props.progress && !props.hover ? 'tw-video-preview-card--watched' : ''}`}>
      <Card name={props.title} {...getDataProps(props)}>
        <Aspect>
          <div>
            <div className="tw-video-preview-card__meta">
              <Layout position={Position.Absolute} attachTop attachLeft margin={0.5}>
                <Stat overlay noTooltip size={StatSize.Small} label="views" value={props.viewerCount} icon={SVGAsset.GlyphViews}/>
              </Layout>
              <Layout position={Position.Absolute} attachTop attachRight margin={0.5}>
                <Stat overlay noTooltip size={StatSize.Small} label="length" value={props.length} icon={SVGAsset.GlyphLength}/>
              </Layout>
            </div>
            <Aspect crop>
              <Link to={props.linkTo} title={props.title}>
                <div className="tw-video-preview-card__image-wrapper">
                  <CardImage
                    {...getWrappedImageProps(props)}
                    imageSrc={props.hover ? props.previewImageSrc : props.imageSrc}
                    animatePreview={props.hover && !!props.previewImageSrc}
                    imageType={CardImageType.Thumbnail}
                  />
                </div>
              </Link>
            </Aspect>
            {props.boxArtOverlay ? boxart : ''}
            {props.progress ? progressbar : null}
          </div>
        </Aspect>
        <CardBody>
          <Layout display={Display.Flex} flexDirection={props.boxArtOverlay ? FlexDirection.Column : FlexDirection.Row} flexWrap={FlexWrap.NoWrap}>
            {!props.boxArtOverlay ? boxart : null}
            <div>
              <h3 className={`tw-video-preview-card__title ${props.boxArtOverlay ? 'ellipses' : null}`}>
                <Link to={props.linkTo} className="tw-video-preview-card__channel ">
                  {props.title}
                </Link>
              </h3>
              <p className="tw-video-preview-card__description ellipsis">{props.info}</p>
              <p className="tw-video-preview-card__info">
                {props.date} - <Link to={props.channelLinkTo} className="tw-video-preview-card__videos">{props.channelName}</Link>
              </p>
            </div>
          </Layout>
        </CardBody>
      </Card>
    </div>
  );
};
