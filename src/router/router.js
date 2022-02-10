import React from "react";
import { Switch } from "react-router-dom";
import { Auth } from "../pages";
import { NewTask } from "../pages";
import { Task } from "../pages";
import { Tasks } from "../pages";
import { Home } from "../pages";

import { AppRoute, GuestRoute } from ".";

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path="/login" exact>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path="/signup" exact>
        <Auth />
      </GuestRoute>
      <AppRoute exact path="/">
        <Home />
      </AppRoute>
      <AppRoute exact path="/new-task">
        <NewTask />
      </AppRoute>
      <AppRoute exact path="/tasks">
        <Tasks />
      </AppRoute>
      <AppRoute exact path="/tasks/:taskId">
        <Task />
      </AppRoute>
    </Switch>
  );
}

export default AppRouter;
