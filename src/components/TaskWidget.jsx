/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

/**
 * This component renders the task widget.
 *
 * @param {Object} props The props for the component
 * @param {Object[]} props.tasks An array of tasks
 * @returns {ReactNode} A React component that renders the task widget
 */
const TaskWidget = ({ tasks }) => {
    return (
        <div className="widget h-full">
            <div className="flex justify-between items-center mb-2">
                <h1 className="md:text-xl md:font-bold">Tasks: </h1>
                <Link to="/tasks" className="md:add-btn small-btn">
                    Manage
                </Link>
            </div>
            {tasks.length === 0 ||
            tasks.every((task) => task.isCompleted === true) ? (
                <p>No task</p>
            ) : (
                <ul className="h-[80%] overflow-auto">
                    {tasks.map((task) => {
                        if (task.isCompleted === false) {
                            return (
                                <li
                                    key={task.id}
                                    className="border-b-[1px] border-b-slate-400 py-2 mb-2 md:text-lg">
                                    {task.text}
                                </li>
                            );
                        }
                    })}
                </ul>
            )}
        </div>
    );
};

export default TaskWidget;
