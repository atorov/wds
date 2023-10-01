export type TodoItem = {
    id: string;
    name: string;
    checked: boolean;
};

export type Data = {
    filterTerm: string;
    hideCompleted: boolean;
    items: TodoItem[];
    selectedItem: TodoItem['id'];
};
