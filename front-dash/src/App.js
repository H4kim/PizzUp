import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";

import AdminLayout from "./Dash/Components/AdminLayout/AdminLayout";
import WLayout from "./Website/Components/WLayout/WLayout";
// import Expenses from "./Expenses/Expenses";
// import Categories from "./Categories/Categories";
// import Products from "./Products/Products";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin">
          <AdminLayout />
        </Route>
        <Route path="/">
          <WLayout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
