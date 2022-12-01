import React, { useCallback, useState } from "react";
import { ConfirmModal, ModalData } from "../components/UserModal";

const ModalContext = React.createContext<any>({});

const ModalProvider = (props: any) => {
  const [modal, setModal] = useState<ModalData>();
  const unSetModal = useCallback(() => {
    setModal({
      isOpen: false,
      title: "",
      body: undefined,
      onOk: () => {},
    });
  }, [setModal]);

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modal && <ConfirmModal modal={modal} unSetModal={unSetModal} />}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
