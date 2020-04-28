import React from "react"

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-container flex flex-col">
        <div className="mobile-number">
          <a
            className="block font-display text-blue-100 text-left lg:text-right text-xl md:text-2xl lg:text-3xl"
            href="tel:9967334146"
          >
            +91 9967334146
          </a>
        </div>
        <div className="email-address">
          <a
            href="mailto:info@whizwafture.com"
            className="block font-display text-blue-100 text-left lg:text-right text-xl md:text-2xl lg:text-3xl"
          >
            info@whizwafture.com
          </a>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
