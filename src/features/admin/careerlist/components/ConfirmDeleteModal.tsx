import React from "react";
import { Toaster } from "react-hot-toast";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  isDeleting?: boolean; 
  error?: string | null; 
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
  isDeleting = false,
  error,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <Toaster />

      <div className="fixed inset-0 flex items-center justify-center 
        bg-white-500 bg-opacity-100 backdrop-blur-md z-50"
      >
        <div
          className="bg-white border border-gray-200 shadow-2xl rounded-xl 
               p-6 w-96 transform transition-all duration-300 scale-100
               animate-[popUp_0.3s_ease-out]"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Confirm Delete
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Do you really want to delete this job?
          </p>

          <div className="mt-4 flex justify-end gap-3">
            <button
              onClick={onCancel}
              disabled={isDeleting}
              className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isDeleting}
              className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
            >
              {isDeleting ? "Deleting..." : "OK"}
            </button>
          </div>

          {error && (
            <p className="mt-3 text-sm text-red-500 text-center">{error}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ConfirmDeleteModal;
