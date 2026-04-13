import Modal from "./Modal";
import Button from "./Button";

const ConfirmDialog = ({
  isOpen,
  onClose,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 flex flex-col gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{message}</p>

        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;