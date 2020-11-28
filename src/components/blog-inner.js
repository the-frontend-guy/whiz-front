import React, { useEffect, useState } from "react"
import axios from "axios"
import { navigate, Link } from "gatsby"
import parser from "html-react-parser"
import BlogCard from "./blog-card"
import SocialIcons from "./social-icons"
import Moment from "react-moment"

const BlogInner = ({ query }) => {
  const blogUrl = `${process.env.GATSBY_API_URL}/blogs`
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setError] = useState(false)
  const [data, setData] = useState(null)

  const fetchBlogDetails = async query => {
    try {
      const res = await axios.get(`${blogUrl}/${query.slug}`)
      setData(res.data)
    } catch (err) {
      setError(true)
      if (err.response.status === 404) {
        navigate("/404")
      }
    }
    setIsLoading(false)
  }
  useEffect(() => {
    setIsLoading(true)
    fetchBlogDetails(query)
  }, [query])

  return (
    <>
      {!data && isLoading && (
        <div class="blog-page-wrapper w-auto  mx-4 md:mx-auto md:w-11/12 xl:w-10/12 2xl:w-9/12">
          <div className="skeleton relative">
            <div className="blog-inner-skeleton">
              <div className="dark title my-8"></div>
              <div className="text-right mb-8">
                <div className="dark read inline-block"></div>
              </div>
              <div className="dark image mb-8"></div>
              <div className="dark line mb-4"></div>
              <div className="dark line mb-4 w-60-p"></div>
              <div className="dark line mb-4"></div>
              <div className="dark line mb-4 w-80-p"></div>
              <div className="dark line mb-4"></div>
            </div>
          </div>
        </div>
      )}

      {data && (
        <div class="blog-page-wrapper w-auto  mx-4 md:mx-auto md:w-11/12 xl:w-10/12 2xl:w-9/12">
          <h2 className="primary-title capitalize mt-20 mb-8 leading-snug tracking-tight md:text-3xl lg:text-4xl">
            {data.blogData.title}
          </h2>
          <div className="text-right capitalize my-4">
            {data.blogData.read_time} Read
          </div>
          <img
            src={process.env.GATSBY_API_URL + data.blogData.image.url}
            className="icon-base"
            title={data.blogData.image.caption}
            alt={data.blogData.image.alternativeText}
          />

          <div className="secondary-title  text-lg my-8 text-blue-100">
            {data.blogData.blog_category.title}
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="mr-4 capitalize">
              <span>Posted By : </span>
              <span className="whitespace-normal inline-block">
                {data.blogData.publisher}
              </span>
            </div>
            <div className="ml-4 capitalize">
              <span>Dated On : </span>
              <span className="whitespace-normal inline-block">
                <Moment format="DD MMM YYYY">
                  {data.blogData.published_at}
                </Moment>
              </span>
            </div>
            <div className="inline-flex">
              <span className="mr-4 inline-block">Share : </span>
              <SocialIcons isBlog={true} />
            </div>
          </div>
          <div className="mb-12 blog-content-parse">
            {parser(data.blogData.content)}
          </div>
          {data.blogData.blog_tags.length && (
            <div className="tags">
              {data.blogData.blog_tags.map(e => (
                <span className="font-display">{e.title}</span>
              ))}
            </div>
          )}
          <div
            className={`prev-next flex ${
              data.prev || data.next ? "bordered" : ""
            }`}
          >
            <div className="w-3/6">
              {data.prev && (
                <div className="previous">
                  <div className="flex items-center mb-5">
                    <img
                      src={process.env.GATSBY_API_URL + data.prev.image.url}
                      className="icon-base"
                      alt={data.prev.image.alternativeText}
                      title={data.prev.image.caption}
                    />
                    <Link
                      to={`/blog/${data.prev.slug}`}
                      state={{ slug: data.prev.slug }}
                      className="font-display text-xl ml-5 text-blue-100"
                    >
                      Previous
                    </Link>
                  </div>
                  <h4 className="secondary-title  text-lg ">
                    {data.prev.title}
                  </h4>
                </div>
              )}
            </div>

            <div className="w-3/6">
              {data.next && (
                <div className="next">
                  <div className="flex items-center justify-end mb-5">
                    <Link
                      to={`/blog/${data.next.slug}`}
                      state={{ slug: data.next.slug }}
                      className="font-display text-xl mr-5 text-blue-100"
                    >
                      Next
                    </Link>
                    <img
                      src={process.env.GATSBY_API_URL + data.next.image.url}
                      className="icon-base"
                      title={data.next.image.caption}
                      alt={data.next.image.alternativeText}
                    />
                  </div>
                  <h4 className="secondary-title  text-lg text-right">
                    {data.next.title}
                  </h4>
                </div>
              )}
            </div>
          </div>

          {data.suggested && (
            <div className="suggested">
              <span className="font-display block text-xl capitalize mt-12 mb-8">
                suggested articles
              </span>
              <div className="block">
                {data.suggested.map(e => (
                  <BlogCard data={e} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {hasError && (
        <span className="font-display text-xl">
          Error in Loading Data. Please try again
        </span>
      )}
    </>
  )
}

export default BlogInner
