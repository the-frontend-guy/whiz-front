import React from "react"

const SocialIcons = () => {
  return (
    <>
      <div className="social-icon-container flex justify-start md:justify-end">
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6">
          <img src="images/facebook.png" alt="facebook" />
        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-12">
          <img src="images/instagram.png" alt="facebook" />
        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-12">
          <img src="images/linkedin.png" alt="facebook" />
        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-12">
          <img src="images/twitter.png" alt="facebook" />
        </a>
      </div>
    </>
  )
}

export default SocialIcons
