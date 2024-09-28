import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Componets/Home/Home.jsx";
import About from "./Componets/About/About.jsx";
import Contact from "./Componets/Contact/Contact.jsx";
import Github from "./Componets/Github/Github.jsx";

// this is one method to make router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
      {
        path: "github",
        element: <Github />,
      },
    ],
  },
]);

// another method to create route
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//
//       <Route
//       loader={githubInfoLoader}
//       path='github'
//       element={<Github />}
//        />
//     </Route>
//   )
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
