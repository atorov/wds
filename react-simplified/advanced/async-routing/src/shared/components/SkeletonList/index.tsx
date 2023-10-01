import { Fragment, type ReactNode } from 'react';

type Props = {
    itemsNum: number;
    children: ReactNode;
};
function SkeletonList({ itemsNum, children }: Props) {
    return Array(itemsNum)
        .fill(null)
        .map((_, idx) => <Fragment key={idx}>{children}</Fragment>);
}

export default SkeletonList;
