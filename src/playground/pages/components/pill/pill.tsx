import * as React from 'react';
import { InjectLayout } from '../../../../components/layout';
import { Pill } from '../../../../components/pill';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const PillPage = () => {
    return (
      <div className="pill-page full-width">
        <PageHeader
          title="Pill"
          description="Pills are text labels which hold a limited amount of information. The content housed inside of a pill adds context by being complementary and informative."
          updateDate="June 14, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="label"
            type="string"
            default="none"
            description="Indicates the text to be displayed in the pill."
          />
      </DocumentationProps>
      <DocumentationMarkup>
{`<Pill label="Pill" />`}
      </DocumentationMarkup>
      <DocumentationComponent>
        <InjectLayout margin={{ bottom: 2 }}>
          <h4>Pill inherets font-size</h4>
        </InjectLayout>
        <h1>
          <Pill label="Pill" />
        </h1>
        <h2>
          <Pill label="Pill" />
        </h2>
        <h3>
          <Pill label="Pill" />
        </h3>
        <h4>
          <Pill label="Pill" />
        </h4>
        <h5>
          <Pill label="Pill" />
        </h5>
      </DocumentationComponent>
    </div>
  );
};
