"use client";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

interface ModalHeaderProps {
  focus: boolean;
  disabled: boolean;
  handleClose: () => void;
}

const ModalHeader = ({ focus, disabled, handleClose }: ModalHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
      {disabled && (
        <div
          className={`px-4 py-2 bg-${focus ? "green" : "red"}-400 text-${
            focus ? "green" : "red"
          }-950 border border-${focus ? "green" : "red"}-900 rounded-lg`}
        >{`${focus ? "Focus " : "Rest "}`}</div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 text-bitBrown w-full text-center">
        Pomodoro Timer
      </h3>
      <button
        onClick={handleClose}
        type="button"
        className="bg-transparent text-bitBrown hover:bg-bitBrown hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
        data-modal-hide="static-modal"
      >
        <IonIcon icon={closeOutline} className="text-2xl"></IonIcon>
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  );
};

export default ModalHeader;
