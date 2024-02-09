import * as classnames from 'classnames';
import * as React from 'react';
import { Layout, Props as LayoutProps } from '../layout';
import { Color, FontSize } from '../text';
import './styles.sass';

export enum Background {
  Base = 1,
  Alt,
  Alt2,
}

const BACKGROUND_CLASSES = {
  [Background.Base]: 'c-background',
  [Background.Alt]: 'c-background-alt',
  [Background.Alt2]: 'c-background-alt-2',
};

const COLOR_CLASSES = {
  [Color.Base]: 'c-text',
  [Color.Alt]: 'c-text-alt',
  [Color.Alt2]: 'c-text-alt-2',
  [Color.Link]: 'c-text-link',
  [Color.Live]: 'c-text-live',
  [Color.Error]: 'c-text-error',
};

const FONT_SIZE_CLASSES = {
  [FontSize.Size1]: 'font-size-1',
  [FontSize.Size2]: 'font-size-2',
  [FontSize.Size3]: 'font-size-3',
  [FontSize.Size4]: 'font-size-4',
  [FontSize.Size5]: 'font-size-5',
  [FontSize.Size6]: 'font-size-6',
  [FontSize.Size7]: 'font-size-7',
  [FontSize.Size8]: 'font-size-8',
};

interface Props extends LayoutProps {
  background?: Background;
  border?: boolean;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  children?: React.ReactNode;
  color?: Color;
  fontSize?: FontSize;
}

export class StyledLayout extends React.Component<Props, {}> {
  public render() {
    const classes: ClassValue = {
      'border-t': this.props.border || this.props.borderTop,
      'border-r': this.props.border || this.props.borderRight,
      'border-b': this.props.border || this.props.borderBottom,
      'border-l': this.props.border || this.props.borderLeft,
    };

    if (this.props.background) {
      classes[BACKGROUND_CLASSES[this.props.background]] = true;
    }

    if (this.props.color) {
      classes[COLOR_CLASSES[this.props.color]] = true;
    }

    if (this.props.fontSize) {
      classes[FONT_SIZE_CLASSES[this.props.fontSize]] = true;
    }

    const layoutProps = {
      ...this.props,
      className: (this.props.className ? this.props.className + ' ' : '') + classnames(classes),
    };

    if (
      !this.props.background &&
      !this.props.border &&
      !this.props.borderTop &&
      !this.props.borderRight &&
      !this.props.borderBottom &&
      !this.props.borderLeft &&
      !this.props.color &&
      !this.props.fontSize
    ) {
      throw new Error('If you are not using any presentation props please use <Layout> rather than <StyledLayout>.');
    }

    return <Layout {...layoutProps} />;
  }
}
