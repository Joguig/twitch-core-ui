import * as React from 'react';
import { Layout } from '../../../../components/layout';
import { DocumentationVariable } from '../../../components/documentation/documentation-variable';
import { DocumentationVariables } from '../../../components/documentation/documentation-variables';
import { PageHeader } from '../../../components/page-header';

export const VariablesPage = () => {
  return (
    <div className="theming-page full-width">
      <PageHeader
        title="Variables"
        description=""
        updateDate="June 19, 2017"
      />

      <Layout margin={{ bottom: 4 }}>
        <Layout margin={{ bottom: 2 }}>
           <Layout margin={{ bottom: 3 }}>
            <div className="section text-wrapper">
              <h3 id="concept" className="section__heading">Typeset</h3>
              <div className="section__body">
                <p>Using these variables helps to ensure consistent typesetting across the product.</p>
              </div>
            </div>
          </Layout>
          <DocumentationVariables title="Font Scale">
            <DocumentationVariable name="$font-size-1" value="4rem" />
            <DocumentationVariable name="$font-size-2" value="2.8rem" />
            <DocumentationVariable name="$font-size-3" value="2.4rem" />
            <DocumentationVariable name="$font-size-4" value="1.6rem" />
            <DocumentationVariable name="$font-size-5" value="1.4rem" />
            <DocumentationVariable name="$font-size-6" value="1.2rem" />
          </DocumentationVariables>
        </Layout>

        <Layout margin={{ bottom: 2 }}>
          <DocumentationVariables title="Font Weight">
            <DocumentationVariable name="$font-weight-bold" value="600" />
            <DocumentationVariable name="$font-weight-normal" value="400" />
          </DocumentationVariables>
        </Layout>

         <Layout margin={{ bottom: 2 }}>
          <DocumentationVariables title="Font Stacks">
            <DocumentationVariable name="$font-base" value="'Helvetica Neue', Helvetica, Arial, sans-serif" />
            <DocumentationVariable name="$font-custom" value="'Korolev', 'Helvetica Neue', 'Helvetica', sans-serif" />
            <DocumentationVariable name="$font-mono" value="Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', Courier, monospace, sans-serif" />
          </DocumentationVariables>
        </Layout>
      </Layout>

      <Layout margin={{ bottom: 4 }}>
        <Layout margin={{ bottom: 3 }}>
          <div className="section text-wrapper">
            <h3 id="concept" className="section__heading">Spacing</h3>
            <div className="section__body">
              <p>Use these variables on <code>margin</code> and <code>padding</code> declarations to ensure consistent spacing across the product.</p>
            </div>
          </div>
        </Layout>
        <DocumentationVariables>
          <DocumentationVariable name="$space-05" value="0.5rem" />
          <DocumentationVariable name="$space-1" value="1rem" />
          <DocumentationVariable name="$space-2" value="2rem" />
          <DocumentationVariable name="$space-3" value="3rem" />
          <DocumentationVariable name="$space-4" value="4rem" />
          <DocumentationVariable name="$space-5" value="5rem" />
        </DocumentationVariables>
      </Layout>

      <Layout margin={{ bottom: 4 }}>
        <Layout margin={{ bottom: 3 }}>
          <div className="section text-wrapper">
            <h3 id="concept" className="section__heading">Breakpoints</h3>
            <div className="section__body">
              <p>The follow is a list of our available breakpoints and their values, but these <strong>should not</strong> be used directory. Instead, they should be used through the <code>mq</code> mixin.</p>
            </div>
            <div className="section__code-block"><pre><code>{`.selector
  +mq('sm')
    padding: $space-1

  +mq('md')
    padding: $space-2

  +mq('lg')
    padding: $space-3`}</code></pre></div>
          </div>
        </Layout>
        <DocumentationVariables>
          <DocumentationVariable name="$break-xs" value="480px" />
          <DocumentationVariable name="$break-sm" value="768px" />
          <DocumentationVariable name="$break-md" value="1024px" />
          <DocumentationVariable name="$break-lg" value="1200px" />
          <DocumentationVariable name="$break-xl" value="1440px" />
          <DocumentationVariable name="$break-xxl" value="1600px" />
        </DocumentationVariables>

      </Layout>
    </div>
  );
};
