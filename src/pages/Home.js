import React from "react";
import { useAuth } from "../components/AuthContext";

function Home() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome</h2>
      <p>{user?.email}</p>
    </div>
  );
}

export default Home;