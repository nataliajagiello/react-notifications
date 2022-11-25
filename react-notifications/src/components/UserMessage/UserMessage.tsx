import React from "react";
import "./UserMessage.css";
import { Alert } from "reactstrap";

export type AlertProps = {
  text: string;
};

const UserMessage = ({ text }: AlertProps) => {
  return <Alert>{text}</Alert>;
};

export default UserMessage;
