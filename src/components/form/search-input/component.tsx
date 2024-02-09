import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../../utils/data-props';
import { SVG, SVGAsset, SVGType } from '../../svg';
import { Input, InputType } from '../input';
import './styles.sass';

interface Props {
  autoFocus?: boolean;
  disabled?: boolean;
  id: string;
  maxLength?: number;
  name?: string;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  tabIndex?: number;
  value?: string;
}

export const SearchInput = (props: Props) => {

  return (
    <div className={classnames('tw-form__input-group tw-form__input-group--icon-left')}>
      <Input
        type={InputType.Search}
        iconLeft
        placeholder={props.placeholder}
        autoComplete="off"
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        maxLength={props.maxLength}
        tabIndex={props.tabIndex}
        {...getDataProps(props)}
      />
      <div className="tw-form__icon-group">
        <label htmlFor={props.id}>
          <div className="tw-form__icon">
            <SVG asset={SVGAsset.NavSearch} type={SVGType.Inherit} />
          </div>
        </label>
      </div>
    </div>
  );
};
