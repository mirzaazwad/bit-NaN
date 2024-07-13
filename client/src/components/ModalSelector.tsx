import { shallowEqual } from "react-redux";
import { useAppSelector } from "../stores/redux-store"
import React from "react";
import { ModalName } from "../utils/enums/ModalEnums";
import GoalDetailModal from "./goal/GoalDetailModal";

const ModalSelector = () =>{
    const currentSelectedModal = useAppSelector(
        (state) => state.modal.type,
        shallowEqual
    );

    return(
        <>
            <React.Fragment>
                {currentSelectedModal == ModalName.GoalDetails && (
                    <GoalDetailModal />
                )}
            </React.Fragment>
        </>
    )
}

export default ModalSelector;