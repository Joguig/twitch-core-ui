import * as React from 'react';
import './styles.sass';

interface Props {
  children?: React.ReactNode;
  dark?: boolean;
}

export const Demo = (props: Props) => {
  return (
    <section className={`demo ${props.dark ? 'theme--dark' : ''}`}>
      <div className="demo__demo-wrapper border  pd-3">
        {props.children}
      </div>
    </section>
  );
};
