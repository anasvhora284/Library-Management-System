import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login_page";
import SignupPage from "./pages/signup_page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
