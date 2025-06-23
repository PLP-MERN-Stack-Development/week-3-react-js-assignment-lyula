import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import useLocalStorage from '../hooks/useLocalStorage';

/**
 * TaskManager component for managing tasks
 */
function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTaskText,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewTaskText('');
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Card title="Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 flex-grow"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task"
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>
      <ul>
        {filteredTasks.length === 0 && (
          <li className="text-gray-500">No tasks</li>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between py-1 border-b"
          >
            <span
              className={`flex-1 cursor-pointer ${
                task.completed ? 'line-through text-gray-400' : ''
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskManager;