import * as React from 'react';
import { InjectLayout } from '../../../../components/layout';
import { SVG, SVGAsset, SVGType } from '../../../../components/svg';
import { Tower, TowerChildWidth } from '../../../../components/tower';
import { Demo } from '../../../components/demo';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const SVGPage = () => {
  const icons = Object.keys(SVGAsset).filter((icon) => !+icon).map((icon) => {
    const asset: SVGAsset = SVGAsset[icon as keyof typeof SVGAsset];
    return (
      <div className="mg-b-2 inline-flex flex-column align-items-center" key={icon}>
        <SVG type={SVGType.Brand} asset={asset} width={20} height={20} />
        <p>{icon}</p>
      </div>
    );
  });

  return (
    <div className="svg-page full-width">
      <PageHeader
          title="SVG"
          description="SVGs provide visual context and enhance usability. They are symbols that can convey a ton of information and really help people comprehend directions, signs, and interfaces."
          updateDate="June 14, 2017"
      />
      <DocumentationProps>
        <DocumentationProp
          property="asset"
          type="SVGAsset"
          default="none"
          description="Indicates the SVG desired to render."
        />
        <DocumentationProp
          property="height?"
          type="number"
          default="none"
          description="A number converted to a px value for deturmining the height of the SVG."
        />
        <DocumentationProp
          property="width?"
          type="number"
          default="none"
          description="A number converted to a px value for deturmining the width of the SVG."
        />
        <DocumentationProp
          property="type?"
          type="SVGType"
          default="Inherit"
          description="Indicates the fill you want to use for the SVG. Inherit is the default and should cover most if not all cases. Inheret sets the fill to the components parent color."
        />
      </DocumentationProps>
      <DocumentationMarkup>
{`<SVG asset={SVGAsset.Emoticon} />`}
      </DocumentationMarkup>
      <DocumentationComponent>
        <InjectLayout margin={{ bottom: 2 }}>
          <h4>SVG Listing</h4>
        </InjectLayout>
        <Tower childWidth={TowerChildWidth.Small} placeholderItems={20}>
          {icons}
        </Tower>
      </DocumentationComponent>
      <Tower>
        <section>
          <h4>SVG Theme Light</h4>
          <Demo>
            <div className="mg-b-2 mg-r-2 flex c-text-link align-items-center"><span className="inline-block mg-r-1">Inherit/Default</span><SVG type={SVGType.Inherit} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Alt</span><SVG type={SVGType.Alt} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Alt-2</span><SVG type={SVGType.Alt2} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Live</span><SVG type={SVGType.Live} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Success</span><SVG type={SVGType.Success} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Warn</span><SVG type={SVGType.Warn} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Alert</span><SVG type={SVGType.Alert} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Prime</span><SVG type={SVGType.Prime} asset={SVGAsset.Heart} /></div>
          </Demo>
        </section>
        <section>
          <h4>SVG Theme Light</h4>
          <Demo dark>
            <div className="mg-b-2 mg-r-2 flex c-text-link align-items-center"><span className="inline-block mg-r-1">Inherit/Default</span><SVG type={SVGType.Inherit} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Alt</span><SVG type={SVGType.Alt} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Alt-2</span><SVG type={SVGType.Alt2} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Live</span><SVG type={SVGType.Live} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Success</span><SVG type={SVGType.Success} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Warn</span><SVG type={SVGType.Warn} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Alert</span><SVG type={SVGType.Alert} asset={SVGAsset.Heart} /></div>
            <div className="mg-b-2 mg-r-2 flex align-items-center"><span className="inline-block mg-r-1">Prime</span><SVG type={SVGType.Prime} asset={SVGAsset.Heart} /></div>
          </Demo>
        </section>
      </Tower>
    </div>
  );
};
