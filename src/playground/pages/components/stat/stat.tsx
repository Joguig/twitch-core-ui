import * as React from 'react';
import { InjectLayout } from '../../../../components/layout';
import { Stat, StatSize } from '../../../../components/stat';
import { SVGAsset } from '../../../../components/svg';
import { Color, Text, TextType } from '../../../../components/text';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const StatPage = () => {
    return (
      <div className="meta-page full-width">
        <PageHeader
          title="Stat"
          description="A stat contains a glancable numerical value with an icon to explain its context. Stats show tooltips for more information by default."
          updateDate="June 14, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="icon?"
            type="SVGAsset"
            default="none"
            description="Indicates the icon to be displayed next to the value. See SVG for a list of available icons."
          />
          <DocumentationProp
            property="label"
            type="string"
            default="none"
            description="Indicates the text label that qualifies the value."
          />
          <DocumentationProp
            property="live?"
            type="boolean"
            default="none"
            description="Applies Live styles to a stat."
          />
          <DocumentationProp
            property="noTooltip?"
            type="boolean"
            default="false"
            description="Hides the default tooltip from showing."
          />
          <DocumentationProp
            property="overlay?"
            type="boolean"
            default="none"
            description="Renders the stat on a semi-transparent overlay."
          />
          <DocumentationProp
            property="size?"
            type="StatSize"
            default="StatSize.Default"
            description="Sets the font size of the component. Available values are Default, Small, and Large."
          />
          <DocumentationProp
            property="value"
            type="string"
            default="none"
            description="The value to display next to the icon."
          />
      </DocumentationProps>
      <DocumentationMarkup>
{`<Stat overlay size={StatSize.Small} label="views" value="9000" icon={SVGAsset.GlyphViews}/>`}
      </DocumentationMarkup>
      <DocumentationComponent>
        <InjectLayout margin={{ bottom: 2 }}>
          <h4>Stat</h4>
        </InjectLayout>
          <Stat overlay size={StatSize.Small} label="views" value="9000" icon={SVGAsset.GlyphViews}/>
          <br/>
          <Stat label="viewers" value="30,202" icon={SVGAsset.GlyphLive} live size={StatSize.Small}/>
          <br/>
          <Text color={Color.Alt} type={TextType.Span}>
            <Stat label="viewers" value="30,202" icon={SVGAsset.GlyphLive} size={StatSize.Large} />
          </Text>
          <br/>
          <Text color={Color.Alt2} type={TextType.Span}>
            <Stat label="viewers" value="30,202" icon={SVGAsset.GlyphLive} noTooltip/>
          </Text>
      </DocumentationComponent>
    </div>
  );
};
