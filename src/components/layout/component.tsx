import * as classnames from 'classnames';
import * as React from 'react';
import { getDataProps } from '../../utils/data-props';
import './styles.sass';

export enum AlignContent {
  Start = 1,
  End,
  Center,
  Baseline,
  Stretch,
}

const ALIGN_CONTENT_CLASSES = {
  [AlignContent.Start]: 'align-content-start',
  [AlignContent.End]: 'align-content-end',
  [AlignContent.Center]: 'align-content-center',
  [AlignContent.Baseline]: 'align-content-baseline',
  [AlignContent.Stretch]: 'align-content-stretch',
};

export enum AlignItems {
  Start = 1,
  End,
  Center,
  Baseline,
  Stretch,
}

const ALIGN_ITEMS_CLASSES = {
  [AlignItems.Start]: 'align-items-start',
  [AlignItems.End]: 'align-items-end',
  [AlignItems.Center]: 'align-items-center',
  [AlignItems.Baseline]: 'align-items-baseline',
  [AlignItems.Stretch]: 'align-items-stretch',
};

export enum AlignSelf {
  Start = 1,
  End,
  Center,
  Baseline,
  Stretch,
}

const ALIGN_SELF_CLASSES = {
  [AlignSelf.Start]: 'align-self-start',
  [AlignSelf.End]: 'align-self-end',
  [AlignSelf.Center]: 'align-self-center',
  [AlignSelf.Baseline]: 'align-self-baseline',
  [AlignSelf.Stretch]: 'align-self-stretch',
};

export enum Display {
  Block = 1,
  Flex,
  Inline,
  InlineFlex,
  Hide,
  HideAccessible,
}

const DISPLAY_CLASSES = {
  [Display.Block]: 'block',
  [Display.Flex]: 'flex',
  [Display.Inline]: 'inline',
  [Display.InlineFlex]: 'inline-flex',
  [Display.Hide]: 'hide',
  [Display.HideAccessible]: 'hide-accessible',
};

export enum FlexDirection {
  Column = 1,
  ColumnReverse,
  Row,
  RowReverse,
}

const FLEX_DIRECTION_CLASSES = {
  [FlexDirection.Column]: 'flex-column',
  [FlexDirection.ColumnReverse]: 'flex-column-reverse',
  [FlexDirection.Row]: 'flex-row',
  [FlexDirection.RowReverse]: 'flex-row-reverse',
};

export enum FlexWrap {
  Wrap = 1,
  NoWrap,
}

const FLEX_WRAP_CLASSES = {
  [FlexWrap.Wrap]: 'flex-wrap',
  [FlexWrap.NoWrap]: 'flex-nowrap',
};

export enum JustifyContent {
  Start = 1,
  End,
  Center,
  Between,
  Around,
}

const JUSTIFY_CONTENT_CLASSES = {
  [JustifyContent.Start]: 'justify-content-start',
  [JustifyContent.End]: 'justify-content-end',
  [JustifyContent.Center]: 'justify-content-center',
  [JustifyContent.Between]: 'justify-content-between',
  [JustifyContent.Around]: 'justify-content-around',
};

export enum Overflow {
  Auto = 1,
  Scroll,
  Visible,
  Hidden,
}

const OVERFLOW_CLASSES = {
  [Overflow.Auto]: 'overflow-auto',
  [Overflow.Scroll]: 'overflow-scroll',
  [Overflow.Visible]: 'overflow-visible',
  [Overflow.Hidden]: 'overflow-hidden',
};

export enum Position {
  Relative = 1,
  Absolute,
  Fixed,
}

const POSITION_CLASSES = {
  [Position.Relative]: 'relative',
  [Position.Absolute]: 'absolute',
  [Position.Fixed]: 'fixed',
};

export enum Resize {
  None = 1,
  X,
  Y,
}

const RESIZE_CLASSES = {
  [Resize.None]: 'resize-none',
  [Resize.X]: 'resize-x',
  [Resize.Y]: 'resize-y',
};

export enum TextAlign {
  Left = 1,
  Center,
  Right,
}

const TEXT_ALIGN_CLASSES = {
  [TextAlign.Left]: 'align-left',
  [TextAlign.Center]: 'align-center',
  [TextAlign.Right]: 'align-right',
};

type FlexValue = 0 | 1 | 2 | 3 | 4;
type PaddingValue = 0.5 | 1 | 2 | 3 | 4 | 5;
type MarginValue = PaddingValue | 'auto';

interface PaddingValues {
  top?: PaddingValue;
  right?: PaddingValue;
  bottom?: PaddingValue;
  left?: PaddingValue;
  x?: PaddingValue;
  y?: PaddingValue;
}

interface MarginValues {
  top?: MarginValue;
  right?: MarginValue;
  bottom?: MarginValue;
  left?: MarginValue;
  x?: MarginValue;
  y?: MarginValue;
}

type Padding = PaddingValue | PaddingValues;
type Margin = MarginValue | MarginValues;

