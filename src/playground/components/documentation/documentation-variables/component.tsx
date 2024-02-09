import * as React from 'react';
import { Layout } from '../../../../components/layout';
import { FontSize, Text, TextType } from '../../../../components/text';
import './styles.sass';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const DocumentationVariables = (props: Props) => {
  return (
    <div>
      <Layout margin={{ bottom: 1 }}>
        <Text type={TextType.H4} fontSize={FontSize.Size4} strong>{props.title}</Text>
      </Layout>
      <div className="variable-table">
        <div className="variable-table__header">
          <div className="variable-table__header-item">Variable Name</div>
          <div className="variable-table__header-item">Default Value</div>
        </div>
        {props.children}
      </div>
    </div>
  );
};
