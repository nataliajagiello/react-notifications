import React from "react";
import Alert from "./Alert";

export default {
  title: "Notifications/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const UserMsg = Template.bind({});
UserMsg.args = {
  text: "User alert msg!",
};

export const LongUserMsg = Template.bind({});
LongUserMsg.args = {
  text: "This is a very very very very very very long user message!",
};