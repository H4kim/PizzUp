import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";

import AdminLayout from "./Dash/Components/AdminLayout/AdminLayout";
import OrderLayout from "./Website/Components/Layouts/OrderLayout";
import Sign from "./Website/Containers/Sign/Sign";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin">
          <AdminLayout />
        </Route>
        <Route path="/order">
          <OrderLayout />
        </Route>
        <Route path="/sign">
          <Sign />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
