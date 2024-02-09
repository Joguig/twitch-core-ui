import * as React from 'react';
import './styles.sass';

interface Props {
  name?: string;
  value?: string;
}

export const DocumentationVariable = (props: Props) => {
  return (
    <div className="variable-table-row">
      <div className="variable-table-row__cell"><code>{props.name}</code></div>
      <div className="variable-table-row__cell"><code>{props.value}</code></div>
    </div>
  );
};
