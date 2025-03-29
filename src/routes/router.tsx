import App from "@/App";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import BlogPage from "@/pages/BlogPage";
import HomePage from "@/pages/HomePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { projects } from "@/configs/projectsConfig";

const MainRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route 
            path="project/:slug" 
            element={<ProjectShowcase />}
            loader={({ params }) => {
              const project = projects.find(p => p.slug === params.slug);
              if (!project) throw new Response("Not Found", { status: 404 });
              return project;
            }}
          />
        </Route>
      </>
    )
  );
  return { router };
};

export default MainRoute;
