import { Link } from 'react-router-dom';
import type { TUserItem } from '../../../../../../../shared/types/api';

type Props = {
    user: TUserItem;
};

export default function UserItem({ user }: Props) {
    return (
        <div className="card">
            <div className="card-header">{user.name}</div>
            <div className="card-body">
                <div className="card-preview-text">{user.company.name}</div>
                <div className="card-preview-text">{user.website}</div>
                <div className="card-preview-text">{user.email}</div>
            </div>
            <div className="card-footer">
                <Link to={String(user.id)} className="btn">
                    View
                </Link>
            </div>
        </div>
    );
}
