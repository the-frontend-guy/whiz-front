import { Link } from "gatsby"
import React from "react"
import SocialIcons from "./social-icons"
import ClampLines from 'react-clamp-lines';
import Moment from 'react-moment';

const BlogCard = ({ data }) => {
  return (
    <div class="blog-card-container m-4">
      <div className="text-right capitalize my-4">{data.read_time} Read</div>
      <img
        src={process.env.GATSBY_API_URL + data.image.url}
        className="icon-base"
        alt=""
      />
      <div className="blog-card-wrapper p-8">
        <div className="secondary-title  text-lg mb-5 text-blue-100">{data.blog_category.title}</div>
        <article>
          <h2 className="primary-title mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl">{data.title}</h2>
          <div className="flex justify-between items-center mb-5">
            <div className="mr-4 capitalize"><span>Posted By : </span><span className="whitespace-normal inline-block">{data.publisher}</span></div>
            <div className="ml-4 capitalize"><span>Dated On : </span><span  className="whitespace-normal inline-block"><Moment format="DD MMM YYYY">{data.published_at}</Moment></span></div>

          </div>
          <ClampLines
        text={data.short_description}
        id="really-unique-id"
        lines={4}
        ellipsis="..."
        buttons={false}
        className="mb-5"
        innerElement="p"
      />
        </article>
        <div className="flex flex-col md:flex-row justify-between items-center flex-wrap">
          <div className="flex mr-8">
            <span className=" inline-block">Share : </span>
            <SocialIcons isBlog={true}/>
          </div>
          <Link to={`/blog/${data.slug}`}  state={{slug: data.slug}} className="link-button mt-5 md:mt-0 text-xl hover:text-blue-100">read more</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
