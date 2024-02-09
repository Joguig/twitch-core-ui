import * as React from 'react';
import { Layout } from '../../../../components/layout';
import { FontSize, Text, TextType } from '../../../../components/text';
import './styles.sass';

interface Props {
  title?: string;
  token?: string;
  lightValue?: string;
  darkValue?: string;
  children?: React.ReactNode;
}

export const DocumentationTokens = (props: Props) => {
  return (
    <div>
      <Layout margin={{ bottom: 1 }}>
        <Text type={TextType.H4} fontSize={FontSize.Size4} strong>{props.title}</Text>
      </Layout>
      <div className="token-table">
        <div className="token-table__header">
          <div className="token-table__header-item">Token</div>
          <div className="token-table__header-item">Light Theme</div>
          <div className="token-table__header-item">Dark Theme</div>
        </div>
        {props.children}
      </div>
    </div>
  );
};
