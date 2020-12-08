import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import Spinner from "../components/Spinner";

const Customers = lazy(() => import("../pages/Customers"));
const CustomerProfile = lazy(() => import("../pages/CustomerProfile"));

const Routes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-64 p-12">
          <Spinner />
        </div>
      }
    >
      <Switch>
        <LayoutRoute exact path="/" component={Customers} />
        <LayoutRoute exact path="/customers" component={Customers} />
        <LayoutRoute
          exact
          path="/customer-profile/:id"
          component={CustomerProfile}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
