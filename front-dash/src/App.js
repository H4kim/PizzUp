import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";

import AdminLayout from "./Dash/Components/AdminLayout/AdminLayout";
import WLayout from "./Website/Components/WLayout/WLayout";
import Sign from "./Website/Containers/Sign/Sign";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin">
          <AdminLayout />
        </Route>
        <Route path="/order">
          <WLayout />
        </Route>
        <Route path="/sign">
          <Sign />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
