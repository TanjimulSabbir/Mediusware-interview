import React, { useState } from "react";
import { useGetBlogCategoriesQuery } from "../redux/feature/blog/blogApi";
import { Spin } from "antd";

// Show 10 categories per page
const PAGE_SIZE = 10;

const AllBlogs = () => {
  const { data: categories, isLoading, isError } = useGetBlogCategoriesQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const totalCount = categories?.reduce((acc, cat) => acc + cat.total_blog, 0);

  // Pagination logic
  const totalPages = categories ? Math.ceil(categories.length / PAGE_SIZE) : 0;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedCategories = categories?.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-3 md:flex-row flex-col py-6">
        <p className="text-center sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>

      <div className="flex items-center flex-wrap md:flex-row flex-col justify-center gap-4 sm:py-6 py-4">
        <button className="sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl text-white bg-[#0060AF]">
          All{" "}
          <span className="px-[6px] py-1 rounded-lg ms-1 text-[#008F79] bg-[#EAECF0] h-[20px]">
            {totalCount ?? 0}
          </span>
        </button>

        {isLoading && <p className="text-center w-full"><Spin/> Loading...</p>}
        {isError && (
          <p className="text-center w-full text-red-500">
            Failed to load categories
          </p>
        )}

        {paginatedCategories?.map((category) => (
          <button
            key={category.id}
            className="sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl bg-white hover:bg-gray-100 transition-all"
          >
            {category.name}{" "}
            <span className="px-[6px] py-1 rounded-lg ms-1 bg-[#EAECF0] h-[20px]">
              {category.total_blog}
            </span>
          </button>
        ))}
      </div>

      {/* Pagination Controls */}
      {categories && categories.length > PAGE_SIZE && (
        <div className="flex justify-center gap-4 items-center py-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
