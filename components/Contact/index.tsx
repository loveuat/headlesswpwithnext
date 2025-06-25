'use client';
import NewsLatterBox from "./NewsLatterBox";
import { useState } from 'react';
const Contact = () => {
  function getFormattedTimestamp() {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${now.getFullYear()}_${pad(now.getMonth() + 1)}_${pad(now.getDate())}_${pad(now.getHours())}_${pad(now.getMinutes())}_${pad(now.getSeconds())}`;
}
const timestamp = getFormattedTimestamp();
const titmetitle = `Submission_${timestamp}`;
const API_URL = process.env.NEXT_PUBLIC_AIS_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_WP_JWT_TOKEN;
const [formData, setFormData] = useState({
  from_name: "",
  from_email: "",
  company_name: "",
  contact_number: "",
  what_services_you_are_looking_for: "",
  your_message: "",
  how_did_you_hear_about_us: "",
  consent: false,
  approve_newsletter: false,
});
const [status, setStatus] = useState('');
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;

  setFormData({
    ...formData,
    [name]: type === 'checkbox'
      ? (e.target as HTMLInputElement).checked  // ✅ safely cast
      : value,
  });
};




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    //const token = localStorage.getItem('jwt_token'); // Assume JWT is stored here after login
    
    const res = await fetch(`${API_URL}/wp/v2/submissionform`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`, // required for protected endpoints
      },
       body: JSON.stringify({
      title: titmetitle+'_'+formData.from_name, // post_title
      //content: formData.your_message, // post_content
      status: "publish",
      fields: {
        from_name: formData.from_name,   // ACF field
        from_email: formData.from_email,           // ACF field
        company_name: formData.company_name,
        contact_number: formData.contact_number,           // ACF field
        what_services_you_are_looking_for: formData.what_services_you_are_looking_for,
        how_did_you_hear_about_us: formData.how_did_you_hear_about_us,
        your_message: formData.your_message,
        consent: formData.consent,
        approve_newsletter: formData.approve_newsletter,
      },
    }),
    });

     const result = await res.json();
     console.log(result);
    if (res.ok) {
      setStatus('✅ Submitted successfully');
    } else {
      setStatus(`❌ Error: ${result.message}`);
    }
  };
  return (
    <section id="contact" className=" dark:bg-gray-dark  overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three mb-12 rounded-sm dark:bg-black bg-gray-light px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl text-center">
                Have an Project in Mind?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color text-center">
                We will get back to you ASAP via email or call.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label> */}
                      <input
                        name="from_name"
                        type="text"
                        onChange={handleChange}
                        value={formData.from_name}
                        placeholder="Enter your name*"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label> */}
                      <input
                        type="email"
                        name="from_email"
                        onChange={handleChange}
                        value={formData.from_email}
                        placeholder="Enter your email*"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="contact"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Contact Number
                      </label> */}
                      <input
                        name="contact_number"
                        type="text"
                        onChange={handleChange}
                        value={formData.contact_number}
                        placeholder="Enter your contact no."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Company Name
                      </label> */}
                      <input
                        type="text"
                        name="company_name"
                        onChange={handleChange}
                        value={formData.company_name}
                        placeholder="Company Name (Optional)"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="contact"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        How did you hear about us?
                      </label> */}
                    <select
                    name="how_did_you_hear_about_us"
                    value={formData.how_did_you_hear_about_us}
                    onChange={handleChange}
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  >
                       <option value="How did you hear about us?">How did you hear about us?</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral</option>
                      <option value="Online Ads">Online Ads</option>
                      <option value="Friend or Colleague">Friend or Colleague</option>
                      <option value="Other">Other</option>
                  </select>
                    </div>
                  </div>
                   <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="contact"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        How did you hear about us?
                      </label> */}
                    <select
                    name="what_services_you_are_looking_for"
                    value={formData.what_services_you_are_looking_for}
                    onChange={handleChange}
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  >
                    <option value="" >What service are you looking for?</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="html">Front-End Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="woocommerce">WooCommerce Development</option>
                    <option value="shopify">Shopify Development</option>
                    <option value="react">React Development</option>
                    <option value="vue">Vue Development</option>
                    <option value="hubspot">HubSpot Development</option>
                    <option value="contentful">Contentful Development</option>
                    <option value="squarespace">Squarespace Development</option>
                    <option value="craftcms">Craft Development</option>
                    <option value="bigcommerce">BigCommerce Development</option>
                    <option value="email">Email Templates Coding</option>
                    <option value="website-redesign">Website Redesign</option>
                    <option value="website-maintenance">Website Maintenance</option>
                    <option value="design">Other Design Services</option>
                    <option value="webflow-development">Webflow Development</option>
                    <option value="ecommerce-development">eCommerce Development</option>
                    <option value="other">Anything Else</option>
                  </select>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label> */}
                      <textarea
                        name="your_message"
                        onChange={handleChange}
                        value={formData.your_message}
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                       <label className="inline-flex items-start space-x-2 text-sm text-gray-700">
                      <input
                      name="consent"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.consent}
                      onChange={handleChange}
                        required
                      />
                      <span>
                        I consent to the processing of my personal data and agree to the <a href="/terms">Terms & Conditions</a>.
                      </span>
                    </label>
                        <label className="inline-flex items-start space-x-2 text-sm text-gray-700">
                      <input
                      name="approve_newsletter"
                        type="checkbox"
                        checked={formData.approve_newsletter}
                      onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>
                        I want to receive news and service updates from htmlBurger.
                      </span>
                    </label>
                    </div>
                  </div>
                 
                  <div className="w-full px-4 items-center flex justify-center">
                    <button type="submit" className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit
                    </button>
                  </div>
                </div>
                <p>{status}</p>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
