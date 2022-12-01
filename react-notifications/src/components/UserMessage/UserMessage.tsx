import React from "react";
import { Alert } from "reactstrap";

export type MessageData = {
  color: string;
  value: string;
};

export type MessageProps = {
  message: MessageData;
  unSetMessage: () => void;
};

const UserMessage = ({ message, unSetMessage }: MessageProps) => {
  const onDismiss = () => {
    unSetMessage();
  };

  return (
    <div className="user-alert">
      <Alert color={message.color} toggle={onDismiss}>
        {message.value}
      </Alert>
    </div>
  );
};

export { UserMessage };
