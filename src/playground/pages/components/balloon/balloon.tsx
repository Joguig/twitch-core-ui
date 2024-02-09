import * as React from 'react';
import { Balloon, BalloonDirection, BalloonSize } from '../../../../components/balloon/balloon';
import { BalloonWrapper } from '../../../../components/balloon/balloon-wrapper';
import { Button } from '../../../../components/button';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const BalloonPage = () => {
    return (
      <div className="balloon-page full-width">
        <PageHeader
          title="Balloon"
          description="BalloonWrapper is an overlay container where Balloon is anchored to summon it. Balloons are meant to house secondary content which can be discoverable upon an action such as hover."
          updateDate="June 8, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="children?"
            type="React.ReactNode"
            default="none"
            description="Indicates the elements displayed inside the button."
          />
          <DocumentationProp
            property="direction?"
            type="BallonDirection"
            default="Bottom"
            description="Indicates where the ballon is displayed in relation to the wrapper. The options are: Top, Bottom, Left, Right, TopLeft, TopRight, BottomRight, BottomLeft, TopCenter, BottomCenter, LeftCenter, RightCenter."
          />
          <DocumentationProp
            property="noPadding?"
            type="boolean"
            default="false"
            description="Indicates that the ballon should be displayed with no padding."
          />
          <DocumentationProp
            property="noTail?"
            type="boolean"
            default="false"
            description="Indicates that the balloon should be displayed with no tail."
          />
          <DocumentationProp
            property="offsetX?"
            type="string"
            default="none"
            description="A margin value to offset the Balloon on its x-axis."
          />
          <DocumentationProp
            property="offsetY?"
            type="string"
            default="none"
            description="A margin value to offset the Balloon on its y-axis."
          />
          <DocumentationProp
            property="show?"
            type="boolean"
            default="false"
            description="Indicates whether the balloon should be displayed or not."
          />
          <DocumentationProp
            property="size?"
            type="BalloonSize"
            default="none"
            description="Indicates a custom size for a balloon. The options are: ExtraSmall, Small, Medium, Large, ExtraLarge."
          />
          <DocumentationProp
            property="toggle?"
            type="boolean"
            default="false"
            description="Indicates whether this balloon should be display on hover (default) or toggled only by using the show prop."
          />
          <DocumentationProp
            property="tooltip?"
            type="boolean"
            default="false"
            description="Indicates whether this balloon should be displayed as a tooltip or not."
          />
        </DocumentationProps>
        <DocumentationMarkup>
{`<BalloonWrapper>
  <Button>Bottom</Button>
  <Balloon direction={BalloonDirection.Bottom}>Bottom</Balloon>
</BalloonWrapper>`}
        </DocumentationMarkup>
        <DocumentationComponent>
          <div className="mg-b-4">
            <h4>Balloon Size</h4>
            <BalloonWrapper>
              <Button>Extra Small</Button>
              <Balloon size={BalloonSize.ExtraSmall}>Extra Small</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Small</Button>
              <Balloon size={BalloonSize.Small}>Small</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Medium</Button>
              <Balloon size={BalloonSize.Medium}>Medium</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Large</Button>
              <Balloon size={BalloonSize.Large}>Large</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Extra Large</Button>
              <Balloon size={BalloonSize.ExtraLarge}>Extra Large</Balloon>
            </BalloonWrapper>
          </div>
          <div className="mg-b-4">
            <h4>Balloon Direction</h4>
            <BalloonWrapper>
              <Button>Top</Button>
              <Balloon direction={BalloonDirection.Top}>Top</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Bottom</Button>
              <Balloon direction={BalloonDirection.Bottom}>Bottom</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Left</Button>
              <Balloon direction={BalloonDirection.Left}>Left</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Right</Button>
              <Balloon direction={BalloonDirection.Right}>Right</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Top/Right</Button>
              <Balloon direction={BalloonDirection.TopRight}>Top/Right</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Top/Left</Button>
              <Balloon direction={BalloonDirection.TopLeft}>Top/Left</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Bottom/Right</Button>
              <Balloon direction={BalloonDirection.BottomRight}>Bottom/Right</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Bottom/Left</Button>
              <Balloon direction={BalloonDirection.BottomLeft}>Bottom/Left</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Top/Center</Button>
              <Balloon direction={BalloonDirection.TopCenter}>Top/Center</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Bottom/Center</Button>
              <Balloon direction={BalloonDirection.BottomCenter}>Bottom/Center</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Right/Center</Button>
              <Balloon direction={BalloonDirection.RightCenter}>Right/Center</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Left/Center</Button>
              <Balloon direction={BalloonDirection.LeftCenter}>Left/Center</Balloon>
            </BalloonWrapper>
          </div>
          <div className="mg-b-4">
            <h4>Balloon Props</h4>
            <BalloonWrapper>
              <Button>No Padding</Button>
              <Balloon noPadding>No Padding</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>No Tail</Button>
              <Balloon noTail>No Tail</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Force Show</Button>
              <Balloon show>Force Show</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Tooltip</Button>
              <Balloon tooltip>Tooltip</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Offset X</Button>
              <Balloon offsetX="40px">Offset X 40px</Balloon>
            </BalloonWrapper>

            <BalloonWrapper>
              <Button>Offset Y</Button>
              <Balloon offsetY="-100px">Offset Y -100px</Balloon>
            </BalloonWrapper>
          </div>
        </DocumentationComponent>
      </div>
    );
};
