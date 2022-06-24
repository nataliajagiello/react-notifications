import React from 'react';

type AlertProps = {
    text: string;
}

const Alert = (props: AlertProps) => {

  return (
        <p>{props.text}</p>
  );
}

export default Alert;
