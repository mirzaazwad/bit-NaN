import { Dropdown, IconButton, Tooltip, Whisper } from 'rsuite';
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';
import { GoalStatus } from '../../utils/enums/GoalEnum';
import { goalCardBadgeTheme } from '../../config/theme/reusable.theme';

interface Props {
    currentStatus: string;
    onChangeStatus: (status: string) => void;
}

const statuses = [GoalStatus.ToDo, GoalStatus.InProgress, GoalStatus.Done];

const tooltip = (
    <Tooltip>
      Click to change status
    </Tooltip>
);

const GoalStatusDropDown = ({ currentStatus, onChangeStatus }: Props) => {
    return (
        <Dropdown
            renderToggle={(props, ref) => (
                <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip}>
                    <IconButton {...props} ref={ref} appearance='link' icon={<ArrowDownLineIcon />} />
                </Whisper>
            )}
            title={currentStatus}
        >
            {statuses.filter(status => status !== currentStatus).map(status => (
                <Dropdown.Item
                    key={status}
                    onSelect={() => onChangeStatus(status)}
                >
                    <div className={`${goalCardBadgeTheme(status)} px-2 py-1 rounded`}>{status}</div>
                </Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default GoalStatusDropDown;
