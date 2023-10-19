import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import TagsPage from "./pages/TagsPage";
import MainBlogPage from "./pages/MainBlogPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContext";

function App() {
  const { fetchData } = useContext(AppContext);
  const { pathname, search } = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let page = 1;
    let tag = null;
    let category = null;
    let blogId = null;

    if (search.includes("page")) {
      page = parseInt(searchParams.get("page"));
    }
    if (pathname.includes("tags")) {
      tag = pathname.split("/").at(-1).replaceAll("-", " ");
    } else if (pathname.includes("categories")) {
      category = pathname.split("/").at(-1).replaceAll("-", " ");
    } else if (pathname.includes("blog")) {
      blogId = pathname.split("/").at(-1);
    }
    fetchData(page, tag, category, blogId);
  }, [pathname, search]);

  return (
    <div className="dark:bg-[rgb(10,10,32)] w-[100%] min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blog/:blogId" element={<MainBlogPage />} />
          <Route path="/tags/:tag" element={<TagsPage />} />
          <Route path="/categories/:category" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
