/* eslint-disable react/prop-types */
import { useState } from "react";

/**
 * This component renders the add task form.
 *
 * @param {Object} props The props for the component.
 * @param {Function} props.addTask The function to add a task.
 * @returns {ReactNode} A React component that renders the add task form.
 */
const TaskForm = ({ addTask }) => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(text);
        setText("");
    };
    return (
        <form className="flex gap-3 items-center" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Task"
                className="md:w-80 w-40 md:p-2 p-1 border-2 border-soft-bg rounded-md text-main-bg"
                value={text}
                onChange={handleChange}
                maxLength={65}
            />
            <button type="submit" className="md:add-btn small-btn">
                Add
            </button>
        </form>
    );
};

export default TaskForm;
