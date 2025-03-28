import TodoInput from "../TodoInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addTodos } from "../../store/todos/todosSlice";
import { v4 as uuidv4 } from "uuid";

function FormControl() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        dispatch(addTodos({ key: uuidv4(), name: inputValue, completed: false }));
        setInputValue("");
    };

    return (
        <div className="bg-white w-full h-[6.4rem] flex justify-stretch items-center p-[2.4rem] gap-[2.4rem] rounded-[1rem] mb-[2.4rem] dark:bg-[hsl(235,24%,19%)]">
            <form onSubmit={addTodo} className="w-full">
                <TodoInput
                    type="text"
                    className="border-none outline-none w-full font-[500] font-sans text-[1.8rem] dark:bg-[hsl(235,24%,19%)]"
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    id="todoInput"
                    placeholder="Create a new todo"
                />
            </form>
        </div>
    );
}

export default FormControl;
