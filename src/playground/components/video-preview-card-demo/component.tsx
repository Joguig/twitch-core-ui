import * as React from 'react';
import { VideoPreviewCard } from '../../../components/composed-cards/video-preview-card';
import { WrappedImageProps } from '../../../utils/wrapped-image-props';

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

interface State {
  isHovered: boolean;
}

export class VideoPreviewCardDemo extends React.Component<Props & WrappedImageProps, State> {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
  }

  public render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <VideoPreviewCard {...this.props} hover={this.state.isHovered} />
      </div>
    );
  }

  private onMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  private onMouseLeave = () => {
    this.setState({ isHovered: false });
  }
}
