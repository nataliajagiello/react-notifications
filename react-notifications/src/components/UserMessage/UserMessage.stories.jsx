import React from "react";
import UserMessage from "./UserMessage";

export default {
  title: "Notifications/UserMessage",
  component: UserMessage,
};

const Template = (args) => <UserMessage {...args} />;

export const UserMsg = Template.bind({});
UserMsg.args = {
  text: "User alert msg!",
};

export const LongUserMsg = Template.bind({});
LongUserMsg.args = {
  text: "This is a very very very very very very long user message!",
};