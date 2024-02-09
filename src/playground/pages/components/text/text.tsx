import * as React from 'react';
import { Text, TextTransform, TextType } from '../../../../components/text';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const TextPage = () => {
    return (
      <div className="text-page full-width">
        <PageHeader
          title="Text"
          description="This component is part of the Core UI pattern library and displays an text element."
          updateDate="June 15, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="children?"
            type="React.ReactNode"
            default="none"
            description="Allows the component to take children."
          />
          <DocumentationProp
            property="color?"
            type="Color"
            default="none"
            description="Sets the color of the component. Availiable parameters are Base, Alt, Alt2, Link, Live, Error."
          />
          <DocumentationProp
            property="fontSize?"
            type="FontSize"
            default="none"
            description="Sets the fontsize on the component. Availiable parameters are Size1, Size2, Size3, Size4, Size5, Size6, Size7, Size8."
          />
          <DocumentationProp
            property="italic?"
            type="boolean"
            default="false"
            description="Sets the css propertyf ont-style: italic on the component."
          />
          <DocumentationProp
            property="noWrap?"
            type="boolean"
            default="false"
            description="Sets the component to not wrap."
          />
          <DocumentationProp
            property="strong?"
            type="boolean"
            default="false"
            description="Sets the css property font-weight to bold."
          />
          <DocumentationProp
            property="transform?"
            type="TextTransform"
            default="none"
            description="Sets the css property text-transform on the component. Availiable options are Capitalize and Uppercase."
          />
          <DocumentationProp
            property="type?"
            type="TextType"
            default="paragraph"
            description="Sets the type of text tag used. Availiable options are Paragraph, Span, H1, H2, H3, H4, H5, H6."
          />
          <DocumentationProp
            property="underline?"
            type="boolean"
            default="false"
            description="Sets the css property text-decoration to underline."
          />
          <DocumentationProp
            property="verticalAlign?"
            type="VerticalAlign"
            default="none"
            description="Sets css align property on the component. Availiable parameters are Top, Middle, Baseline, Bottom, TextTop, TextBottom."
          />
        </DocumentationProps>
        <DocumentationMarkup>
{`<Text type={TextType.Span}>Text</Text>`}
        </DocumentationMarkup>
        <DocumentationComponent>
          <Text type={TextType.H1}>H1</Text>
          <Text type={TextType.H2}>H2</Text>
          <Text type={TextType.H3}>H3</Text>
          <Text type={TextType.H4}>H4</Text>
          <Text type={TextType.H5}>H5</Text>
          <Text type={TextType.H6}>H6</Text>
          <Text>Paragraph</Text>
          <Text type={TextType.Span}>span</Text>
          <Text strong>strong</Text>
          <Text italic>italic</Text>
          <Text noWrap>nowrap</Text>
          <Text underline>underline</Text>
          <Text transform={TextTransform.Uppercase}>uppercase</Text>
          <Text transform={TextTransform.Capitalize}>capitalize</Text>
        </DocumentationComponent>
      </div>
    );
};
