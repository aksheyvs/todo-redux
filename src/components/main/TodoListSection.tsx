import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import TodoInput from "../TodoInput";
import { updateTodo, setPageAll, setPageActive, setPageCompleted, clearCompleted } from "../../store/todos/todosSlice";
import TodoParagraph from "../TodoParagraph";
import TodoButton from "../TodoButton";

function TodoListSection() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const page = useSelector((state: RootState) => state.todos.page);
    const active = todos.filter((todo) => todo.completed === false);
    const completed = todos.filter((todo) => todo.completed === true);
    const dispatch = useDispatch<AppDispatch>();

    const getCurrentTodos = () => {
        if (page === "active") return active;
        if (page === "completed") return completed;
        return todos;
    };

    const currentTodos = getCurrentTodos();

    const todoList = currentTodos.map((todo) => {
        const checkbox = (
            <div>
                <TodoInput
                    type="checkbox"
                    className="flex w-[2.4rem] h-[2.4rem] justify-center items-center cursor-pointer"
                    checked={todo.completed}
                    onChange={() => dispatch(updateTodo(todo.key))}
                    id={todo.key}
                />
            </div>
        );

        const todoTask =
            todo.completed === false ? (
                <TodoParagraph className="font-sans font-[500] text-[1.8rem]">{todo.name}</TodoParagraph>
            ) : (
                <TodoParagraph className="font-sans font-[500] text-[1.8rem] line-through text-[hsl(233,11%,84%)] dark:text-[hsl(233,14%,35%)]">
                    {todo.name}
                </TodoParagraph>
            );

        const todoLi = (
            <li
                key={todo.key}
                className="flex flex-row h-[6.4rem] justify-start items-center pl-[2.4rem] pr-[2.4rem] gap-[2.4rem] border-b-[0.1rem] border-b-[hsl(236,33%,92%)] last:border-b-0 dark:border-b-[hsl(237,14%,26%)] dark:last:border-b-[hsl(237,14%,26%)]"
            >
                {checkbox}
                {todoTask}
            </li>
        );

        return todoLi;
    });

    const defaultTodo = (
        <li className="flex flex-row h-[6.4rem] justify-start items-center pl-[2.4rem] pr-[2.4rem] font-sans font-[500] text-[1.8rem]">
            There's no Task
        </li>
    );

    const todosCount = currentTodos.length;

    return (
        <section className="bg-white rounded-[1rem] mb-[4.8rem] shadow-[-1px_5px_20px_10px_rgba(157,162,235,0.3)] dark:bg-[hsl(235,24%,19%)] dark:shadow-[-1px_5px_20px_10px_rgba(37,39,60,0.2)]">
            <ul>{todoList.length === 0 ? defaultTodo : todoList}</ul>
            <div className="flex justify-between items-center p-[2.4rem] border-t-[0.1rem] border-t-[hsl(236,33%,92%)] dark:border-t-[hsl(237,14%,26%)]">
                <div className="font-sans font-[500] text-[1.8rem]">{todosCount} items left</div>
                <div className="flex gap-[1rem]">
                    <div className="flex gap-[1rem]">
                        <TodoButton
                            onClick={() => dispatch(setPageAll())}
                            className={
                                page === "all"
                                    ? "cursor-pointer font-sans font-[700] text-[1.8rem] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            All
                        </TodoButton>
                        <TodoButton
                            onClick={() => dispatch(setPageActive())}
                            className={
                                page === "active"
                                    ? "cursor-pointer font-sans font-[700] text-[1.8rem] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            Active
                        </TodoButton>
                        <TodoButton
                            onClick={() => dispatch(setPageCompleted())}
                            className={
                                page === "completed"
                                    ? "cursor-pointer font-sans font-[700] text-[1.8rem] text-[hsl(236,9%,61%)] dark:text-[hsl(192,100%,67%)]"
                                    : "cursor-pointer font-sans font-[500] text-[1.8rem] text-[hsl(236,9%,61%)]"
                            }
                        >
                            Completed
                        </TodoButton>
                    </div>
                </div>
                <div>
                    <TodoButton
                        onClick={() => dispatch(clearCompleted())}
                        className="font-sans text-[1.8rem] font-[500]"
                    >
                        Clear Completed
                    </TodoButton>
                </div>
            </div>
        </section>
    );
}

export default TodoListSection;
