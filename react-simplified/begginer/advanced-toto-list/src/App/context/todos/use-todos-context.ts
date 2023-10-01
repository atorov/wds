import { useCallback, useContext } from 'react';
import Context from './Context';
import type { Data, TodoItem } from './types';

export default function useTodosContext() {
    const { data, dispatch } = useContext(Context);

    const setFilterTerm = useCallback(
        (term: Data['filterTerm']) => {
            dispatch({
                type: 'SET_FILTER_TERM',
                payload: term,
            });
        },
        [dispatch]
    );

    const toggleCompleted = useCallback(() => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
        });
    }, [dispatch]);

    const addNew = useCallback(
        (data: TodoItem) => {
            dispatch({
                type: 'ADD_NEW',
                payload: data,
            });
        },
        [dispatch]
    );

    const remove = useCallback(
        (id: TodoItem['id']) => {
            dispatch({
                type: 'REMOVE',
                payload: id,
            });
        },
        [dispatch]
    );

    const toggle = useCallback(
        (id: TodoItem['id']) => {
            dispatch({
                type: 'TOGGLE',
                payload: id,
            });
        },
        [dispatch]
    );

    const setSelectedItem = useCallback(
        (id: TodoItem['id']) => {
            dispatch({
                type: 'SET_SELECTED_ITEM',
                payload: id,
            });
        },
        [dispatch]
    );

    const updateSelectedItem = useCallback(
        (item: Partial<TodoItem> & { id: TodoItem['id'] }) => {
            dispatch({
                type: 'UPDATE_SELECTED_ITEM',
                payload: item,
            });
        },
        [dispatch]
    );

    return {
        data,
        dispatch,
        actions: {
            setFilterTerm,
            toggleCompleted,
            addNew,
            remove,
            toggle,
            setSelectedItem,
            updateSelectedItem,
        },
    };
}
