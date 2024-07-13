import { authenticationInputBoxLabel } from "../../../config/theme/authentication.theme";
import { forumButton } from "../../../config/theme/forum.theme";
import { Dispatch, SetStateAction, useState } from "react";
import { DateRangePicker, InputGroup, InputNumber, Modal, SelectPicker } from "rsuite";

interface IFilterModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const FilterModal = ({ show, setShow }: IFilterModalProps) => {

    const [value, setValue] = useState<number[]>([0, 100]);

    const data = [
        "Upvotes",
        "Downvotes",
        "Newest",
        "Oldest"
    ].map(
        item => ({ label: item, value: item })
    );


    return (
        <Modal open={show} onClose={() => setShow(false)} backdrop={true} keyboard={true} autoFocus={true}>
            <Modal.Header className="px-4 py-2 rounded-lg bg-bitBrown" closeButton={false}>
                <div className="text-yellow-600">Filter Modal</div>
            </Modal.Header>
            <Modal.Body className="bg-white">
                <div className="mb-6">
                    <label className={authenticationInputBoxLabel()}>
                        Sort
                    </label>
                    <SelectPicker data={data} className="w-11/12" searchable={false} placeholder={"Sort By"} />
                    
                </div>
                <div className="w-11/12 flex flex-col mb-6">
                <label className={authenticationInputBoxLabel()}>
                        Upvotes Between
                    </label>
                        <InputGroup>
                            <InputNumber
                                min={0}
                                max={100}
                                value={value[0]}
                                onChange={nextValue => {
                                    nextValue = nextValue as number;
                                    const [start, end] = value;
                                    if (nextValue && nextValue > end) {
                                        return;
                                    }
                                    setValue([nextValue, end]);
                                }}
                            />
                            <InputGroup.Addon>to</InputGroup.Addon>
                            <InputNumber
                                min={0}
                                max={100}
                                value={value[1]}
                                onChange={nextValue => {
                                    nextValue = nextValue as number;
                                    const [start, end] = value;
                                    if (nextValue && start > nextValue) {
                                        return;
                                    }
                                    setValue([start, nextValue]);
                                }}
                            />
                        </InputGroup>
                    </div>
                    <div className="w-11/12 flex flex-col mb-6">
                <label className={authenticationInputBoxLabel()}>
                        Downvotes Between
                    </label>
                        <InputGroup>
                            <InputNumber
                                min={0}
                                max={100}
                                value={value[0]}
                                onChange={nextValue => {
                                    nextValue = nextValue as number;
                                    const [start, end] = value;
                                    if (nextValue && nextValue > end) {
                                        return;
                                    }
                                    setValue([nextValue, end]);
                                }}
                            />
                            <InputGroup.Addon>to</InputGroup.Addon>
                            <InputNumber
                                min={0}
                                max={100}
                                value={value[1]}
                                onChange={nextValue => {
                                    nextValue = nextValue as number;
                                    const [start, end] = value;
                                    if (nextValue && start > nextValue) {
                                        return;
                                    }
                                    setValue([start, nextValue]);
                                }}
                            />
                        </InputGroup>
                    </div>
                    <div className="mb-6">
                    <label className={authenticationInputBoxLabel()}>
                        Date Between
                    </label>
                   <DateRangePicker/>
                    
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-bitBrown px-4 py-2 flex flex-row justify-end rounded-lg">
                <button className={forumButton} onClick={() => setShow(false)}>Cancel</button>
                <button className={forumButton}>Confirm</button>
            </Modal.Footer>
        </Modal>
    );
}

export default FilterModal;