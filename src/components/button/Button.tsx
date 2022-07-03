import React from 'react';

import cn from 'classnames';

import styles from '@/styles/components/button.module.scss';

interface IProps {
  children: React.ReactNode;
  secondary?: boolean;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  onClick?: () => void;
}

function Spacer() {
  return <div className="w-1.5 md:w-3" />;
}

export default function Button(props: IProps) {
  return (
    <button
      className={cn(styles.button, {
        [styles.secondaryBackground as any]: props.secondary,
      })}
      onClick={props.onClick}
    >
      {props.trailingIcon}
      {props.trailingIcon ? <Spacer /> : null}
      {props.children}
      {props.leadingIcon ? <Spacer /> : null}
      {props.leadingIcon}
    </button>
  );
}
