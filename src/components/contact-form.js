import React from "react"

const ContactForm = ({isContactPage}) => {
  return (
    <form method="post" action="#" className={`${isContactPage?'contact-page':''}`}>
      <div className="form-controls">
        <div className="form-control flex-col md:flex-row flex justify-between mb-0 md:mb-8">
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            className="appearance-none bg-transparent text-white placeholder-white w-47-p border-b p-6 capitalize mb-8 md:mb-0 outline-none tracking-body"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className="appearance-none bg-transparent text-white placeholder-white w-47-p border-b p-6 capitalize mb-8 md:mb-0 outline-none tracking-body"
          />
        </div>
        <div className="form-control  flex-col md:flex-row  flex justify-between mb-0 md:mb-12">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            id="phone"
            className="appearance-none bg-transparent text-white placeholder-white w-47-p border-b p-6 capitalize mb-8 md:mb-0 tracking-body outline-none"
          />
          <input
            type="text"
            name="services"
            placeholder="Services"
            id="services"
            className="appearance-none bg-transparent text-white placeholder-white w-47-p border-b p-6 capitalize mb-8 md:mb-0 tracking-body outline-none"
          />
        </div>
        <div className="form-control flex-col md:flex-row  flex justify-between mb-0 md:mb-20">
          <textarea
            name="message"
            placeholder="Describe your project in short"
            id="message"
            rows="1"
            className="appearance-none bg-transparent text-white tracking-body placeholder-white w-full border-b p-6 capitalize mb-8 md:mb-0 outline-none"
          />
        </div>
      </div>
      <div className="flex  justify-between">
        <button
          className="font-display text-white lowercase text-xl"
          type="button"
        >
          {" "}
          + attach file
        </button>
        <button
          type="submit"
          className="font-display text-white capitalize text-xl send-button"
        >
          send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
