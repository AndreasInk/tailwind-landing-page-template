import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function Features(props) {
  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current?.children[tab - 1]) {
      tabs.current.style.height = `${tabs.current.children[tab - 1].offsetHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, [tab]);

  return (
    <section className="relative" aria-labelledby="features-heading">
      {/* Section background */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div
        className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <header className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
            <h1 id="features-heading" className="h2 mb-4">
              Explore the possibilities
            </h1>
            <h2 className="text-xl text-gray-600">Learn what's possible with Ping Path</h2>
          </header>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 text-left"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h2 className="h3 mb-3">{props.title}</h2>
                <p className="text-xl text-gray-600">{props.text}</p>
              </div>

              {/* Tabs buttons */}
              <nav role="tablist" aria-label="Feature tabs" className="mb-8 md:mb-0">
                {['first', 'second', 'third'].map((key, index) => (
                  <button
                    key={key}
                    className={`flex items-start text-left text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== index + 1
                        ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                        : 'bg-gray-200 border-transparent'
                    }`}
                    onClick={() => setTab(index + 1)}
                    role="tab"
                    aria-selected={tab === index + 1}
                    aria-controls={`tab-panel-${index + 1}`}
                    id={`tab-button-${index + 1}`}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1">
                        {props[`${key}Title`]}
                      </div>
                      <div className="text-gray-600">{props[`${key}Text`]}</div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              ref={tabs}
            >
              {['first', 'second', 'third'].map((key, index) => (
                <Transition
                  key={key}
                  show={tab === index + 1}
                  appear
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                  id={`tab-panel-${index + 1}`}
                  role="tabpanel"
                  aria-labelledby={`tab-button-${index + 1}`}
                >
                  <div className="relative inline-flex flex-col text-left">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={props[`${key}Img`]}
                      alt={props[`${key}Alt`]}
                      width="500"
                      height="462"
                    />
                  </div>
                </Transition>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;