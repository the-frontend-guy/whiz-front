import React from "react"

const ContactInfo = ({isContact}) => {
  return (
    <>
      <div className="contact-info-container flex flex-col">
        <div className={`mobile-number ${isContact ? 'order-2' : ''}`} >
        { isContact && <span className="text-white">or call</span> }
          <a
            className={`block text-blue-100   ${isContact ? 'text-left font-body' : 'text-left lg:text-right font-display text-xl md:text-2xl lg:text-3xl'}`}
            href="tel:9967334146"
          >
            +91 9967334146
          </a>
        </div>
        <div className="email-address">
        { isContact && <span className="text-white">Mail us to</span> }

          <a
            href="mailto:info@whizwafture.com"
            className={`block text-blue-100   ${isContact ? 'text-left font-body' : 'text-left lg:text-right font-display text-xl md:text-2xl lg:text-3xl'}`}
          >
            info@whizwafture.com
          </a>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
