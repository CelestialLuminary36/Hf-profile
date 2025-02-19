import App from "@/App";
import BlogPage from "@/pages/BlogPage";
import HomePage from "@/pages/HomePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const MainRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </>
    )
  );
  return { router };
};

export default MainRoute;
