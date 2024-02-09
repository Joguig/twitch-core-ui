import * as React from 'react';
import { InjectLayout, Layout } from '../../../../components/layout';
import { ProgressBar, ProgressBarSize, ProgressBarType } from '../../../../components/progress-bar';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const ProgressBarPage = () => {
    return (
      <div className="progress-bar-page full-width">
        <PageHeader
          title="Pill"
          description="Pills are text labels which hold a limited amount of information. The content housed inside of a pill adds context by being complementary and informative."
          updateDate="June 14, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="countdown?"
            type="number"
            default="none"
            description="Displays a countdown timer with a duration based on the prop number in terms of seconds."
          />
          <DocumentationProp
            property="onCountdownEnd?"
            type="(e: React.AnimationEvent<HTMLDivElement>) => void"
            default="none"
            description="A callback to add functionality when the countdown ends."
          />
          <DocumentationProp
            property="size?"
            type="ProgressBarSize"
            default="none"
            description="Displays a size other than the default progress bar. The other sizing options are Small and ExtraSmall."
          />
          <DocumentationProp
            property="type?"
            type="ProgressBarType"
            default="Default"
            description="Sets the way the component displays. Availiable properties are Default, Caution, Error."
          />
          <DocumentationProp
            property="value?"
            type="number"
            default="none"
            description="Sets the visual display of the progress bar. A number between 0 and 100."
          />
      </DocumentationProps>
      <DocumentationMarkup>
{`<ProgressBar value={20} size={ProgressBarSize.ExtraSmall} />`}
      </DocumentationMarkup>
      <DocumentationComponent>
        <InjectLayout margin={{ bottom: 2 }}>
          <h4>Default</h4>
        </InjectLayout>
        <Layout margin={{ bottom: 2 }}>
          <ProgressBar value={20} />
        </Layout>
        <Layout margin={{ bottom: 2 }}>
          <ProgressBar value={50} />
        </Layout>
        <ProgressBar value={80} />
      </DocumentationComponent>
      <DocumentationComponent>
       <InjectLayout margin={{ bottom: 2 }}>
          <h4>VOD</h4>
        </InjectLayout>
        <ProgressBar value={50} type={ProgressBarType.VODPreview} size={ProgressBarSize.ExtraSmall} />
      </DocumentationComponent>
      <DocumentationComponent>
       <InjectLayout margin={{ bottom: 2 }}>
          <h4>Countdown</h4>
        </InjectLayout>
        <ProgressBar countdown={10} size={ProgressBarSize.ExtraSmall} />
      </DocumentationComponent>
      <DocumentationComponent>
        <InjectLayout margin={{ bottom: 2 }}>
          <h4>Size</h4>
        </InjectLayout>
        <Layout margin={{ bottom: 2 }}>
          <h6>Default</h6>
          <ProgressBar value={20} />
        </Layout>
        <Layout margin={{ bottom: 2 }}>
          <h6>Small</h6>
          <ProgressBar value={20} size={ProgressBarSize.Small} />
        </Layout>
        <h6>Extra Small</h6>
        <ProgressBar value={20} size={ProgressBarSize.ExtraSmall} />
      </DocumentationComponent>
      <DocumentationComponent>
        <InjectLayout margin={{ bottom: 2 }}>
          <h4>State</h4>
        </InjectLayout>
        <Layout margin={{ bottom: 2 }}>
          <h6>Caution</h6>
          <ProgressBar value={20} type={ProgressBarType.Caution} />
        </Layout>
        <h6>Error</h6>
        <ProgressBar value={20} type={ProgressBarType.Error} />
      </DocumentationComponent>
    </div>
  );
};
