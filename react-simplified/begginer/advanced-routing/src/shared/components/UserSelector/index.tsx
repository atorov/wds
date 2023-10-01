import { useEffect, useRef } from 'react';
import type { TUserItem } from '../../types/api';

type Props = {
    users: TUserItem[];
    defaultValue?: string;
    isOptionAnyEnabled?: boolean;
};

function UserSelector({
    users,
    defaultValue = '',
    isOptionAnyEnabled = true,
}: Props) {
    const userIdRef = useRef<HTMLSelectElement>(null);
    useEffect(() => {
        if (userIdRef.current) {
            userIdRef.current.value = defaultValue ?? '';
        }
    }, [defaultValue]);

    return (
        <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select
                ref={userIdRef}
                id="userId"
                name="userId"
                defaultValue={defaultValue}
            >
                {isOptionAnyEnabled ? <option value="">Any</option> : null}
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default UserSelector;
