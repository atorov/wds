type Props = {
    name: string;
};

function User({ name }: Props) {
    return <li>{name}</li>;
}

export default User;
