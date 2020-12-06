import React from "react";
import { Switch ,Redirect} from "react-router-dom";
import { Route } from "react-router";

import AdminLayout from "./Dash/Components/AdminLayout/AdminLayout";
import OrderLayout from "./Website/Components/Layouts/OrderLayout";
import Sign from "./Website/Containers/Sign/Sign";
import  AlertProvider  from "./Context/AlertContext";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={() => <Redirect to='/order'/>} />
        <Route path="/admin"  component={AdminLayout} />
        <Route path="/order" component={OrderLayout} />
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
