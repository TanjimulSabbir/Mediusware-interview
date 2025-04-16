import React, { useState, useEffect } from "react";

import { useGetBlogsQuery } from "../redux/feature/blog/blogApi";
import BlogCard from "./BlogCard";
import { Button, Spin } from "antd";

const BlogHero = () => {
  const initialUrl = "/api/website/blogs/?limit=6";
  const {
    data: initialData,
    isLoading,
    isError,
    isSuccess,
  } = useGetBlogsQuery(initialUrl);
  const [blogs, setBlogs] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(initialUrl);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isSuccess && currentUrl === initialUrl) {
      setBlogs(initialData.results);
      setNextUrl(initialData.next);
      setPrevUrl(initialData.previous);
    }
  }, [initialData, isSuccess, currentUrl]);

  const fetchPage = async (url) => {
    if (!url) return;
    setIsFetching(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setCurrentUrl(url);
    } catch (err) {
      console.error("Error fetching paginated blogs:", err);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#EEF4F9] via-[#EAF7F5] to-[#EEF4F9] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-[#002B4F] text-center text-4xl md:text-5xl font-bold mb-12">
          READ INSIGHTFUL <span className="text-[#00A88E]">ARTICLES</span>
        </h2>

        {isLoading || isFetching ? (
          <p className="text-center text-gray-500"><Spin/></p>
        ) : isError ? (
          <p className="text-center text-red-500">Failed to load blogs</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <Button
            onClick={() => fetchPage(prevUrl)}
            disabled={!prevUrl}
            className={
              prevUrl
                ? "bg-[#D1E7E3] text-[#002B4F] hover:bg-[#00A88E] hover:text-white"
                : "bg-gray-200 text-gray-400"
            }
          >
            Previous
          </Button>

          <Button
            onClick={() => fetchPage(nextUrl)}
            disabled={!nextUrl}
            className={
              nextUrl
                ? "bg-[#D1E7E3] text-[#002B4F] hover:bg-[#00A88E] hover:text-white"
                : "bg-gray-200 text-gray-400"
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
