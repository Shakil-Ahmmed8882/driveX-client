// CustomConfirmModal.tsx
import  { useState } from "react";
import { Modal, Button, Flex } from "antd";
import { WarningIcon } from "../../assets/icons/icons";



// Define types for props
interface TConfirmModalProps {
  content?: string;
  onOk: () => void;
  customFooter?: React.ReactNode; // Optional footer prop if needed
}

// const ConfirmModal = ({ content, onOk, customFooter }) => {
const ConfirmModal = ({ content, onOk }:TConfirmModalProps) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    onOk();
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Delete
      </Button>
      <Modal
        visible={visible}
        title={
          <Flex gap={5} align="center">
            <WarningIcon /> <h2 className="md:text-[22px]">Are you sure?</h2>
          </Flex>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleOk}>Cancel</Button>
          </>
        }
      >
        <p className="pl-9">{content || "This won't be revert"}</p>
      </Modal>
    </>
  );
};

export default ConfirmModal;
