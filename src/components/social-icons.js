import React from "react"

const SocialIcons = () => {
  return (
    <>
      <div className="social-icon-container flex justify-start lg:justify-end">
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/facebook_efb212a8d1.png`} alt="facebook" />
        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-12">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/twitter_64072fea3f.png`} alt="facebook" />
        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-12">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/linkedin_40c851e25d.png`} alt="facebook" />
        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-12">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/twitter_64072fea3f.png`} alt="facebook" />
        </a>
      </div>
    </>
  )
}

export default SocialIcons
