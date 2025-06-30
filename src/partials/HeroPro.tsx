import React, { useState, useRef, useEffect } from 'react';
import Modal from '../utils/Modal';
import HeroImage from '../images/hero-image.png';


function HeroPro(props) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    if (video.current) {
      videoModalOpen ? video.current.play() : video.current.pause();
    }
  }, [videoModalOpen]);

  return (
    <section className="relative" aria-labelledby="pro-heading">
      {/* Decorative background illustration */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pro-illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#pro-illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              id="pro-heading"
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Introducing{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
                PingPath Pro
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <h2
                role="heading"
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Unlock advanced navigation with reduced rate limits, hands-free voice assistance, and Siri integration—subscribe to PingPath Pro for $3.99 a month.
              </h2>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="https://apps.apple.com/us/app/pingpath-pro/idXXXXXXXXX" // Replace with the correct URL
                    aria-label="Download PingPath Pro app from the App Store"
                  >
                    Download Now
                  </a>
                </div>
                <div className="sm:ml-4">
                  <a
                    className="btn text-white bg-gray-600 hover:bg-gray-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="pingpath://"
                    aria-label="Return to the PingPath app"
                  >
                    Back to PingPath
                  </a>
                </div>
              </div>
              <div className="text-center mt-4">
                <a
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                  href="mailto:andreasink17@gmail.com"
                  aria-label="Get help for PingPath"
                >
                  Get Help
                </a>
              </div>
            </div>
          </div>

          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={HeroImage}
                  width="768"
                  height="432"
                  alt="Illustration showing advanced accessibility features of PingPath Pro"
                />
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="pro-modal"
                aria-expanded={videoModalOpen}
                aria-label="Open video modal to watch a demo video for PingPath Pro"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the demo video (2 min)</span>
              </button>
            </div>

            <Modal
                          id="pro-modal"
                          ariaLabel="Watch a demo video about PingPath Pro"
                          show={videoModalOpen}
                          handleClose={() => setVideoModalOpen(false)} children={undefined}            >
              <div className="relative pb-9/16">
                <video
                  ref={video}
                  className="absolute w-full h-full"
                  width="1920"
                  height="1080"
                  loop
                  controls
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag. Please update your browser.</p>
                </video>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPro;
