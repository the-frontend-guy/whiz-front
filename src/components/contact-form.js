
import React from "react"

const ContactForm = () => {
  return(
<form method="post" action="#">
  <div className="form-controls">
    <div className="form-control flex justify-between mb-8">
     <input type="text" name="name" placeholder="Name" id="name" className="appearance-none bg-transparent text-white placeholder-white w-47-p border-b border-gray-200 p-6 capitalize"/>
     <input type="email" name="email" placeholder="Email" id="email" className="appearance-none bg-transparent text-white placeholder-white w-47-p border-b border-gray-200 p-6 capitalize" />
    </div>
    <div className="form-control flex justify-between mb-12">
      <input type="tel" name="phone" placeholder="Phone" id="phone" className="appearance-none bg-transparent text-white placeholder-white w-47-p border-b border-gray-200 p-6 capitalize" />  
      <input type="text" name="services" placeholder="Services" id="services" className="appearance-none bg-transparent text-white placeholder-white w-47-p border-b border-gray-200 p-6 capitalize"/>
    </div>
    <div className="form-control flex justify-between mb-20">
    <textarea name="message" placeholder="Describe your project in short" id="message" rows="1" className="appearance-none bg-transparent text-white placeholder-white w-full border-b border-gray-200 p-6 capitalize"/>
    </div>
  </div>
  <div className="flex justify-between mb-8">
  <button className="font-display text-white lowercase text-xl" type="button"> + attach file</button>
  <button type="submit" className="font-display text-white capitalize text-xl">send</button>
  </div>
</form>
  );
}


export default ContactForm
