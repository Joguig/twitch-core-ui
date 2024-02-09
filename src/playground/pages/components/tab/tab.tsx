import * as React from 'react';
import { Layout } from '../../../../components/layout';
import { Tab } from '../../../../components/tabs/tab';
import { TabWrapper } from '../../../../components/tabs/tab-wrapper';
import { Demo } from '../../../components/demo';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const TabPage = () => {
  return (
    <div className="tab-page full-width">
      <PageHeader
        title="Tab"
        description="A tabbed interface provides the affordance for navigating between local views or data sets. A tabs label should clearly describe the tab associated with it."
        updateDate="June 14, 2017"
      />
      <DocumentationProps>
        <DocumentationProp
          property="active?"
          type="boolean"
          default="none"
          description="Sets the display of the tab to active."
        />
        <DocumentationProp
          property="children?"
          type="React.ReactNode"
          default="none"
          description="Indicates that you can pass children into this component."
        />
        <DocumentationProp
          property="disabled?"
          type="boolean"
          default="false"
          description="Displays a disabled version of a tab and adds a disabled state if using the button element."
        />
        <DocumentationProp
          property="linkTo?"
          type="string"
          default="none"
          description="Adds an href attribute to linking to a new page."
        />
        <DocumentationProp
          property="onClick?"
          type="React.MouseEventHandler"
          default="none"
          description="Defines what the tab does onClick."
        />
        <DocumentationProp
          property="pullRight?"
          type="boolean"
          default="false"
          description="Aligns the tab to the right as well as all the following tabs."
        />
      </DocumentationProps>
      <DocumentationMarkup>
{`
<TabWrapper>
  <Tab active linkTo="#">Active Link</Tab>
  <Tab linkTo="#">Link</Tab>
  <Tab linkTo="#">Link</Tab>
  <Tab linkTo="#">Link</Tab>
  <Tab pullRight linkTo="#">Link</Tab>
  <Tab linkTo="#">Link</Tab>
  <Tab linkTo="#">Link</Tab>
</TabWrapper>
`}
      </DocumentationMarkup>
        <Layout margin={{ bottom: 4 }}>
          <h4>Default Tab</h4>
          <Demo>
            <TabWrapper>
              <Tab active linkTo="#">Active Link</Tab>
              <Tab linkTo="#">Link</Tab>
              <Tab linkTo="#">Link</Tab>
              <Tab linkTo="#">Link</Tab>
            </TabWrapper>
          </Demo>
        </Layout>
        <Layout margin={{ bottom: 4 }}>
          <h4>Tab with tabs pulled right</h4>
          <Demo>
            <TabWrapper>
              <Tab active linkTo="#">Active Link</Tab>
              <Tab linkTo="#">Link</Tab>
              <Tab linkTo="#">Link</Tab>
              <Tab linkTo="#">Link</Tab>
              <Tab pullRight linkTo="#">Link</Tab>
              <Tab linkTo="#">Link</Tab>
              <Tab linkTo="#">Link</Tab>
            </TabWrapper>
          </Demo>
        </Layout>
        <Layout margin={{ bottom: 4 }}>
          <h4>Aligned Right</h4>
          <Demo>
            <TabWrapper alignRight>
              <Tab active linkTo="#">Active Link</Tab>
              <Tab linkTo="#">Link</Tab>
              <Tab linkTo="#">Link</Tab>
              <Tab linkTo="#">Link</Tab>
            </TabWrapper>
          </Demo>
        </Layout>
    </div>
  );
};