export interface Props {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  attachTop?: boolean;
  attachRight?: boolean;
  attachBottom?: boolean;
  attachLeft?: boolean;
  children?: React.ReactNode;
  className?: string;
  display?: Display;
  ellipsis?: boolean;
  flexDirection?: FlexDirection;
  flexGrow?: FlexValue;
  flexOrder?: FlexValue;
  flexShrink?: FlexValue;
  flexWrap?: FlexWrap;
  fullHeight?: boolean;
  fullWidth?: boolean;
  justifyContent?: JustifyContent;
  margin?: Margin;
  overflow?: Overflow;
  padding?: Padding;
  position?: Position;
  refDelegate?: (e: HTMLDivElement) => void;
  resize?: Resize;
  textAlign?: TextAlign;
}

export const InjectLayout = (props: Props) => {
  const classes: ClassValue = {
    [`${props.className}`]: !!props.className,
    'top-0': props.attachTop,
    'right-0': props.attachRight,
    'bottom-0': props.attachBottom,
    'left-0': props.attachLeft,
    'ellipsis': props.ellipsis,
    'full-width': props.fullWidth,
    'full-height': props.fullHeight,
    [`flex-grow-${props.flexGrow}`]: props.flexGrow !== undefined,
    [`flex-order-${props.flexOrder}`]: props.flexOrder !== undefined,
    [`flex-shrink-${props.flexShrink}`]: props.flexShrink !== undefined,
  };

  if (props.alignContent) {
    classes[ALIGN_CONTENT_CLASSES[props.alignContent]] = true;
  }

  if (props.alignItems) {
    classes[ALIGN_ITEMS_CLASSES[props.alignItems]] = true;
  }

  if (props.alignSelf) {
    classes[ALIGN_SELF_CLASSES[props.alignSelf]] = true;
  }

  if (props.display) {
    classes[DISPLAY_CLASSES[props.display]] = true;
  }

  if (props.flexDirection) {
    classes[FLEX_DIRECTION_CLASSES[props.flexDirection]] = true;
  }

  if (props.flexWrap) {
    classes[FLEX_WRAP_CLASSES[props.flexWrap]] = true;
  }

  if (props.justifyContent) {
    classes[JUSTIFY_CONTENT_CLASSES[props.justifyContent]] = true;
  }

  if (props.overflow) {
    classes[OVERFLOW_CLASSES[props.overflow]] = true;
  }

  if (props.position) {
    classes[POSITION_CLASSES[props.position]] = true;
  }

  if (props.resize) {
    classes[RESIZE_CLASSES[Resize.X]] = true;
  }

  if (props.textAlign) {
    classes[TEXT_ALIGN_CLASSES[props.textAlign]] = true;
  }

  const marginClasses = getSpacingClasses('mg', props.margin);
  const paddingClasses = getSpacingClasses('pd', props.padding);

  const child = React.Children.only(props.children);
  const newChild = React.cloneElement(child, {
    ...child.props,
    ...getDataProps(props),
    className: (child.props.className ? child.props.className + ' ' : '') + classnames(marginClasses, paddingClasses, classes),
  });

  return newChild;
};

export const Layout = (props: Props) => (
  <InjectLayout {...props}>
    <div ref={props.refDelegate}>
      {props.children}
    </div>
  </InjectLayout>
);

const VALID_VALUES = new Set([0.5, 1, 2, 3, 4, 5, 'auto']);

function getSpacingClasses(prefix: string, value?: Padding | Margin) {
  if (!value) {
    return '';
  }

  if (typeof value === 'object') {
    if (value.x && (value.left || value.right)) {
      throw new Error('Cannot use `x` and `left` or `right` at the same time.');
    } else if (value.y && (value.top || value.bottom)) {
      throw new Error('Cannot use `y` and `top` or `bottom` at the same time.');
    }

    let spacingClasses: string[] = [];

    if (value.top) {
      if (value.top === 0.5) {
        spacingClasses.push(`${prefix}-t-05`);
      } else {
        spacingClasses.push(`${prefix}-t-${value.top}`);
      }
    }

    if (value.right) {
      if (value.right === 0.5) {
        spacingClasses.push(`${prefix}-r-05`);
      } else {
        spacingClasses.push(`${prefix}-r-${value.right}`);
      }
    }

    if (value.bottom) {
      if (value.bottom === 0.5) {
        spacingClasses.push(`${prefix}-b-05`);
      } else {
        spacingClasses.push(`${prefix}-b-${value.bottom}`);
      }
    }

    if (value.left) {
      if (value.left === 0.5) {
        spacingClasses.push(`${prefix}-l-05`);
      } else {
        spacingClasses.push(`${prefix}-l-${value.left}`);
      }
    }

    if (value.x) {
      if (value.x === 0.5) {
        spacingClasses.push(`${prefix}-x-05`);
      } else {
        spacingClasses.push(`${prefix}-x-${value.x}`);
      }
    }

    if (value.y) {
      if (value.y === 0.5) {
        spacingClasses.push(`${prefix}-y-05`);
      } else {
        spacingClasses.push(`${prefix}-y-${value.y}`);
      }
    }

    return spacingClasses;

  } else {
    if (!VALID_VALUES.has(value) || (prefix === 'pd' && value === 'auto')) {
      throw new Error(`${value} is not a valid property of either margin or padding`);
    }

    if (value === 0.5) {
      return `${prefix}-05`;
    }

    return `${prefix}-${value}`;
  }
// tslint:disable-next-line:max-file-line-count
}
