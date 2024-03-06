/* eslint-disable react/prop-types */
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";

/**
 * This component controls and renders the single task item.
 *
 * @param {Object} props The props for the component.
 * @param {boolean} props.isCompleted A boolean indicating whether the task is completed.
 * @param {string} props.text The text of the task.
 * @param {Function} props.removeTask The function to remove a task.
 * @param {string} props.id The id of the task.
 * @param {Function} props.toggleTask The function to toggle isCompleted for a task.
 * @returns {ReactNode} A React component that renders the single task item.
 */
const TaskItem = ({ isCompleted, text, removeTask, id, toggleTask }) => {
    return (
        <div className="widget flex items-center justify-between min-h-4 p-3 md:gap-3">
            {isCompleted ? (
                <MdOutlineCheckBox
                    size={20}
                    className="md:w-10 md:h-10 md:p-2 sm:icon-hover cursor-pointer"
                    onClick={() => toggleTask(id)}
                />
            ) : (
                <MdOutlineCheckBoxOutlineBlank
                    size={20}
                    className="md:w-10 md:h-10 md:p-2 sm:icon-hover cursor-pointer"
                    onClick={() => toggleTask(id)}
                />
            )}
            <p className="max-w-30 text-sm">{text}</p>
            <MdDelete
                size={20}
                className="md:w-10 md:h-10 md:p-2 sm:icon-hover cursor-pointer"
                onClick={() => removeTask(id)}
            />
        </div>
    );
};

export default TaskItem;
