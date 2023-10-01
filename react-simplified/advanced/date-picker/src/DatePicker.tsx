import { format } from 'date-fns';
import { useState } from 'react';
import DatePickerModal from './DatePickerModal';

type Props = {
    defaultValue?: Date;
    value?: Date;
    onChange?: (value: Date) => void;
};

export default function DatePicker({
    defaultValue = new Date(),
    value = defaultValue,
    onChange = () => {},
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="date-picker-container">
            <button
                className="date-picker-button"
                onClick={() => {
                    setIsOpen((prev) => !prev);
                }}
            >
                {format(value, 'dd MMMM yyyy')}
            </button>
            {isOpen ? (
                <DatePickerModal value={value} onChange={onChange} />
            ) : null}
        </div>
    );
}
