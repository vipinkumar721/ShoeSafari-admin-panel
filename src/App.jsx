import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/authentication/Signup";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./components/Home";
import Signin from "./pages/signIn";
import PrivateRoute from "./pages/privateRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute children={<DashboardLayout />} />}
          >
            <Route index element={<></>} />
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
