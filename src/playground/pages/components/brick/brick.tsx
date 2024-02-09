import * as React from 'react';
import { Brick } from '../../../../components/brick';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const BrickPage = () => {
    return (
      <div className="brick-page full-width">
        <PageHeader
          title="Brick"
          description="Bricks are block containers that provide a convenient means of displaying an array of different elements– text, images, headers, or even buttons. Bricks are best used in conjunction with Tower to layout content (hence the name Tower and Bricks)."
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
            property="marked?"
            type="boolean"
            default="false"
            description="Indicates the component will have a marked border"
          />
        </DocumentationProps>
        <DocumentationMarkup>
{`<Brick marked>
  <div className="mg-2">
    <h4 className="strong mg-b-0">Grumpy wizards make toxic brew.</h4>
    <p>So we say goodbye to our beloved pet, Nibbler, who’s gone to a place where I, too, hope one day to go.</p>
  </div>
</Brick>`}
        </DocumentationMarkup>
        <DocumentationComponent>
          <div className="mg-b-2">
            <h4>Default Brick</h4>
            <Brick>
              <div className="mg-2">
                <h4 className="strong mg-b-0">Grumpy wizards make toxic brew.</h4>
                <p>So we say goodbye to our beloved pet, Nibbler, who’s gone to a place where I, too, hope one day to go.</p>
              </div>
            </Brick>
          </div>
          <div className="mg-b-2">
            <h4>Marked Brick</h4>
            <Brick marked>
              <div className="mg-2">
                <h4 className="strong mg-b-0">Grumpy wizards make toxic brew.</h4>
                <p>So we say goodbye to our beloved pet, Nibbler, who’s gone to a place where I, too, hope one day to go.</p>
              </div>
            </Brick>
          </div>
        </DocumentationComponent>
      </div>
    );
};
