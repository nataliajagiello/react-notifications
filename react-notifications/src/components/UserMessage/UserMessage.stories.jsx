import React from "react";
import { UserMessage } from "./UserMessage";
import { MessageContext } from "../MessageContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Notifications/UserMessage",
  component: UserMessage,
};

const Template = (args) =>
  <UserMessage {...args} />;

export const UserMsg = Template.bind({});
UserMsg.args = {
  message: {
    color: 'danger',
    value: "User alert msg!",
  }
};

export const LongUserMsg = Template.bind({});
LongUserMsg.args = {
  message: {
    color: 'danger',
    value: `Medium macchiato, so, to go decaffeinated, grinder viennese mug shop ristretto. Skinny, variety, irish, spoon kopi-luwak
       extra  plunger pot eu and beans. Eu, aftertaste cup, viennese coffee java blue mountain percolator ristretto. Cream, ut, extra
       macchiato aromatic medium crema and carajillo. Cream at seasonal, bar  variety, single shot white skinny brewed single 
       shot caramelization.`,
  }
};

export const UserMsgSuccess = Template.bind({});
UserMsgSuccess.args = {
  message: {
    color: 'success',
    value: "Nice job!",
  }
};