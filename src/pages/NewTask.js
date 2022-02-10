// import React from "react";
// import { createTask, uploadImage } from "../api";
//

// function NewTask() {
//   const [state, setState] = React.useState({ title: "", description: "" });
//   const [file, setFile] = React.useState();
//  const history = useHistory();

//   const handleSubmit = async (event) => {

//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("imageUrl", file, file.title);
//     const { data: imageData } = await uploadImage(formData);
//     console.log("imageData", imageData);

//     const { data } = await createTask({
//       ...state,
//       imageUrl: imageData.imageUrl,
//     });
//     console.log("data", data);

//     history.push("/tasks");
    
//   };

//   //no need to change this for the image
//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     setState({ ...state, [name]: value });
//   };

//   //lets add a const = handleFileChange
//   const handleFileChange = ({ target }) => {
//     const [file] = target.files;
//     setFile(file);
//   };

//   return (
//     <div>
//       <h1>Create a new task</h1>
//       <form className="NewTaskForm" onSubmit={handleSubmit}>
//         <label htmlFor="title">Title</label>
//         <input
//           name="title"
//           required
//           onChange={handleChange}
//           value={state.title}
//         />
//         <label htmlFor="description">Description</label>
//         <input
//           name="description"
//           required
//           onChange={handleChange}
//           value={state.description}
//         />
//         <input type="file" name="imageUrl" onChange={handleFileChange} />
//         <button type="submit">Create Task</button>
//       </form>
//     </div>
//   );
// }

// export default NewTask;
import React from "react";
import { createTask, uploadImage } from "../api";
import { useHistory } from "react-router-dom";
function NewTask() {
  const [state, setState] = React.useState({ title: "", description: "" });
  const [file, setFile] = React.useState();
const history = useHistory()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageUrl", file, file.name);
    const { data: imageData } = await uploadImage(formData);
    console.log("imageData", imageData);
    const { data } = await createTask({
      ...state,
      imageUrl: imageData.imageUrl,
    });
    console.log("data", data);
    history.push("/tasks")
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleFileChange = ({ target }) => {
    const [file] = target.files;
    setFile(file);
  };

 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        required
        onChange={handleChange}
        value={state.title}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        required
        onChange={handleChange}
        value={state.description}
      />
      <input type="file" name="imageUrl" onChange={handleFileChange} />
      <button type="submit">Create Task</button>
    </form>
  );
}

export default NewTask;