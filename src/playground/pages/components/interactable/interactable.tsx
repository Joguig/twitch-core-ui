import * as React from 'react';
import { Interactable } from '../../../../components/interactable';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const InteractablePage = () => {
    return (
      <div className="full-width">
        <PageHeader
          title="Interactable"
          description={`An interactable is a component that wraps UI to make it "interactable". Interactables are button elements by default, unless they are passed a linkTo property, at which point they become anchors. Don't nest anchors, buttons, inputs, or other interactables eleements as children of interactables.`}
          updateDate="June 12, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="disabled?"
            type="boolean"
            default="none"
            description="Sets the element to not respond to input events."
          />
          <DocumentationProp
            property="hover?"
            type="boolean"
            default="none"
            description="For manually triggering hover behavior on keypress or other action."
          />
          <DocumentationProp
            property="linkTo?"
            type="string"
            default="none"
            description="Links interactable to a route or URL."
          />
          <DocumentationProp
            property="onClick?"
            type="React.MouseEventHandler<HTMLElement>"
            default="none"
            description="Callback for click behavior."
          />
          <DocumentationProp
            property="selected?"
            type="boolean"
            default="none"
            description="Triggers selected state for using as stateful or in multiselect."
          />
          <DocumentationProp
            property="tabIndex?"
            type="number"
            default="none"
            description="Overrides default browser tab ordering for keyboard navigation."
          />
          <DocumentationProp
            property="targetBlank?"
            type="boolean"
            default="none"
            description="Sets linked interactable to open in new tab/window."
          />
          </DocumentationProps>
        <DocumentationMarkup>
{`<Interactable linkTo="https://www.twitch.tv" />`}
        </DocumentationMarkup>
        <DocumentationComponent>
        <section>
          <h4>Interactable Text List</h4>
            <ul>
              <li><Interactable><div className="pd-1">Item 1</div></Interactable></li>
              <li><Interactable selected><div className="pd-1">Item 2</div></Interactable></li>
              <li><Interactable><div className="pd-1">Item 3</div></Interactable></li>
              <li><Interactable disabled><div className="pd-1">Item 4</div></Interactable></li>
              <li><Interactable><div className="pd-1">Item 5</div></Interactable></li>
              <li><Interactable><div className="pd-1">Item 6</div></Interactable></li>
            </ul>
        </section>
        </DocumentationComponent>
      </div>
    );
};
