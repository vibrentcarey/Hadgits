import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { title } from "process";

export default function ConfirmModal({ title, message, showModal, closeModal, confirm, submit }) {
  return (
    <Modal size="sm" active={showModal} >
      <ModalHeader toggler={closeModal}>
        {title}
      </ModalHeader>
      <ModalBody>
        <p className="text-base leading-relaxed text-gray-600 font-normal">
          {message}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color="purple"
          buttonType="link"
          onClick={closeModal}
          ripple="dark"
        >
          Close
        </Button>

        <Button
          color="purple"
          onClick={submit}
          ripple="light"
          rounded
        >
          {confirm}
        </Button>
      </ModalFooter>
    </Modal>
  );
}