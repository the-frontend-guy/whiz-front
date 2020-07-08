import React from "react"

const ContactInfo = ({isContact, isLight}) => {
  let mailClass = 'text-left lg:text-right font-display text-xl md:text-2xl lg:text-3xl text-blue-100';

  if(isContact){
    mailClass = "text-left font-body text-blue-100"
  }

  if(isLight){
    mailClass =" text-left font-display text-black text-xl"
  }
  return (
    <>
      <div className="contact-info-container flex flex-col">
        <div className={`mobile-number ${(isContact || isLight) ? 'order-2' : ''}`} >
        { (isContact || isLight) && <span className={`text-white block ${isLight ? "font-display text-xl" : ""}`}>or call</span> }
          <a
            className={`block ${mailClass}`}
            href="tel:9967334146"
          >
            +91 9967334146
          </a>
        </div>
        <div className="email-address">
        { (isContact || isLight) && <span className={`text-white block ${isLight ? "font-display text-xl" : ""}`}>Mail us to</span> }

          <a
          className={`block ${mailClass}`}
            href="mailto:info@whizwafture.com"
          >
            info@whizwafture.com
          </a>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
