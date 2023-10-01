import {
    addMonths,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    isToday,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import { useState } from 'react';

type Props = {
    value: Date;
    onChange: (value: Date) => void;
};

export default function DatePickerModal({ value, onChange }: Props) {
    const [visibleDate, setVisibleDate] = useState(value);

    const visibleDates = eachDayOfInterval({
        start: startOfWeek(startOfMonth(visibleDate)),
        end: endOfWeek(endOfMonth(visibleDate)),
    });

    return (
        <div className="date-picker">
            <div className="date-picker-header">
                <button
                    className="prev-month-button month-button"
                    onClick={() => {
                        setVisibleDate((prev) => addMonths(prev, -1));
                    }}
                >
                    &larr;
                </button>
                <div className="current-month">
                    {format(visibleDate, 'MMMM yyyy')}
                </div>
                <button
                    className="next-month-button month-button"
                    onClick={() => {
                        setVisibleDate((prev) => addMonths(prev, +1));
                    }}
                >
                    &rarr;
                </button>
            </div>

            <div className="date-picker-grid-header date-picker-grid">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>

            <div className="date-picker-grid-dates date-picker-grid">
                {visibleDates.map((d) => (
                    <button
                        key={d.toISOString()}
                        className={`date ${
                            !isSameMonth(d, visibleDate)
                                ? 'date-picker-other-month-date'
                                : ''
                        } ${isSameDay(d, value) ? 'selected' : ''} ${
                            isToday(d) ? 'today' : ''
                        }`}
                        onClick={() => {
                            onChange(d);
                        }}
                    >
                        {format(d, 'd')}
                    </button>
                ))}
            </div>
        </div>
    );
}
