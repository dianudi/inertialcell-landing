import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import "leaflet/dist/leaflet.css";
import aos from "aos";
import { useEffect } from "react";

export default function App() {
  const routers = createBrowserRouter([{ path: "/", element: <Home /> }]);
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
