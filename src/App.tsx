import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import "leaflet/dist/leaflet.css";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";

export default function App() {
  const routers = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <NotFound /> },
    { path: "/kontak", element: <Contact /> },
    { path: "/tentang-kami", element: <AboutUs /> },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
