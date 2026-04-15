import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";
import { ScrollToTopOnNavigate } from "../components/ScrollToTopOnNavigate";

export function Root() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTopOnNavigate />
      <Outlet />
      <ScrollToTop />
    </div>
  );
}
