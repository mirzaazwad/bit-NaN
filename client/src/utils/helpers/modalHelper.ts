import { appStore } from "../../stores/redux-store";
import { modalActions } from "../../stores/slices/modal-slice";
import { ModalName } from "../enums/ModalEnums";
import { ModalStoreType } from "../templates/modalType";

export class ModalControlUtils {
    static setModal(modalPayload: ModalStoreType): void {
        appStore.dispatch(modalActions.addModal(modalPayload));
    }

    static updateModalType(modalType: ModalName, data?: any): void {
        appStore.dispatch(modalActions.updateModalType(modalType));
        if(data){
            appStore.dispatch(modalActions.updateModalData(data));
        }
    }

    static removeModal(): void {
        appStore.dispatch(modalActions.removeModal());
    }
}