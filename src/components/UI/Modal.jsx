import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="w-full h-full fixed top-7 left-0 z-10 bg-headingColor bg-opacity-40 flex items-center justify-center">
      <div className="max-w-[400px] w-full bg-gray-300 rounded-[8px] p-4 relative">
        <div>
          <figure>
            <img className="rounded-[8px] w-full" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-xl text-headingColor font-bold my-3">
            {portfolio.title}
          </h2>
          <p className="text-sm leading-6 text-smallTextColor">
            {portfolio.description}
          </p>
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <h4 className="text-headingColor text-lg font-bold">
              Technologies:
            </h4>

            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-xs leading-none"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Change buttons to <a> tags */}
          <div className="pl-2 flex space-x-2">
            <a
              href={portfolio.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xs bg-slate-900 hover:bg-smallTextColor py-1 mt-1  px-1 rounded-[4px] ease-in duration-200"
            >
              Deployed URL
            </a>
            <a
              href={portfolio.frontendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xs bg-slate-900 hover:bg-smallTextColor py-1 mt-1  px-1 rounded-[4px] ease-in duration-200"
            >
              Frontend
            </a>
            <a
              href={portfolio.backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xs bg-slate-900 hover:bg-smallTextColor py-1 mt-1  px-1 rounded-[4px] ease-in duration-200"
            >
              Backend
            </a>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="w-[1.8rem] h-[1.8rem] bg-white absolute top-2 right-2 text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
