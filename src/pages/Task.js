import React from "react";
import { getTaskById } from "../api";
import { deleteTask } from "../api";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Suspense } from "../components";
import { useHistory } from "react-router-dom";

function Task() {
  const { taskId } = useParams();
  const { data, loading, error } = useFetch(
    () => getTaskById(taskId),
    [taskId]
  );
const history = useHistory();
 const handleDelete = () => {
        deleteTask(taskId)
        history.push("/tasks");
 }
 //

  return (
    <div>
      <Suspense error={error} loading={loading} noData={!data && !loading}>
        <h2>Task {data?.title}</h2>
        {data?.imageUrl && <img src={data?.imageUrl} />}
        <p>Description: {data?.description}</p>
        <p>Owner: {data?.owner}</p>
        <button onClick={handleDelete}>
          Delete
        </button>
      </Suspense>
    </div>
  );
}

export default Task;
