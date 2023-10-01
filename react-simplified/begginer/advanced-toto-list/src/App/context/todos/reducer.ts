import type { Data, TodoItem } from './types';

export type Action =
    | {
          type: 'SET_FILTER_TERM';
          payload: string;
      }
    | {
          type: 'TOGGLE_COMPLETED';
          payload?: undefined;
      }
    | {
          type: 'ADD_NEW';
          payload: TodoItem;
      }
    | {
          type: 'REMOVE';
          payload: TodoItem['id'];
      }
    | {
          type: 'TOGGLE';
          payload: TodoItem['id'];
      }
    | {
          type: 'SET_SELECTED_ITEM';
          payload: TodoItem['id'];
      }
    | {
          type: 'UPDATE_SELECTED_ITEM';
          payload: Partial<TodoItem> & { id: TodoItem['id'] };
      };

export default function reducer(state: Data, { type, payload }: Action) {
    switch (type) {
        case 'SET_FILTER_TERM':
            return {
                ...state,
                filterTerm: payload,
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                hideCompleted: !state.hideCompleted,
            };
        case 'ADD_NEW':
            return { ...state, items: [payload, ...state.items] };
        case 'REMOVE':
            return {
                ...state,
                items: state.items.filter((it) => it.id !== payload),
            };
        case 'TOGGLE':
            return {
                ...state,
                items: state.items.map((it) =>
                    it.id === payload ? { ...it, checked: !it.checked } : it
                ),
            };
        case 'SET_SELECTED_ITEM':
            return {
                ...state,
                selectedItem: payload,
            };
        case 'UPDATE_SELECTED_ITEM':
            return {
                ...state,
                items: state.items.map((it) =>
                    it.id === payload.id ? { ...it, ...payload } : it
                ),
                selectedItem: '',
            };
        default:
            return state;
    }
}
