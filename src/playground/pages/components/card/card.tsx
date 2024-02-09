// tslint:disable:max-file-line-count
import * as React from 'react';
import { BoxArtCard } from '../../../../components/composed-cards/box-art-card';
import { ChannelResultCard } from '../../../../components/composed-cards/channel-result-card';
import { CommunityResultCard } from '../../../../components/composed-cards/community-result-card';
import { GameResultCard } from '../../../../components/composed-cards/game-result-card';
import { LiveChannelCard } from '../../../../components/composed-cards/live-channel-card';
import { LiveResultCard } from '../../../../components/composed-cards/live-result-card';
import { ThumbnailCard } from '../../../../components/composed-cards/thumbnail-card';
import { VideoResultCard } from '../../../../components/composed-cards/video-result-card';
import { Tower } from '../../../../components/tower';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import { VideoPreviewCardDemo } from '../../../components/video-preview-card-demo/component';
import './styles.sass';

export const CardPage = () => {
    return (
      <div className="card-page full-width">
        <PageHeader
          title="Card"
          description="Cards are a method of displaying an entry point to a more detailed view. Cards work great in conjunction with Towers to create a repeatable list. Generally, we encourage repeated Cards to be grouped by card type to improve visual comprehension."
          updateDate="June 14, 2017"
        />

        <h2 className="mg-b-1">Card Primatives</h2>
        <p className="mg-b-4">Cards are composed from card primitives which include Card, CardImage, and CardBody</p>

        <h3 className="mg-b-1">Card</h3>
        <p className="mg-b-1 c-text-alt">Container</p>
        <DocumentationProps>
          <DocumentationProp
            property="border?"
            type="boolean"
            default="false"
            description="Indicates the component will have a border and background"
          />
          <DocumentationProp
            property="children?"
            type="React.ReactNode"
            default="none"
            description="This is where the CardImage and CardBody are passed."
          />
          <DocumentationProp
            property="linkTo?"
            type="string"
            default="none"
            description="Makes the card a link target."
          />
          <DocumentationProp
            property="row?"
            type="boolean"
            default="false"
            description="Tells the card to display as a row."
          />
        </DocumentationProps>
        <h3 className="mg-b-1 mg-t-4">CardImage</h3>
        <p className="mg-b-1 c-text-alt">Image Container</p>
        <DocumentationProps>
          <DocumentationProp
            property="children?"
            type="React.ReactNode"
            default="none"
            description="CardImage accepts children for further composition."
          />
          <DocumentationProp
            property="imageSrc"
            type="string"
            default="none"
            description="Path to image URL."
          />
          <DocumentationProp
            property="imageAlt"
            type="string"
            default="none"
            description="Human readable alternative image text."
          />
          <DocumentationProp
            property="imageAttach?"
            type="CardImageAttach"
            default="none"
            description="Tells pinned images where to orient themselves relative to their parent. Accepts BottomRight, BottomLeft, TopRight, TopLeft"
          />
          <DocumentationProp
            property="imageSize?"
            type="CardImageSize"
            default="none"
            description="You must apply an image size for images in card rows. Accepts ExtraSmall, Small, Large, ExtraLarge."
          />
          <DocumentationProp
            property="imageType?"
            type="CardImageType"
            default="CardImageType.Thumbnail"
            description="The type of image, which is used to control aspect ratio. Accepts Thumbnail, BoxArt, and Avatar."
          />
          <DocumentationProp
            property="pinned?"
            type="boolean"
            default="none"
            description="Allows composited images to position themselves over other CardImages."
          />
        </DocumentationProps>
        <h3 className="mg-b-1 mg-t-4">CardBody</h3>
        <p className="mg-b-1 c-text-alt">Body Container</p>
        <DocumentationProps>
          <DocumentationProp
            property="children?"
            type="React.ReactNode"
            default="none"
            description="Indicates the elements displayed inside the button."
          />
          <DocumentationProp
            property="overlay?"
            type="boolean"
            default="false"
            description="Renders the component with an overlay to render on top of an image."
          />
        </DocumentationProps>
        <h2 className="mg-t-4">How to Compose Cards</h2>
        <p className="mg-y-2 font-size-5">
          Composed cards wrap card primatives in an accessible interface so that we can maintain consistency of common card types across applications.
        </p>
        <section>
          <DocumentationMarkup>
{`<Card name={props.title} linkTo={props.linkTo}>
  <CardImage imageType={CardImageType.BoxArt} />
  <CardBody>
    <h3 className="tw-box-art-card__title ellipsis">{props.title}</h3>
    <p className="tw-box-art-card__meta ellipsis">{props.info}</p>
  </CardBody>
</Card>`}
          </DocumentationMarkup>
        </section>
        <h2 className="mg-t-4">Composed Cards Gallery</h2>
        <p className="mg-y-2 font-size-5">
          Here are some examples of common cards that have been precomposed in Core UI and are availablle for downstream consumption.
        </p>
        <section>
          <h4>Box Art Card</h4>
          <DocumentationComponent>
            <Tower breakPointXS={2} breakPointSM={3} breakPointMD={4} breakPointLG={6} breakPointXL={6}>
              <BoxArtCard
                imageAlt="alt text"
                imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
                title="League of Legends"
                info="106,303 viewers"
                linkTo="#"
              />
              <BoxArtCard
                imageAlt="alt text"
                imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
                title="League of Legends"
                info="106,303 viewers"
                linkTo="#"
              />
            </Tower>
          </DocumentationComponent>
          <DocumentationMarkup>
{`<BoxArtCard
  imageAlt="alt text"
  imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
  title="League of Legends"
  info="106,303 viewers"
  linkTo="#"
/>`}
          </DocumentationMarkup>
        </section>
        <section>
          <h4>Thumbnail Card</h4>
          <DocumentationComponent>
            <Tower breakPointXS={2} breakPointSM={3} breakPointMD={4} breakPointLG={4} breakPointXL={4}>
              <ThumbnailCard
                imageAlt="alt text"
                imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
                title="League of Legends"
                info="106,303 viewers"
                linkTo="#"
              />
              <ThumbnailCard
                imageAlt="alt text"
                imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
                title="League of Legends"
                info="106,303 viewers"
                linkTo="#"
              />
            </Tower>
          </DocumentationComponent>
          <DocumentationMarkup>
{`<ThumbnailCard
  imageAlt="alt text"
  imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
  title="League of Legends"
  info="106,303 viewers"
  linkTo="#"
/>`}
          </DocumentationMarkup>
        </section>
        <section>
          <h4>Live Channel Card</h4>
          <DocumentationComponent>
            <Tower breakPointXS={2} breakPointSM={3} breakPointMD={4} breakPointLG={4} breakPointXL={4}>
              <LiveChannelCard
                imageAlt="alt text"
                imageSrc="https://static-cdn.jtvnw.net/s3_vods/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/thumb/custom356e524fe8050358-320x180.jpeg"
                title="We Are Twitch - #TwitchUnity"
                linkTo="#"
                gameImageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
                gameTitle="League of Legends"
                gameLinkTo="#pinned"
                channelName="Molu"
                viewerCount="106,303"
              />
              <LiveChannelCard
                imageAlt="alt text"
                imageSrc="https://static-cdn.jtvnw.net/s3_vods/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/thumb/custom356e524fe8050358-320x180.jpeg"
                title="We Are Twitch - #TwitchUnity"
                linkTo="#"
                gameImageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
                gameTitle="League of Legends"
                gameLinkTo="#pinned"
                channelName="Molu"
                viewerCount="106,303"
              />
            </Tower>
          </DocumentationComponent>
          <DocumentationMarkup>
{`<LiveChannelCard
  imageAlt="alt text"
  imageSrc="https://static-cdn.jtvnw.net/s3_vods/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/thumb/custom356e524fe8050358-320x180.jpeg"
  title="We Are Twitch - #TwitchUnity"
  linkTo="#"
  gameImageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
  gameTitle="League of Legends"
  gameLinkTo="#pinned"
  channelName="Molu"
  viewerCount="106,303"
/>`}
          </DocumentationMarkup>
        </section>
        <section>
          <h4>Video Preview Card</h4>
          <DocumentationComponent>
            <Tower breakPointXS={2} breakPointSM={3} breakPointMD={4} breakPointLG={4} breakPointXL={4}>
              <VideoPreviewCardDemo
                date="December 31, 2016"
                imageAlt="alt text"
                imageSrc="https://static-cdn.jtvnw.net/s3_vods/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/thumb/custom356e524fe8050358-320x180.jpeg"
                previewImageSrc="https://vod-storyboards.twitch.tv/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/storyboards/141646114-strip-0.jpg"
                title="We Are Twitch - #TwitchUnity"
                linkTo="#"
                length="20:02"
                gameImageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
                gameTitle="League of Legends"
                gameLinkTo="#pinned"
                channelLinkTo="/molu"
                channelName="Molu"
                viewerCount="106,303"
                progress={0}
              />
              <VideoPreviewCardDemo
                date="December 31, 2016"
                imageAlt="alt text"
                imageSrc="https://static-cdn.jtvnw.net/s3_vods/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/thumb/custom356e524fe8050358-320x180.jpeg"
                previewImageSrc="https://vod-storyboards.twitch.tv/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/storyboards/141646114-strip-0.jpg"
                title="We Are Twitch - #TwitchUnity"
                linkTo="#"
                length="20:02"
                gameImageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
                gameTitle="League of Legends"
                gameLinkTo="#pinned"
                channelLinkTo="/molu"
                channelName="Molu"
                viewerCount="106,303"
                progress={50}
              />
              <VideoPreviewCardDemo
                date="December 31, 2016"
                imageAlt="alt text"
                imageSrc="https://static-cdn.jtvnw.net/s3_vods/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/thumb/custom356e524fe8050358-320x180.jpeg"
                previewImageSrc="https://vod-storyboards.twitch.tv/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/storyboards/141646114-strip-0.jpg"
                title="We Are Twitch - #TwitchUnity"
                info="106,303 viewers"
                linkTo="#"
                length="20:02"
                gameImageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
                gameTitle="League of Legends"
                gameLinkTo="#pinned"
                channelLinkTo="/molu"
                channelName="Molu"
                viewerCount="106,303"
                boxArtOverlay
              />
            </Tower>
          </DocumentationComponent>
          <DocumentationMarkup>
{`<VideoPreviewCardDemo
  date="December 31, 2016"
  imageAlt="alt text"
  imageSrc="https://static-cdn.jtvnw.net/s3_vods/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/thumb/custom356e524fe8050358-320x180.jpeg"
  previewImageSrc="https://vod-storyboards.twitch.tv/twitch/141646114/f55add40-36fa-45d7-81a1-0465f7d1eca4/storyboards/141646114-strip-0.jpg"
  title="We Are Twitch - #TwitchUnity"
  info="106,303 viewers"
  linkTo="#"
  length="20:02"
  gameImageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
  gameTitle="League of Legends"
  gameLinkTo="#pinned"
  channelLinkTo="/molu"
  channelName="Molu"
  viewerCount="106,303"
  boxArtOverlay
/>`}
          </DocumentationMarkup>
        </section>
        <h3>Search Result Cards</h3>
        <section>
          <h4>Channel Result Card</h4>
          <DocumentationComponent>
            <ChannelResultCard
              imageAlt="alt text"
              imageSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/molu-profile_image-e8c129457a141a94-70x70.jpeg"
              title="Molu"
              linkTo="#"
            />
            <ChannelResultCard
              imageAlt="alt text"
              imageSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/molu-profile_image-e8c129457a141a94-70x70.jpeg"
              title="Molu"
              linkTo="#"
            />
          </DocumentationComponent>
          <DocumentationMarkup>
{`<ChannelResultCard
  imageAlt="alt text"
  imageSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/molu-profile_image-e8c129457a141a94-70x70.jpeg"
  title="Molu"
  linkTo="#"
/>`}
          </DocumentationMarkup>
        </section>
        <section>
          <h4>Community Result Card</h4>
          <DocumentationComponent>
            <CommunityResultCard
              imageAlt="alt text"
              imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
              title="League of Legends"
              info="Dank Community"
              linkTo="#"
            />
            <CommunityResultCard
              imageAlt="alt text"
              imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
              title="League of Legends"
              info="Dank Community"
              linkTo="#"
            />
          </DocumentationComponent>
          <DocumentationMarkup>
{`<CommunityResultCard
  imageAlt="alt text"
  imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
  title="League of Legends"
  info="Dank Community"
  linkTo="#"
/>`}
          </DocumentationMarkup>
        </section>
        <section>
          <h4>Game Result Card</h4>
          <DocumentationComponent>
            <GameResultCard
              imageAlt="alt text"
              imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
              title="League of Legends"
              linkTo="#"
            />
            <GameResultCard
              imageAlt="alt text"
              imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
              title="League of Legends"
              linkTo="#"
            />
          </DocumentationComponent>
          <DocumentationMarkup>
{`<GameResultCard
  imageAlt="alt text"
  imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-boxart-240x320.jpg"
  title="League of Legends"
  linkTo="#"
/>`}
          </DocumentationMarkup>
        </section>
        <section>
          <h4>Live Result Card</h4>
          <DocumentationComponent>
            <Tower breakPointXS={2} breakPointSM={3} breakPointMD={4} breakPointLG={6} breakPointXL={6}>
              <LiveResultCard
                imageAlt="alt text"
                imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
                title="SMITE"
                viewerCount="367"
                linkTo="#"
                channelName="Molu"
              />
              <LiveResultCard
                imageAlt="alt text"
                imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
                title="SMITE"
                viewerCount="367"
                channelName="Molu"
                linkTo="#"
              />
            </Tower>
          </DocumentationComponent>
          <DocumentationMarkup>
{`<LiveResultCard
  imageAlt="alt text"
  imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
  title="SMITE"
  viewerCount="367"
  channelName="Molu"
  linkTo="#"
/>`}
          </DocumentationMarkup>
        </section>
        <section>
          <h4>Video Result Card</h4>
          <DocumentationComponent>
            <VideoResultCard
              imageAlt="alt text"
              imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
              videoName="Dank video"
              channelName="Molu"
              linkTo="#"
              videoDate="Sept. 4, 1987"
              videoLength="42:12"

            />
            <VideoResultCard
              imageAlt="alt text"
              imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
              videoName="Dank video"
              channelName="Molu"
              linkTo="#"
              videoDate="Sept. 4, 1987"
              videoLength="42:12"
            />
          </DocumentationComponent>
          <DocumentationMarkup>
{`<VideoResultCard
  imageAlt="alt text"
  imageSrc="https://s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-screen-480x270.jpg"
  videoName="Dank video"
  channelName="Molu"
  linkTo="#"
  videoDate="Sept. 4, 1987"
  videoLength="42:12"
/>`}
          </DocumentationMarkup>
        </section>
      </div>
    );
};
