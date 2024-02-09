import * as React from 'react';
import { Button, ButtonSize, ButtonType } from '../../../../components/button';
import { InjectLayout } from '../../../../components/layout';
import { SVGAsset } from '../../../../components/svg';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const ButtonPage = () => {
    return (
      <div className="button-page full-width">
        <PageHeader
          title="Button"
          description="Buttons communicate that an action will happen when clicked. Best used as primary actions inside of another component such as a Modals, Cards, and/or forms. Buttons should never be used for generic links."
          updateDate="June 14, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="ariaLabel?"
            type="string"
            default="none"
            description="Adds an aria-label attribute to the button – this should be used with buttons that only display icons."
          />
          <DocumentationProp
            property="buttonType?"
            type="ButtonType"
            default="none"
            description="Indicates the type of button that is displayed. The options are: Default, Hollow, Text, Alert, Success."
          />
          <DocumentationProp
            property="buttonSize?"
            type="ButtonSize"
            default="none"
            description="Indicates the size of the button. The options are: Default, Small, Large."
          />
          <DocumentationProp
            property="children?"
            type="React.ReactNode"
            default="none"
            description="Indicates the elements displayed inside the button."
          />
          <DocumentationProp
            property="disabled?"
            type="boolean"
            default="false"
            description="Displays a disabled version of the button and puts the button element in a disabled state."
          />
          <DocumentationProp
            property="dropdown?"
            type="boolean"
            default="false"
            description="Indicates whether a dropdown arrow is added to the button or not."
          />
          <DocumentationProp
            property="fullWidth?"
            type="boolean"
            default="false"
            description="Indicates whether the button fills the full width of its parent element or not."
          />
          <DocumentationProp
            property="linkTo?"
            type="string"
            default="none"
            description="Indicates whether the button is rendered as an <a> or <button>"
          />
          <DocumentationProp
            property="icon?"
            type="SVGAsset"
            default="none"
            description="Adds an icon to the button that inherits the color of the button text."
          />
          <DocumentationProp
            property="iconSecondary?"
            type="boolean"
            default="false"
            description="Indicates that there is a secondary style for an icon button."
          />
          <DocumentationProp
            property="iconOnly?"
            type="boolean"
            default="false"
            description="Indicates that there is only an icon in the child elements."
          />
          <DocumentationProp
            property="onClick?"
            type="React.MouseEventHandler"
            default="none"
            description="Called when the button is clicked."
          />
          <DocumentationProp
            property="purchase?"
            type="number"
            default="none"
            description="Takes a string and styles the button in the form of a purchase button."
          />
          <DocumentationProp
            property="tabIndex?"
            type="string"
            default="none"
            description="Indicates the index of this element in the set of focusable elements."
          />
        </DocumentationProps>
        <DocumentationMarkup>
{`<Button>Default Button</Button>`}
        </DocumentationMarkup>
        <DocumentationComponent>
          <InjectLayout margin={{ bottom: 2 }}>
            <h4>Button Type</h4>
          </InjectLayout>
          <Button>Default Button</Button>
          <Button buttonType={ButtonType.Hollow}>Hollow Button</Button>
          <Button buttonType={ButtonType.Alert}>Alert Button</Button>
          <Button buttonType={ButtonType.Success}>Success Button</Button>
          <Button buttonType={ButtonType.Text}>Text Button</Button>
        </DocumentationComponent>
        <DocumentationComponent>
          <InjectLayout margin={{ bottom: 2 }}>
            <h4>Button Size</h4>
          </InjectLayout>
          <Button>Default Size</Button>
          <Button buttonSize={ButtonSize.Small}>Small Size</Button>
          <Button buttonSize={ButtonSize.Large}>Large Size</Button>
        </DocumentationComponent>
        <DocumentationComponent>
          <InjectLayout margin={{ bottom: 2 }}>
            <h4>Button Props</h4>
          </InjectLayout>
          <Button disabled>Disabled Button</Button>
          <Button dropdown>Dropdown Button</Button>
          <Button purchase="$4.99">Purchase Button</Button>
          <Button icon={SVGAsset.Heart}>Icon Button</Button>
          <Button icon={SVGAsset.Heart} iconOnly ariaLabel="Icon Only Button" />
          <Button icon={SVGAsset.Heart} iconOnly dropdown />
          <Button icon={SVGAsset.Heart} iconOnly iconSecondary ariaLabel="Icon Only Secondary Button" />
          <Button fullWidth>Full Width Button</Button>
        </DocumentationComponent>
      </div>
    );
};
