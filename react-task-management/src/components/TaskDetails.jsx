import { useParams, Link } from "react-router";

export default function TaskDetails({ tasks }) {

  const { id } = useParams();

  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return (
        <div className="error-container">
            <h3 className="task-error">Task Does Not Exist.</h3>
            <Link to={'/'} className="return-home">Return Home</Link>
        </div>
    )
  }

  return (
    <div className="details-container">
      <h2 className="details-header">{task.title}</h2>
      <p className="details">{task.description}</p>
      <div className="return-container">
        <Link to={'/'} className="return-home">Return Home</Link>
      </div>
    </div>
  )
}