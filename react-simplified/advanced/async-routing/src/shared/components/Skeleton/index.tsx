type Props = {
    isShort?: boolean;
};

function Skeleton({ isShort = false }: Props) {
    return (
        <div
            className="skeleton"
            style={
                isShort
                    ? { display: 'inline-block', width: '25rem' }
                    : undefined
            }
        />
    );
}

export default Skeleton;
