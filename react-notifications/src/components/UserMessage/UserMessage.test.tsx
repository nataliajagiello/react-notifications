import React from "react";
import { render } from "@testing-library/react";

import { MessageData, MessageProps, UserMessage } from "./UserMessage";

const data: MessageData = {
  color: "success",
  value: "Test value",
};

const props: MessageProps = {
  message: data,
  unSetMessage: () => {},
};

describe("UserMessage", () => {
  test("renders alert component for the suer", () => {
    render(<UserMessage {...props} />);
  });
});
