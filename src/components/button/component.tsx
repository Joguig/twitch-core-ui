import * as classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { getDataProps } from '../../utils/data-props';
import { SVG, SVGAsset, SVGType } from '../svg';
import './styles.sass';

export enum ButtonType {
  Default,
  Hollow,
  Text,
  Alert,
  Success,
}

const BUTTON_TYPE_CLASSES = {
  [ButtonType.Hollow]: 'tw-button--hollow',
  [ButtonType.Text]: 'tw-button--text',
  [ButtonType.Alert]: 'tw-button--alert',
  [ButtonType.Success]: 'tw-button--success',
};

export enum ButtonSize {
  Default,
  Small,
  Large,
}

const BUTTON_SIZE_CLASSES = {
  [ButtonSize.Small]: 'tw-button--small',
  [ButtonSize.Large]: 'tw-button--large',
};

interface Props {
  ariaLabel?: string;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  children?: React.ReactNode;
  disabled?: boolean;
  dropdown?: boolean;
  fullWidth?: boolean;
  linkTo?: string;
  icon?: SVGAsset;
  iconSecondary?: boolean;
  iconOnly?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  purchase?: string;
  tabIndex?: number;
}

export const Button = (props: Props) => {
  let dropdown: JSX.Element | undefined;
  let purchase: JSX.Element | undefined;
  let icon: JSX.Element | undefined;

  const classes: ClassValue = {
    'tw-button': true,
    'tw-button--dropmenu': props.dropdown,
    'tw-button--secondary': props.iconSecondary,
    'tw-button--icon-only': props.iconOnly,
    'tw-button--disabled': props.disabled,
    'tw-button--purchase': !!props.purchase,
    'full-width': props.fullWidth,
  };

  if (props.buttonType) {
    classes[BUTTON_TYPE_CLASSES[props.buttonType]] = true;
  }

  if (props.buttonSize) {
    classes[BUTTON_SIZE_CLASSES[props.buttonSize]] = true;
  }

  if (props.purchase) {
    purchase = <span className="tw-button__num-block">{props.purchase}</span>;
  }

  if (props.dropdown) {
    dropdown = <span className="tw-button__icon tw-button__icon--right"><SVG asset={SVGAsset.GlyphArrDown} type={SVGType.Inherit} /></span>;
  }

  if (props.icon) {
    icon = <span className={`tw-button__icon ${!props.iconOnly ? 'tw-button__icon--left' : ''}`}><SVG width={16} height={16} type={SVGType.Inherit} asset={props.icon} /></span>;
  }

  if (props.linkTo && !props.purchase) {
    return <Link to={props.linkTo} onClick={props.onClick} tabIndex={props.tabIndex} aria-label={props.ariaLabel} className={classnames(classes)} {...getDataProps(props)}>{props.children}</Link>;
  } else {
    return (
      <button onClick={props.onClick} disabled={props.disabled} tabIndex={props.tabIndex} aria-label={props.ariaLabel} className={classnames(classes)} {...getDataProps(props)}>
        {icon}
        <span>{props.children}</span>
        {dropdown}
        {purchase}
      </button>
    );
  }
};
