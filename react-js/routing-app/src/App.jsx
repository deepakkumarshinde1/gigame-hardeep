import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  BasicDetailsContextProvider,
  useBasicDetailsContext,
} from "./context/basic.details.context";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <BasicDetailsContextProvider>
          <Layout />
        </BasicDetailsContextProvider>
      ),
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <ProtectedRoute>
          <Login />
        </ProtectedRoute>
      ),
    },
    {
      path: "/create-account",
      element: (
        <ProtectedRoute>
          <Registration />
        </ProtectedRoute>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
