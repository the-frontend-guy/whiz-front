import React from "react"

const SocialIcons = ({isDark}) => {
  return (
    <>
      <div className={`social-icon-container flex justify-start lg:justify-end ${isDark ? 'dark' : ''}`}>
      <a href="http:\\www.facebook.com" className="inline-block w-6 h-6">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/facebook_(1)_860127653f.svg`} alt="facebook" />
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/facebook-w_35b268dab9.svg`} alt="facebook" />

        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6  ml-8">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/instagram_dbcc208a09.svg`} alt="instagram" />
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/instagram-w_3bccd2be75.svg`} alt="instagram" />
        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-8">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/linkedin_e0edd3e5dd.svg`} alt="linkedin" />
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/linkedin-w_a014276c08.svg`} alt="linkedin" />

        </a>
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-8">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/twitter_a4aa91fc55.svg`} alt="twitter" />
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/twitter-w_0dcab6303f.svg`} alt="twitter" />

        </a>
       
        
        <a href="http:\\www.facebook.com" className="inline-block w-6 h-6 ml-8">
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/basketball_04090f5723.svg`} alt="dribble" />
          <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/basketball-w_6f406a1735.svg`} alt="dribble" />

        </a>
      </div>
    </>
  )
}

export default SocialIcons
