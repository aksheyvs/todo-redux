import { createSlice } from "@reduxjs/toolkit";

type Todo = { key: string; name: string; completed: boolean };
interface TodosState {
    todos: Todo[];
    page: string;
}

const initialState: TodosState = {
    todos: [],
    page: "all",
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.key === action.payload) return { ...todo, completed: !todo.completed };
                return todo;
            });
        },
        setPageAll: (state) => {
            state.page = "all";
        },
        setPageActive: (state) => {
            state.page = "active";
        },
        setPageCompleted: (state) => {
            state.page = "completed";
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => todo.completed === false);
            state.page = "all";
        },
    },
});

export const { addTodos, updateTodo, setPageAll, setPageActive, setPageCompleted, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
