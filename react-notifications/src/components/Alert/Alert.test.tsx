import React from "react";
import { render } from "@testing-library/react";

import Alert from "./Alert";

describe("Alert", () => {
  test("renders the Alert component", () => {
    render(<Alert text="User Alert Msg" />);
  });
});