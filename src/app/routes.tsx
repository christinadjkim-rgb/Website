import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Works } from "./pages/Works";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "works", Component: Works },
      { path: "works/:projectId", Component: ProjectDetail },
      { path: "contact", Component: Contact },
    ],
  },
]);
