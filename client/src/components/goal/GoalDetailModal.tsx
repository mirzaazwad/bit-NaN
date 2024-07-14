import { Modal, Button } from 'rsuite';
import { ModalControlUtils } from '../../utils/helpers/modalHelper';
import { useAppSelector } from '../../stores/redux-store';
import { goalCardBadgeTheme, goalCardHeaderTheme } from '../../config/theme/reusable.theme';
import GoalStatusDropDown from './GoalStatusDropDown';

const GoalDetailModal = () => {

    const { type, data } = useAppSelector(state => state.modal);

    if (!data) return null;

    const formatDate = (date: Date) => new Date(date).toDateString();

    const removeModal = () => {
        ModalControlUtils.removeModal();
    }

    const onChangeStatus = (status: string) => {

    }
    return (
        <Modal
            onClose={removeModal}
            backdrop='static'
            open
            keyboard
            className='rounded-lg bg-gray-100'
        >
            <div className={`w-full p-4 rounded-t-lg ${goalCardHeaderTheme(data.status)}`}>
                <Modal.Header>
                    <Modal.Title className=" pt-2 text-xl font-bold text-white">{data.title}</Modal.Title>
                </Modal.Header>
            </div>
            <Modal.Body>
                <div className="p-6 space-y-6">
                    <div>
                        <h5 className="text-lg font-semibold text-gray-800">Description</h5>
                        <p className="text-gray-600">{data.description}</p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between">
                        <div className="text-gray-600">
                            <h5 className="text-lg font-semibold">Start Time</h5>
                            <p>{formatDate(data.startTime)}</p>
                        </div>
                        <div className="text-gray-600">
                            <h5 className="text-lg font-semibold">End Time</h5>
                            <p>{formatDate(data.endTime)}</p>
                        </div>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="text-gray-600">
                        <h5 className="text-lg font-semibold">Status</h5>
                        <p className={`${goalCardBadgeTheme(data.status)}`}>
                            {data.status}
                        </p>
                        <span className='pl-2'>
                            <GoalStatusDropDown currentStatus={data.status} onChangeStatus={onChangeStatus}/>
                        </span>
                        
                    </div>
                    <hr className="border-gray-300" />
                    <div>
                        <h5 className="text-lg font-semibold text-gray-800">Notes</h5>
                        <p className="text-gray-600">{data.notes}</p>
                    </div>
                    
                </div>
            </Modal.Body>

            <Modal.Footer className='p-2'>
            <Button 
                onClick={removeModal} 
                appearance="primary" 
                className={`${goalCardHeaderTheme(data.status)}`}
            >
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GoalDetailModal;
