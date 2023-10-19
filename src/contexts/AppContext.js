import { createContext, useState } from "react";

export const AppContext = createContext();
const BLOGS_URL = "https://codehelp-apis.vercel.app/api/get-blogs";
const MAIN_BLOG_URL = "https://codehelp-apis.vercel.app/api/get-blog";

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [blog, setBlog] = useState({});
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  async function fetchData(
    page = 1,
    tag = null,
    category = null,
    blogId = null
  ) {
    const base_url =
      blogId !== null ? MAIN_BLOG_URL : `${BLOGS_URL}?page=${page}`;
    let url = null;
    if (tag) {
      url = `${base_url}&tag=${tag}`;
    } else if (category) {
      url = `${base_url}&category=${category}`;
    } else if (blogId) {
      url = `${base_url}?blogId=${blogId}`;
    } else {
      url = base_url;
    }
    try {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();
      if (blogId) {
        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
      } else {
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      }
      setLoading(false);
    } catch (err) {
      console.log("Error in fetching Data");
      console.log(err.message);
    }
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    blog,
    setBlog,
    relatedBlogs,
    setRelatedBlogs,
    fetchData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export default AppContextProvider;
