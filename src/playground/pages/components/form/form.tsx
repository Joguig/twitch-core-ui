import * as React from 'react';
import { Button } from '../../../../components/button/component';
import { CheckBox } from '../../../../components/form/checkbox';
import { FormGroup } from '../../../../components/form/form-group';
import { Input, InputType } from '../../../../components/form/input';
import { Radio } from '../../../../components/form/radio';
import { Range } from '../../../../components/form/range';
import { SearchInput } from '../../../../components/form/search-input';
import { SegmentedButton } from '../../../../components/form/segmented-button/segmented-button';
import { SegmentedButtonOption } from '../../../../components/form/segmented-button/segmented-button-option';
import { Select } from '../../../../components/form/select';
import { TextArea } from '../../../../components/form/textarea';
import { Toggle } from '../../../../components/form/toggle';
import { SVGAsset } from '../../../../components/svg';
import { Demo } from '../../../components/demo';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const FormPage = () => {
    return (
      <div className="form-page full-width">
        <PageHeader
          title="Form"
          description="This component is part of the Core UI pattern library and displays form elements."
          updateDate="June 13, 2017"
        />
        <section>
          <h4>Text Input</h4>
          <Demo>
            <Input type={InputType.Text} placeholder="Text Input" />
          </Demo>
        </section>
        <section>
          <h4>Password Input</h4>
          <Demo>
            <Input type={InputType.Password} placeholder="Password Input" />
          </Demo>
        </section>
        <section>
          <h4>Search Input</h4>
          <Demo>
            <SearchInput id="search-input" placeholder="Search Input" />
          </Demo>
        </section>
        <section>
          <h4>Checkbox</h4>
          <Demo>
            <CheckBox
              id="checkbox"
              label="Checkbox"
            />
            <CheckBox
              id="disabled-checkbox"
              label="Disabled Checkbox"
              disabled
            />
          </Demo>
        </section>
        <section>
          <h4>Radio</h4>
          <Demo>
            <Radio id="radio" label="Radio" name="radio1"/>
            <Radio id="other-radio" label="Other Radio" name="radio1"/>
            <Radio disabled id="radio-disabled" label="Disabled Radio" name="radio1"/>
          </Demo>
        </section>
        <section>
          <h4>Toggle</h4>
          <Demo>
            <Toggle id="toggle" />
          </Demo>
        </section>
        <section>
          <h4>Range</h4>
          <Demo>
            <Range min={0} max={100} step={1}/>
          </Demo>
        </section>
        <section>
          <h4>Select</h4>
          <Demo>
            <Select defaultValue="a">
              <option value="a"> Text Option A</option>
              <option value="b"> Text Option B</option>
              <option value="c"> Text Option C</option>
            </Select>
          </Demo>
        </section>
        <section>
          <h4>Segmented Button Radio</h4>
          <Demo>
            <SegmentedButton>
              <SegmentedButtonOption name="segmented-button-radio" label="Option 1" />
              <SegmentedButtonOption name="segmented-button-radio" label="Option 2" />
              <SegmentedButtonOption name="segmented-button-radio" label="Option 3" />
            </SegmentedButton>
          </Demo>
        </section>
        <section>
          <h4>Segmented Button Checkbox</h4>
          <Demo>
            <SegmentedButton>
              <SegmentedButtonOption name="segmented-button-checkbox" label="Option 1" type="checkbox" />
              <SegmentedButtonOption name="segmented-button-checkbox" label="Option 2" type="checkbox" />
              <SegmentedButtonOption name="segmented-button-checkbox" label="Option 3" type="checkbox" />
            </SegmentedButton>
          </Demo>
        </section>
        <section>
          <h4>Textarea</h4>
          <Demo>
            <TextArea placeholder="Textarea" />
          </Demo>
        </section>
        <section>
          <h4>Textarea with Icons</h4>
          <Demo>
            <TextArea noResize iconCount={2} placeholder="Textarea with icons">
              <Button icon={SVGAsset.Emoticons} iconOnly iconSecondary />
              <Button icon={SVGAsset.Emoticons} iconOnly iconSecondary />
            </TextArea>
          </Demo>
        </section>
        <section>
          <h4>Form Group</h4>
          <Demo>
            <div className="mg-b-2">
              <FormGroup id="text-label" label="Text label" hint="This is a form hint.">
                <Input id="text-label" type={InputType.Text} placeholder="Text Input" />
              </FormGroup>
            </div>
            <div className="mg-b-2">
              <FormGroup id="radio-label" label="Radio label">
              <Radio id="radio-label" label="Radio label" name="radio2"/>
              </FormGroup>
            </div>
            <FormGroup id="toggle-label" label="Toggle label">
              <Toggle id="toggle-label" />
            </FormGroup>
          </Demo>
        </section>
        <section>
          <h4>Form Group Error</h4>
          <Demo>
            <FormGroup id="text-label-error" label="Text label error" error errorMessage="This is a form hint that displays there is an error.">
              <Input id="text-label-error" type={InputType.Text} placeholder="Text input error" />
            </FormGroup>
          </Demo>
        </section>
      </div>
    );
};
