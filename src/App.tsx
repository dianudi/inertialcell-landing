import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  const routers = createBrowserRouter([{ path: "/", element: <Home /> }]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
