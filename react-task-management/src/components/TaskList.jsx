import { Link } from 'react-router';

export default function TaskList({ tasks }) {
  return (
    <div className="task-container">
      <h1 className="task-header">Task List:</h1>
      <ul className="list-container">
        {tasks.map(task => (
          <li className="list-item" key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}