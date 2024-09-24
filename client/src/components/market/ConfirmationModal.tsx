import { Button, Modal } from "rsuite";
import { appStore, useAppSelector } from "../../stores/redux-store";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";
import ProfileHelper from "../../utils/helpers/profileHelper";
import { loaderActions } from "../../stores/slices/loader-slice";

const ConfirmationModal = () => {
    const data = useAppSelector(state => state.modal?.data);
    if (!data) return null;
    const removeModal = () => {
        ModalControlUtils.removeModal();
    }

    const handleOk = async () =>{
        try{
            appStore.dispatch(loaderActions.turnOn());
            await ProfileHelper.saveProduct(data.id);
        }catch(error){
            console.error(error);
        }finally{
            removeModal();
            appStore.dispatch(loaderActions.turnOff());
        }
        
    }

    return (
        <Modal
            onClose={removeModal}
            backdrop
            open
            keyboard={false}
            className="bg-white rounded-lg z-10"
        >
            <Modal.Header></Modal.Header>
            <Modal.Body
                className="p-2"
            >
                <div className="font-semibold text-xl text-black">Do you want to buy {data.name} with 100 points?</div>
            </Modal.Body>
            <Modal.Footer
                className="p-2"
            >
                <Button 
                    appearance="primary"
                    className="bg-amber-500 hover:bg-amber-700 focus:bg-amber-700"
                    onClick={handleOk}
                >
                    Ok
                </Button>
                <Button 
                    appearance="primary"
                    className="bg-slate-500 hover:bg-slate-700 focus:bg-slate-700"
                    onClick={removeModal}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;