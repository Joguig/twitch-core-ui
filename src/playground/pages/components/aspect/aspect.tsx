import * as React from 'react';
import { Aspect, AspectRatio } from '../../../../components/aspect';
import { Tower } from '../../../../components/tower';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const AspectPage = () => {
  return (
    <div className="avatar-page full-width">
      <PageHeader
        title="Aspect"
        description="Dictates the height of the child element based on common aspectRatios. "
        updateDate="June 13, 2017"
      />
      <DocumentationProps>
        <DocumentationProp
          property="ratio?"
          type="AspectRatio"
          default="Aspect16x9"
          description="Available values are Aspect21x9, Aspect16x9, Aspect4x3, Aspect1x1, Aspect3x4, BoxArt."
        />
        <DocumentationProp
          property="align?"
          type="Align"
          default="Top"
          description="Aligns the child element relative to the aspect element. Available values are Top, Center, and Bottom."
        />
        <DocumentationProp
          property="children?"
          type="React.ReactNode"
          default="none"
          description="Wraps children in the aspect container."
        />
        <DocumentationProp
          property="crop?"
          type="boolean"
          default="false"
          description="Sets the aspect container to hide content that overflows its bounds."
        />
      </DocumentationProps>
      <DocumentationMarkup>
{`<Aspect ratio={AspectRatio.Ratio16x9} align={Align.Top}>
  <img src="https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg" />
</Aspect>`}
      </DocumentationMarkup>
      <DocumentationComponent>
        <Tower breakPointXS={6}>
          <div className="aspect-example">
            <Aspect crop ratio={AspectRatio.Aspect21x9}>
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg" />
              <div className="aspect-example__inner">
                <p className="aspect-example__label">21x9</p>
              </div>
            </Aspect>
          </div>
          <div className="aspect-example">
            <Aspect crop>
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg" />
              <div className="aspect-example__inner">
                <p className="aspect-example__label">16x9</p>
              </div>
            </Aspect>
          </div>
          <div className="aspect-example">
            <Aspect crop ratio={AspectRatio.Aspect4x3}>
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg" />
              <div className="aspect-example__inner">
                <p className="aspect-example__label">4x3</p>
              </div>
            </Aspect>
          </div>
          <div className="aspect-example">
            <Aspect crop ratio={AspectRatio.Aspect1x1}>
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg" />
              <div className="aspect-example__inner">
                <p className="aspect-example__label">1x1</p>
              </div>
            </Aspect>
          </div>
          <div className="aspect-example">
            <Aspect crop ratio={AspectRatio.Aspect3x4}>
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg" />
              <div className="aspect-example__inner">
                <p className="aspect-example__label">3x4</p>
              </div>
            </Aspect>
          </div>
          <div className="aspect-example">
            <Aspect crop ratio={AspectRatio.BoxArt}>
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg" />
              <div className="aspect-example__inner">
                <p className="aspect-example__label">BoxArt<br/>272x380</p>
              </div>
            </Aspect>
          </div>
        </Tower>
      </DocumentationComponent>
    </div>
  );
};
