import { useContext } from "react";
import { MessageContext } from "../MessageContext";

const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage must be used within a MessageProvider");
  }

  return context;
};

export { useMessage };
