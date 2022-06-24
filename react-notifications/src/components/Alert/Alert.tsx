import React from 'react';
import './Alert.css';

type AlertProps = {
    text: string;
}

const Alert = (props: AlertProps) => {

  return (
        <p className='alert'>{props.text}</p>
  );
}

export default Alert;
