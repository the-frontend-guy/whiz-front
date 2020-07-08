import React from "react";
import Layout from "../components/layout"
import SocialIcons from "../components/social-icons"
import { Link, navigate } from "gatsby"
const ThankYouPage = ({location}) => {
  
  var d = new Date();
  var n = d.getFullYear();
  return(
    <Layout hideFooter={true} hideHamburger={true} lightHeader={true}>
    <section className="thankyou-page flex bg-white">
      <div className="w-full m-auto">
        <div className="flex flex-col items-center">
          <figure className="w-full md:w-48 xl:w-64">
          <img src={process.env.GATSBY_API_URL + '/uploads/about_questions_07_c63204d7ea.svg'} />
          </figure>
          <h3 className="section-title text-6xl thankyou-text">Thank You !</h3>
          <p className="tracking-body mb-5 pb-5 md:mb-0 md:pb-0 font-bodyMedium text-gray-100 text-2xl text-center w-full  md:w-8/12 my-4 leading-tight" >
            <span className="block">We received your request</span>
            <span className="block">our team will reach you in no time</span></p>
          <Link className="link-button text-xl my-4 hover:text-blue-100" to="/">back to homepage</Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between mx-4 my-4 md:mx-8 md:my-12">
          <div>
            <Link to="/contact-us" className="mr-0 mb-4 md:mb-0 md:mr-8 underline block md:inline-block">Contact</Link>
            {/* <Link to="/contact-us" className="mr-0 mb-4 md:mb-0 md:mr-8 underline  block md:inline-block">Terms & Conditions</Link> */}
            {/* <Link to="/contact-us" className="mr-0 mb-4 md:mb-0 md:mr-8 underline  block md:inline-block">Privacy Policy</Link> */}
          </div>

          <div className="inline-flex thankyou-social mt-4 md:mt-0">
            <span className="mr-8 hidden md:block">show us Love : </span>
            <SocialIcons />
          </div>
        </div>

        <div>
        <span className="text-gray-100 mx-4 my-8 md:mx-0 md:my-0 block tex-left md:text-center text-sm">
       {`@ ${n} whizwafture`}
      </span>
        </div>
        </div>

    </section>
    </Layout>
  )
}

export default ThankYouPage