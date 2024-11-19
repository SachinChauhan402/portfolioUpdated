import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-bold text-3xl mb-5">
            Expertise Skills
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor text-lg leading-7">
            In the context of a software developer, skills typically refer to
            the technical competencies and proficiencies related to software
            development and programming.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Frontend Development */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <figure className="mb-4">
              <img src={frontendImg} alt="Frontend Development" className="w-16 h-16" />
            </figure>
            <h3 className="text-primaryColor font-semibold text-xl mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Proficient in HTML, CSS, JavaScript, and React for creating
              responsive and dynamic web applications.
            </p>
          </div>

          {/* AWS */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <figure className="mb-4">
              <img src={appsImg} alt="AWS" className="w-16 h-16" />
            </figure>
            <h3 className="text-primaryColor font-semibold text-xl mb-3">
              AWS
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Proficient in leveraging Amazon Web Services (AWS) for cloud-based
              applications and scalable deployments.
            </p>
          </div>

          {/* Backend Development */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <figure className="mb-4">
              <img src={backendImg} alt="Backend Development" className="w-16 h-16" />
            </figure>
            <h3 className="text-primaryColor font-semibold text-xl mb-3">
              Backend Development
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Skilled in server-side programming using Node.js and Express.js to
              build robust backend applications.
            </p>
          </div>

          {/* Other Tools */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <figure className="mb-4">
              <img src={uiImg} alt="Other Tools" className="w-16 h-16" />
            </figure>
            <h3 className="text-primaryColor font-semibold text-xl mb-3">
              Other Tools
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Experienced with Netlify, Heroku, GitHub, and MongoDB Atlas for
              efficient deployment and development workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
