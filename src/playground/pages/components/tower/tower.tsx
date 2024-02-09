import * as React from 'react';
import { Tower, TowerChildWidth, TowerGutter } from '../../../../components/tower';
import { Demo } from '../../../components/demo';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const TowerPage = () => {
    return (
      <div className="tower-page full-width">
        <PageHeader
          title="Tower"
          description="Tower is our mobile-first grid system which is responsive out of the box and is based on a 12-column grid layout. Tower creates visual consistency between components and views, while allowing flexibility across a wide variety of uses across any type of device."
          updateDate="June 14, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="center?"
            type="boolean"
            default="false"
            description="Aligns the children items center."
          />
          <DocumentationProp
            property="children?"
            type="React.ReactNode"
            default="none"
            description="Allows for passing in children elements."
          />
          <DocumentationProp
            property="label?"
            type="string"
            default="none"
            description="Indicates the text to be displayed in the pill."
          />
          <DocumentationProp
            property="childWidth?"
            type="TowerChildWidth"
            default="auto"
            description="Sets the width on children. The options are: ExtraSmall, Small, Medium, Large."
          />
          <DocumentationProp
            property="gutterSize?"
            type="TowerGutter"
            default="Default"
            description="Sets the padding size on children. The options are: Default, ExtraSmall, Small, Large, None."
          />
          <DocumentationProp
            property="noGrow?"
            type="boolean"
            default="false"
            description="Doesn’t allow Tower to grow in width."
          />
          <DocumentationProp
            property="noWrap?"
            type="boolean"
            default="false"
            description="Sets the children to not wrap to a new line."
          />
          <DocumentationProp
            property="placeholderItems?"
            type="number"
            default="none"
            description="Adds a set of placeholder items to the end of the tower listing for maintaining layout."
          />
          <DocumentationProp
            property="breakPoint(XS, SM, MD, LR, XL)?"
            type="number"
            default="none"
            description="Our grid system is mobile-first and is agnostic to device type (i.e. mobile vs desktop). We use breakpoints to determine grid layout, which gives you flexibility when constrained by viewport widths. Widths are: XS >= 0px, SM >= 768px, MD >= 1024px, LR >= 1200px, XL >= 1440px."
          />
      </DocumentationProps>
      <DocumentationMarkup>
{`
<Tower>
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
</Tower>
`}
      </DocumentationMarkup>
        <section>
          <h4>Default Tower</h4>
          <Demo>
            <Tower>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section>
          <h4>No Wrap</h4>
          <Demo>
            <Tower noWrap>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section>
          <h4>Gutter Extra Small</h4>
          <Demo>
            <Tower gutterSize={TowerGutter.ExtraSmall}>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section>
          <h4>Gutter Small</h4>
          <Demo>
            <Tower gutterSize={TowerGutter.Small}>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section>
          <h4>Gutter Large</h4>
          <Demo>
            <Tower gutterSize={TowerGutter.Large}>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section>
          <h4>Gutter None</h4>
          <Demo>
            <Tower gutterSize={TowerGutter.None}>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section className="tower-page__width-section">
          <h4>Child Width Extra Small</h4>
          <Demo>
            <Tower childWidth={TowerChildWidth.ExtraSmall}>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section className="tower-page__width-section">
          <h4>Child Width Small</h4>
          <Demo>
            <Tower childWidth={TowerChildWidth.Small}>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section className="tower-page__width-section">
          <h4>Child Width Medium</h4>
          <Demo>
            <Tower childWidth={TowerChildWidth.Medium}>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>

        <section className="tower-page__width-section">
          <h4>Child Width Large</h4>
          <Demo>
            <Tower childWidth={TowerChildWidth.Large}>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
              <div className="tower-page__item-container"><div className="tower-page__item" /></div>
            </Tower>
          </Demo>
        </section>
      </div>
    );
};
