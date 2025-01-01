import React from 'react';

import TestimonialImage from '../images/hero-image.png';

function Testimonials() {
  return (
    <section
      className="relative"
      aria-labelledby="testimonials-heading"
      role="region"
      aria-describedby="testimonials-description"
    >
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <header
            className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
            id="testimonials-heading"
          >
            <h2 className="h2 mb-4">People with visual impairments are loving the app</h2>
            <p
              className="text-xl text-gray-600"
              data-aos="zoom-y-out"
              id="testimonials-description"
            >
              PingPath is helping people more easily experience the world around them
            </p>
          </header>

          {/* Testimonials */}
          <div
            className="max-w-3xl mx-auto mt-20"
            data-aos="zoom-y-out"
            role="list"
            aria-label="Testimonials"
          >
            <div
              className="relative flex items-start border-2 border-gray-200 rounded bg-white"
              role="listitem"
            >
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div
                  className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2"
                  aria-hidden="true"
                >
                  {/* <img
                    className="relative rounded-full"
                    src={TestimonialImage}
                    width="96"
                    height="96"
                    alt="Portrait of Chris, a college student with visual impairment"
                  /> */}
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “As a person with visual impairment, having an app that could help me navigate an
                  unfamiliar room by identifying objects and recognizing paths would be an advantage
                  and bring me one step closer to having more peace of mind and independence as I go
                  through the world.”
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Chris</cite>
                <p className="text-gray-600">
                  A college student and future educator with a visual impairment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;