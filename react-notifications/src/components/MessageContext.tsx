import React, { useCallback, useState } from "react";
import { UserMessage, MessageData } from "../components/UserMessage";

const MessageContext = React.createContext<any>({});

const MessageProvider = (props: any) => {
  const [message, setMessage] = useState<MessageData>();
  const unSetMessage = useCallback(() => {
    setMessage({
      color: "success",
      value: "",
    });
  }, [setMessage]);

  return (
    <MessageContext.Provider value={{ unSetMessage, setMessage }} {...props}>
      {props.children}
      {message && <UserMessage message={message} unSetMessage={unSetMessage} />}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
