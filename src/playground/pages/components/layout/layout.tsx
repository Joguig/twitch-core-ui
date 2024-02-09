import * as React from 'react';
import { Link } from 'react-router-dom';
import { Display, FlexWrap, InjectLayout, Layout } from '../../../../components/layout';
import { StyledLayout } from '../../../../components/styled-layout';
import { FontSize } from '../../../../components/text';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const LayoutPage = () => {
  return (
    <div className="layout-page full-width">
      <Layout margin={{ bottom: 5 }}>
        <PageHeader
          title="StyledLayout"
          description="This component extends all the properties of layout and adds a few presentational properties."
          updateDate="June 15, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="background?"
            type="Background"
            default="none"
            description="Sets the background color of an element. Availiable parameters are Base, Alt, Alt2."
          />
          <DocumentationProp
            property="border?"
            type="boolean"
            default="false"
            description="Sets the border of an element to display."
          />
          <DocumentationProp
            property="borderTop?"
            type="boolean"
            default="false"
            description="Sets the top border of an element to display."
          />
          <DocumentationProp
            property="borderRight?"
            type="boolean"
            default="false"
            description="Sets the right border of an element to display."
          />
          <DocumentationProp
            property="borderBottom?"
            type="boolean"
            default="false"
            description="Sets the bottom border of an element to display."
          />
          <DocumentationProp
            property="borderLeft?"
            type="boolean"
            default="false"
            description="Sets the left border of an element to display."
          />
          <DocumentationProp
            property="color?"
            type="Color"
            default="none"
            description="Sets the color of an element. Availiable parameters are Base, Alt, Alt2, Link, Live, Error."
          />
          <DocumentationProp
            property="fontSize?"
            type="FontSize"
            default="none"
            description="Sets the fontsize on an element. Availiable parameters are Size1, Size2, Size3, Size4, Size5, Size6, Size7, Size8."
          />
        </DocumentationProps>
      </Layout>
      <PageHeader
        title="Layout & InjectLayout"
        description="This component is part of the Core UI pattern library used to build layout by utilizing helpers. It displays either a Layout or Inject Layout element. <Layout> adds layout to a self created div. <InjectLayout> adds layout to a child element."
        updateDate="June 15, 2017"
      />
      <DocumentationProps>
        <DocumentationProp
          property="alignContent?"
          type="AlignContent"
          default="none"
          description="Sets the flex property align-content on an element. Availiable parameters are Start, End, Center, Baseline, Stretch."
        />
        <DocumentationProp
          property="alignItems?"
          type="AlignItems"
          default="none"
          description="Sets the flex property align-items on an element. Availiable parameters are Start, End, Center, Baseline, Stretch."
        />
        <DocumentationProp
          property="alignSelf?"
          type="AlignSelf"
          default="none"
          description="Sets the flex property align-items on an element. Availiable parameters are Start, End, Center, Baseline, Stretch."
        />
        <DocumentationProp
          property="attachTop?"
          type="boolean"
          default="false"
          description="Sets the css property top to 0."
        />
        <DocumentationProp
          property="attachRight?"
          type="boolean"
          default="false"
          description="Sets the css property right to 0."
        />
        <DocumentationProp
          property="attachBottom?"
          type="boolean"
          default="false"
          description="Sets the css property bottom to 0."
        />
        <DocumentationProp
          property="attachLeft?"
          type="boolean"
          default="false"
          description="Sets the css property left to 0."
        />
        <DocumentationProp
          property="children?"
          type="React.ReactNode"
          default="none"
          description="Indicates that children can be passed into this component."
        />
        <DocumentationProp
          property="className?"
          type="string"
          default="none"
          description="Allows you to pass layout elements a class name. Should NOT be used to add helpers. This is only to be used for feature naming."
        />
        <DocumentationProp
          property="display?"
          type="Display"
          default="none"
          description="Sets css display property on an element. Availiable parameters are Block, Flex, Inline, InlineFlex, Hide, HideAccessible."
        />
        <DocumentationProp
          property="ellipsis?"
          type="boolean"
          default="false"
          description="Sets overflown text to ellipsis."
        />
        <DocumentationProp
          property="flexDirection?"
          type="FlexDirection"
          default="none"
          description="Sets flex-direction on an element. Availiable parameters are Column, ColumnReverse, Row, RowReverse."
        />
        <DocumentationProp
          property="flexGrow?"
          type="FlexValue"
          default="none"
          description="Sets flex-grow on an element. Availiable parameters are 0, 1, 2, 3, 4."
        />
        <DocumentationProp
          property="flexOrder?"
          type="FlexValue"
          default="none"
          description="Sets flex-order on an element. Availiable parameters are 0, 1, 2, 3, 4."
        />
        <DocumentationProp
          property="flexShrink?"
          type="FlexValue"
          default="none"
          description="Sets flex-shrink on an element. Availiable parameters are 0, 1, 2, 3, 4."
        />
        <DocumentationProp
          property="flexWrap?"
          type="FlexWrap"
          default="none"
          description="Sets the flex container wrap property. Availiable parameters are Wrap and NoWrap"
        />
        <DocumentationProp
          property="fullHeight?"
          type="boolean"
          default="false"
          description="Sets the hight of an element to 100%."
        />
        <DocumentationProp
          property="fullWidth?"
          type="boolean"
          default="false"
          description="Sets the width of an element to 100%."
        />
        <DocumentationProp
          property="justifyContent?"
          type="JustifyContent"
          default="none"
          description="Sets the flex property of justify-content on an element. Availiable parameters are Start, End, Center, Between, Around."
        />
        <DocumentationProp
          property="margin?"
          type="Margin"
          default="none"
          description="Sets the margin on an element. Availiable parameters are 0.5, 1, 2, 3, 4, 5, or auto which indicate rem values. You can set all 4 sides of margin by expressing margin={2} or an axis by expressing margin={{ y: 2, x: 1 }} or even an individual side by expressing margin={{ top: 2, left: 3 }}."
        />
        <DocumentationProp
          property="overflow?"
          type="Overflow"
          default="none"
          description="Sets the overflow property on an element. Availiable parameters are Auto, Scroll, Visible, Hidden."
        />
        <DocumentationProp
          property="padding?"
          type="Padding"
          default="none"
          description="Sets the padding on an element. Availiable parameters are 0.5, 1, 2, 3, 4, or 5 which indicate rem values. You can set all 4 sides of padding by expressing padding={2} or an axis by expressing padding={{ y: 2, x: 1 }} or even an individual side by expressing padding={{ top: 2, left: 3 }}."
        />
        <DocumentationProp
          property="position?"
          type="Position"
          default="none"
          description="Sets the position property on an element. Availiable parameters are Relative, Absolute, Fixed."
        />
        <DocumentationProp
          property="resize?"
          type="Resize"
          default="none"
          description="Sets the resize property on an element. Availiable parameters are None, X, Y."
        />
        <DocumentationProp
          property="textAlign?"
          type="TextAlign"
          default="none"
          description="Sets the text alignment. Availiable parameters are Left, Center, Right."
        />
      </DocumentationProps>
      <DocumentationMarkup>
{`<StyledLayout background={Background.Alt} borderTop display={Display.Flex} flexGrow={0} flexWrap={FlexWrap.NoWrap} margin={{ bottom: 2 }} />`}
<br/><br/>
{`<Layout display={Display.Flex} flexGrow={0} flexWrap={FlexWrap.NoWrap} margin={{ bottom: 2 }} />`}
<br/><br/>
{`<InjectLayout display={Display.Flex} flexGrow={0} flexWrap={FlexWrap.NoWrap} margin={{ bottom: 2 }}><Link to="/" /></InjectLayout>`}
      </DocumentationMarkup>
      <DocumentationComponent>
        <Layout display={Display.Flex} flexGrow={0} flexWrap={FlexWrap.NoWrap} margin={{ bottom: 2 }} />
        <StyledLayout display={Display.Flex} flexGrow={0} flexWrap={FlexWrap.NoWrap} margin={0.5} borderTop borderLeft fontSize={FontSize.Size6} />
        <InjectLayout display={Display.Flex} flexGrow={0} flexWrap={FlexWrap.NoWrap} padding={0.5} margin={{ bottom: 2 }}>
          <Link to="/" />
        </InjectLayout>
      </DocumentationComponent>
    </div>
  );
};
