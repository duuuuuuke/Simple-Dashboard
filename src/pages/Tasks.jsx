import { useState, useEffect } from "react";

import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

/**
 * This is a function that gets the initial tasks from the local storage.
 *
 * @returns {Object[]} An array of tasks {id, text, isCompleted}.
 */
const getInitialTasks = () => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
};

/**
 * This component renders the tasks page of the application and manages the tasks state.
 *
 * @returns {ReactNode} A React component that renders the tasks page of the application.
 */
const Tasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);
    /**
     * This effect updates the local storage when the tasks state changes.
     */
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };
    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            )
        );
    };
    const addTask = (text) => {
        setTasks((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                text,
                isCompleted: false
            }
        ]);
    };
    return (
        <div className="p-6 sm:p-12 h-[94%] flex flex-col gap-4">
            <h1 className="text-lg font-bold">Task Manager</h1>
            <div className="w-full h-[80%] flex flex-col md:flex-row gap-6">
                <div className="widget w-full h-full p-3 overflow-auto">
                    {/* Render the todo tasks */}
                    <h1 className="md:mb-8 mb-2">Tasks to do: </h1>
                    {tasks.length === 0 ? (
                        <p>No Tasks</p>
                    ) : (
                        <ul className="flex flex-col md:gap-6 gap-1">
                            {tasks.map((task) => {
                                return (
                                    !task.isCompleted && (
                                        <li key={task.id}>
                                            <TaskItem
                                                text={task.text}
                                                isCompleted={task.isCompleted}
                                                id={task.id}
                                                removeTask={removeTask}
                                                toggleTask={toggleTask}
                                            />
                                        </li>
                                    )
                                );
                            })}
                        </ul>
                    )}
                </div>
                <div className="widget w-full h-full p-3 overflow-auto">
                    {/* Render the completed tasks */}
                    <h1 className="md:mb-8 mb-2">Completed: </h1>
                    {tasks.length === 0 ? (
                        <p>No Tasks</p>
                    ) : (
                        <ul className="flex flex-col md:gap-6 gap-1">
                            {tasks.map((task) => {
                                return (
                                    task.isCompleted && (
                                        <li key={task.id}>
                                            <TaskItem
                                                text={task.text}
                                                isCompleted={task.isCompleted}
                                                id={task.id}
                                                removeTask={removeTask}
                                                toggleTask={toggleTask}
                                            />
                                        </li>
                                    )
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
            <TaskForm addTask={addTask} />
        </div>
    );
};

export default Tasks;
