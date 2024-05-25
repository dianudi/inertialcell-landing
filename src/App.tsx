import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import "leaflet/dist/leaflet.css";
import NotFound from "./Pages/NotFound";

export default function App() {
  const routers = createBrowserRouter([{ path: "/", element: <Home />, errorElement: <NotFound /> }]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
