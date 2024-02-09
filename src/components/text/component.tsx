import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import './styles.sass';

export enum Color {
  Base = 1,
  Alt,
  Alt2,
  Link,
  Live,
  Error,
}

const TEXT_COLOR_CLASSES = {
  [Color.Base]: 'c-text',
  [Color.Alt]: 'c-text-alt',
  [Color.Alt2]: 'c-text-alt-2',
  [Color.Link]: 'c-text-link',
  [Color.Live]: 'c-text-live',
  [Color.Error]: 'c-text-error',
};

export enum FontSize {
  Size1 = 1,
  Size2,
  Size3,
  Size4,
  Size5,
  Size6,
  Size7,
  Size8,
}

const TEXT_FONT_SIZE_CLASSES = {
  [FontSize.Size1]: 'font-size-1',
  [FontSize.Size2]: 'font-size-2',
  [FontSize.Size3]: 'font-size-3',
  [FontSize.Size4]: 'font-size-4',
  [FontSize.Size5]: 'font-size-5',
  [FontSize.Size6]: 'font-size-6',
  [FontSize.Size7]: 'font-size-7',
  [FontSize.Size8]: 'font-size-8',
};

export enum TextTransform {
  Capitalize = 1,
  Uppercase,
}

const TEXT_TRANSFORM_CLASSES = {
  [TextTransform.Capitalize]: 'capcase',
  [TextTransform.Uppercase]: 'upcase',
};

export enum TextType {
  Paragraph = 1,
  Span,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

export enum VerticalAlign {
  Top = 1,
  Middle,
  Baseline,
  Bottom,
  TextTop,
  TextBottom,
}

const VERTICAL_ALIGN_CLASSES = {
  [VerticalAlign.Top]: 'align-top',
  [VerticalAlign.Middle]: 'align-middle',
  [VerticalAlign.Baseline]: 'align-baseline',
  [VerticalAlign.Bottom]: 'align-bottom',
  [VerticalAlign.TextTop]: 'align-text-top',
  [VerticalAlign.TextBottom]: 'align-text-bottom',
};

interface Props {
  align?: VerticalAlign;
  children?: React.ReactNode;
  color?: Color;
  fontSize?: FontSize;
  italic?: boolean;
  noWrap?: boolean;
  strong?: boolean;
  transform?: TextTransform;
  type?: TextType;
  underline?: boolean;
}

export const Text = (props: Props) => {
  const classes: ClassValue = {
    italic: props.italic,
    nowrap: props.noWrap,
    strong: props.strong,
    underline: props.underline,
  };

  if (props.align) {
    classes[VERTICAL_ALIGN_CLASSES[props.align]] = true;
  }

  if (props.color) {
    classes[TEXT_COLOR_CLASSES[props.color]] = true;
  }

  if (props.fontSize) {
    classes[TEXT_FONT_SIZE_CLASSES[props.fontSize]] = true;
  }

  if (props.transform) {
    classes[TEXT_TRANSFORM_CLASSES[props.transform]] = true;
  }

  return React.createElement(props.type ? TextType[props.type] : 'p', {
    className: classnames(classes),
    ...getDataProps(props),
  }, props.children);
};
