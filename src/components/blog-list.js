import React, { useState, useEffect } from "react"
import axios from "axios"
import BlogCard from "./blog-card"
import { Link } from "gatsby"

const BlogList = ({ query, loadMore, isOtherPage, isHomePage }) => {
  const blogUrl = `${process.env.GATSBY_API_URL}/blogs`
  const [blogs, setBlogs] = useState([])
  const [start, setStart] = useState(0)
  const [category, setCategory] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setError] = useState(false)
  const [count, setCount] = useState(0)
  const limit = isOtherPage ? 2 : 4
  const blogListSkeleton = []

  for (let i = 0; i < limit; i++) {
    blogListSkeleton.push(
      <div className="skeleton relative blog-card-container m-4 ">
        <div className="blog-card-skeleton ">
          <div className="dark image"></div>

          <div className="blog-card-wrapper p-8">
            <div className="dark cat-title mb-5"></div>
            <div className="dark title mb-5"></div>
            <div className="dark content"></div>
          </div>
        </div>
      </div>
    )
  }

  const queryConstructor = query => {
    let start = 0
    let category = ""
    if (Number(query && query.start)) {
      setStart(query.start)
      start = query.start
    }

    if (query && query.category) {
      setBlogs([])
      setCount(0)
      setStart(0)
      setCategory(query.category)
      category = query.category
    }

    const paginationQuery = `?_limit=${
      query && query.limit ? query.limit : limit
    }&_start=${start}`
    const catQuery =
      category && category !== "all"
        ? `&blog_category.category=${category}`
        : ""
    if (isHomePage) {
      return "/home"
    }
    return `${paginationQuery}${catQuery}`
  }

  const fetchBlogs = async query => {
    const res = await axios
      .get(`${blogUrl}${queryConstructor(query)}`)
      .catch(e => setError(true))
    setIsLoading(false)
    console.log(query)
    if (query.category && query.category !== category) {
      setBlogs(res.data.articles)
    } else {
      setBlogs([...blogs, ...res.data.articles])
    }

    setCount(res.data.count)
  }
  useEffect(() => {
    if (category && category === query.category) {
      return
    }
    fetchBlogs(query)
  }, [query])

  const loadMoreData = () => {
    if (blogs.length < count) {
      setIsLoading(true)
      query.start = start + limit
      fetchBlogs(query)
    }
  }

  return (
    <div className="w-auto  mx-4 md:mx-auto md:w-11/12 xl:w-10/12 2xl:w-9/12">
      <div className="block">
        {!blogs.length && isLoading && <div>{blogListSkeleton}</div>}
        {blogs.length && blogs.map(e => <BlogCard data={e} />)}
      </div>
      {loadMore && blogs.length < count && (
        <div className="text-center">
          <span
            className="secondary-title text-lg mb-5 text-blue-100"
            onClick={loadMoreData}
          >
            <span
              className={`blog-loader ${isLoading ? "loading" : ""}`}
            ></span>
            <span className="inline-block ml-4 ">{`load${
              isLoading ? "ing" : " more"
            }`}</span>
          </span>
        </div>
      )}

      {isOtherPage && blogs.length && (
        <div className="text-right">
          <Link
            to={`/blog`}
            state={{ category: query.category }}
            className="link-button text-xl m-4 inline-block whitespace-no-wrap hover:text-blue-100"
          >
            view all
          </Link>
        </div>
      )}

      {hasError && (
        <span className="font-display text-xl">
          Error in Loading Data. Please try again
        </span>
      )}
    </div>
  )
}

export default BlogList
