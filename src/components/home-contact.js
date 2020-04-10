import React from "react";
import "./component.css"
import ContactForm from "./contact-form";

const HomeContact = () => {
  return (
  <>
  <section className="flex flex-col">
    <div className="home-contact-image-container bg-cover bg-no-repeat flex justify-end items-center"  style={{
    backgroundImage: `url('images/banner.jpg')`,
    height: `120vh`
  }}>
    <div className="wrapper  w-4/5">
      <h2 className="section-title text-white w-4/5">we build more than just experiences <span className="text-blue-100">.</span></h2>
      </div>
    </div>  
      <div className="wrapper self-end w-4/5 -mt-32">
    <div className="home-contact-form-container bg-blue-100 py-32 pl-40 pr-16 flex flex-col">
        <span className="primary-title text-white text-5xl mb-20">let's make something together</span>
        <div className="w-11/12 self-end">
        <ContactForm/>
        </div>
    </div>
    </div>
  </section>
  </>
  )
}


export default HomeContact