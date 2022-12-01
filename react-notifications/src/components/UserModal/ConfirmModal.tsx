import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "reactstrap";

//import MessageContext from "../contexts/MessageContext";

export type ModalData = {
  isOpen: boolean;
  title: string;
  body: JSX.Element | undefined;
  onOk: () => void;
};

export type ModalProps = {
  modal: ModalData;
  unSetModal: () => void;
};

const ConfirmModal = ({ modal, unSetModal }: ModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const { setMessage } = useContext(MessageContext);

  useEffect(() => {}, [modal, unSetModal]);

  const confirm = async () => {
    setIsLoading(true);
    try {
      await modal.onOk();
      unSetModal();
    } catch {
      // setMessage({ color: "danger", value: "Confirmation failed" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={modal.isOpen} toggle={unSetModal}>
      <ModalHeader toggle={unSetModal}>{modal.title}</ModalHeader>
      <ModalBody>
        {isLoading ? (
          <div className="justify-content-center d-flex">
            <Spinner />
          </div>
        ) : (
          modal.body
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" disabled={isLoading} onClick={confirm}>
          Ok
        </Button>{" "}
        <Button color="secondary" disabled={isLoading} onClick={unSetModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export { ConfirmModal };
