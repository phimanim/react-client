import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export function login(credentials) {
  return api.post("/login", credentials);
}

export function signup(credentials) {
  return api.post("/signup", credentials);
}

export function logout() {
  return api.post("/logout");
}

export function isLoggedIn() {
  return api.get("/login");
}

export function getTasks() {
  return api.get("/tasks");
}

export function getTaskById(taskId) {
  return api.get(`/tasks/${taskId}`);
}

export function createTask(task) {
  return api.post("/tasks", task);
}

export function updateTask(taskId, task) {
    return api.put(`/tasks/${taskId}`, task);
  }

  export function deleteTask(taskId, task) {
    return api.delete(`/tasks/${taskId}`, task);
  }

  export async function uploadImage(file) {
    return api.post("/image-upload", file);
  }