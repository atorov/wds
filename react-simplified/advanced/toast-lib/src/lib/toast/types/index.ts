type HAlignment = 'left' | 'center' | 'right';

type VAlignment = 'top' | 'bottom';

export type Align = `${VAlignment}-${HAlignment}`;

export type ToastItem = {
    id: string;
    body: string;
    align?: Align;
    autoDismiss?: boolean;
    autoDismissTimeout?: number;
};
