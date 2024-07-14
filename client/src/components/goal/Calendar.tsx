import { Calendar as ReactCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useAppSelector } from '../../stores/redux-store';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ModalControlUtils } from '../../utils/helpers/modalHelper';
import { goalActions } from '../../stores/slices/goals-slice';
import { ModalName } from '../../utils/enums/ModalEnums';

const Calendar = () => {
    const localizer = momentLocalizer(moment);
    const tasks = useAppSelector((state) => state.goal?.goals);

    const onSelectEvent = (event:any) => {
        ModalControlUtils.updateModalType(ModalName.GoalDetails, event);
    }

    return (
        <>
            <ReactCalendar
                localizer={localizer}
                events={tasks}
                startAccessor="startTime"
                endAccessor="endTime"
                style={{ height: 700 }}
                views={['month']}
                toolbar
                dayLayoutAlgorithm={'no-overlap'}
                className='mt-2'
                showAllEvents
                onSelectEvent={onSelectEvent}
            />
        </>
    );
}

export default Calendar;