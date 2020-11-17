import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";

import AdminLayout from "./Dash/Components/AdminLayout/AdminLayout";
import OrderLayout from "./Website/Components/Layouts/OrderLayout";
import Sign from "./Website/Containers/Sign/Sign";
import  AlertProvider  from "./Context/AlertContext";

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
        <AlertProvider>
          <Sign />
        </AlertProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
