import React from "react";
import { getTasks } from "../api";
import { useFetch } from "../hooks/useFetch";
import { Suspense } from "../components";
import { Link } from "react-router-dom";

function Tasks() {
    const { data, loading, error } = useFetch(getTasks);

    return (
      <Suspense noData={!data && !loading} error={error} loading={loading}>
        <div>
      <h1>Task</h1>
      {data?.map((task) => {
        return (
          <div key={task.title}>
            <img src={task.imageUrl} />
            <p>Description: {task.description}</p>
            <p>Owner: {task.owner}</p>
            <Link to={`/tasks/${task._id}`}>Details</Link>
            <hr />
          </div>
           
        );
      })}
    </div>
    </Suspense>
  );
}

export default Tasks;
