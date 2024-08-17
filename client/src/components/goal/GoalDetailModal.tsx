import { useState } from 'react';
import { Modal, Button, IconButton } from 'rsuite';
import { ModalControlUtils } from '../../utils/helpers/modalHelper';
import { appStore, useAppSelector } from '../../stores/redux-store';
import { goalCardBadgeTheme, goalCardHeaderTheme } from '../../config/theme/reusable.theme';
import GoalStatusDropDown from './GoalStatusDropDown';
import { InputComponent, InputDateComponent, InputStatusPicker } from './CommonComponents';
import { GoalStatus } from '../../utils/enums/GoalEnum';
import { GoalType } from '../../utils/templates/Goals';
import { loaderActions } from '../../stores/slices/loader-slice';
import GoalsHelper from '../../utils/helpers/goalsHelper';
import TrashIcon from '@rsuite/icons/Trash';
const GoalDetailModal = () => {
    const data = useAppSelector(state => state.modal?.data);

    if (!data) return null;

    const [goalData, setGoalData] = useState<GoalType>({
        id: data.id || '',
        title: data.title,
        description: data.description,
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        status: data.status || GoalStatus.ToDo,
        notes: data.notes || '',
    });

    const removeModal = () => {
        ModalControlUtils.removeModal();
    }

    const onChangeStatus = (newStatus: GoalStatus) => {
        setGoalData(prevState => ({
            ...prevState,
            status: newStatus
        }));
    }

    const handleInputChange = (field: string, value: any) => {
        setGoalData(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    const handleSubmit = async () => {
        ModalControlUtils.removeModal();
        appStore.dispatch(loaderActions.turnOnWithMessage("Saving Task..."));
        await GoalsHelper.AddOrEditNewTask(goalData)
            .then(() => {
                GoalsHelper.fetchGoalsOfToday();
                GoalsHelper.fetchGoalsByUser();
            })
            .catch((error) => {

                console.error('Error saving task:', error);
            })
            .finally(() => {
                appStore.dispatch(loaderActions.turnOff());
            });
    }

    const deleteEvent = async () => {
        ModalControlUtils.removeModal();
        appStore.dispatch(loaderActions.turnOnWithMessage("Deleting Task..."));
        await GoalsHelper.deleteTask(goalData.id)
            .then(() => {
                GoalsHelper.fetchGoalsOfToday();
                GoalsHelper.fetchGoalsByUser();
            })
            .catch((error) => {

                console.error('Error saving task:', error);
            })
            .finally(() => {
                appStore.dispatch(loaderActions.turnOff());
            });
    } 

    return (
        <>
            <Modal
                onClose={removeModal}
                backdrop
                open
                keyboard
                className='rounded-lg bg-gray-100 z-10'
            >
                <div className={`w-full p-4 rounded-t-lg ${goalCardHeaderTheme(goalData.status)}`}>
                    <Modal.Header>
                        <Modal.Title className="pt-2 text-xl font-bold text-white">
                            <InputComponent
                                placeholder="Title"
                                value={goalData.title}
                                onChange={value => handleInputChange('title', value)}
                                className="text-white bg-inherit"
                            />
                        </Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <div className="p-6 space-y-6">
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800">Description</h5>
                            <InputComponent
                                placeholder='Description'
                                value={goalData.description}
                                onChange={value => handleInputChange('description', value)}
                                className='mt-2 bg-inherit'
                            />
                        </div>
                        <hr className="border-gray-300" />
                        <div className="flex justify-between">
                            <div className="text-gray-600">
                                <h5 className="text-lg font-semibold">Start Time</h5>
                                <InputDateComponent
                                    placeholder="Start Time"
                                    value={goalData.startTime}
                                    onChange={date => handleInputChange('startTime', date)}
                                    className="bg-inherit"
                                />
                            </div>
                            <div className="text-gray-600">
                                <h5 className="text-lg font-semibold">End Time</h5>
                                <InputDateComponent
                                    placeholder="End Time"
                                    value={goalData.endTime}
                                    onChange={date => handleInputChange('endTime', date)}
                                    className="bg-inherit"
                                />
                            </div>
                        </div>
                        <hr className="border-gray-300" />
                        <div className="text-gray-600">
                            <h5 className="text-lg font-semibold">Status</h5>
                            {!goalData.status ? (
                                <span>
                                    <InputStatusPicker
                                        placeholder='Select Status'
                                        onChange={value => handleInputChange('status', value)}
                                    />
                                </span>
                            ) : (
                                <>
                                    <p className={`${goalCardBadgeTheme(goalData.status)}`}>
                                        {goalData.status}
                                    </p>
                                    <span className='pl-2'>
                                        <GoalStatusDropDown currentStatus={goalData.status as GoalStatus} onChangeStatus={value => onChangeStatus(value)} />
                                    </span>
                                </>
                            )}
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800">Notes</h5>
                            <InputComponent
                                placeholder='Notes'
                                value={goalData.notes}
                                onChange={value => handleInputChange('notes', value)}
                                className='mt-2 bg-inherit'
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='p-2'>
                    <div className='flex flex-row w-full'>
                        <div className='flex justify-start w-1/2'>
                            <IconButton
                                onClick={deleteEvent}
                                appearance='subtle'
                                className={`${goalCardHeaderTheme(goalData.status)} hover:text-black hover:bg-gray-700`}
                                icon={<TrashIcon />}
                            >
                                <span className='text-white '>Delete</span>
                            </IconButton> 
                        </div>
                        <div className='flex justify-end w-1/2'>
                            <Button
                                onClick={handleSubmit}
                                appearance='primary'
                                className={`${goalCardHeaderTheme(goalData.status)} hover:text-white hover:bg-gray-700`}
                            >Save</Button>
                            <Button
                                onClick={removeModal}
                                appearance="primary"
                                className={`${goalCardHeaderTheme(goalData.status)} hover:text-white hover:bg-gray-700`}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default GoalDetailModal;
