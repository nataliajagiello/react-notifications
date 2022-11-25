import React from "react";
import { render } from "@testing-library/react";

import UserMessage from "./UserMessage";

describe("UserMessage", () => {
  test("renders alert component for the suer", () => {
    render(<UserMessage text="User Alert Msg" />);
  });
});
