import React from "react"

const SocialIcons = ({isDark}) => {
  return (
    <>
      <div className={`social-icon-container flex  ${isDark ? 'dark' : 'justify-start lg:justify-end'}`}>
      <a href="https://www.facebook.com/WhizWaftureLLP" target="_blank" className="inline-block w-6 h-6">
          <img src={`${process.env.GATSBY_API_URL}/uploads/facebook_black_7e12645796.svg`} alt="facebook" />
          <img src={`${process.env.GATSBY_API_URL}/uploads/facebook_white_8399bae4ae.svg`} alt="facebook" />

        </a>
        <a href="https://www.instagram.com/whizwafture/" target="_blank" className="inline-block w-6 h-6  ml-8">
          <img src={`${process.env.GATSBY_API_URL}/uploads/instagram_black_bef14512b7.svg`} alt="instagram" />
          <img src={`${process.env.GATSBY_API_URL}/uploads/instagram_whitesvg_cbe484a25b.svg`} alt="instagram" />
        </a>
        <a href="https://linkedin.com/company/whizwafture" target="blank" className="inline-block w-6 h-6 ml-8">
          <img src={`${process.env.GATSBY_API_URL}/uploads/linkedin_black_de6e7aec03.svg`} alt="linkedin" />
          <img src={`${process.env.GATSBY_API_URL}/uploads/linkedin_white_9d56dffa77.svg`} alt="linkedin" />

        </a>
        <a href="https://twitter.com/WhizWaftureLLP" target="_blank" className="inline-block w-6 h-6 ml-8">
          <img src={`${process.env.GATSBY_API_URL}/uploads/twitter_black_ac5facf836.svg`} alt="twitter" />
          <img src={`${process.env.GATSBY_API_URL}/uploads/twitter_white_c64b95bda8.svg`} alt="twitter" />

        </a>
       
        
        <a href="https://dribbble.com/whizwafture" target="_blank" className="inline-block w-6 h-6 ml-8">
          <img src={`${process.env.GATSBY_API_URL}/uploads/dribble_black_15591289d2.svg`} alt="dribble" />
          <img src={`${process.env.GATSBY_API_URL}/uploads/dribble_white_99dc75b80b.svg`} alt="dribble" />

        </a>
      </div>
    </>
  )
}

export default SocialIcons
