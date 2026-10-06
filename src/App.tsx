import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { getProject } from "./data/projects";

function routeFromPath(pathname: string) {
  if (pathname === "/about") {
    return <About />;
  }

  if (pathname.startsWith("/projects/")) {
    const slug = pathname.replace("/projects/", "").replace(/\/$/, "");
    const project = getProject(slug);
    return <ProjectDetail project={project} />;
  }

  return <Home />;
}

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <Navbar />
      {routeFromPath(window.location.pathname)}
      <Footer />
    </div>
  );
}
