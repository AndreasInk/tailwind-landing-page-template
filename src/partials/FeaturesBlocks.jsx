import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Power an Inclusive World</h2>
            <p className="text-xl text-gray-600">Assist the visually impaired with indoor mapping and the elderly with robotic assistance</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-leading p-6 bg-white rounded shadow-xl">
            <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#2F6EEC"/>
<circle cx="32" cy="32" r="14" fill="#2F6EEC" stroke="#A2C4F5" stroke-width="2"/>
<path d="M25.7328 35C28.5677 35 30.8669 32.7644 30.8669 30C30.8669 27.2436 28.5677 25 25.7328 25C22.8897 25 20.5823 27.2436 20.5823 30C20.5823 32.7644 22.8897 35 25.7328 35ZM25.7328 33.6458C23.6561 33.6458 21.975 32.0192 21.975 30C21.975 27.9888 23.6561 26.3542 25.7328 26.3542C27.793 26.3542 29.4742 27.9968 29.4742 30C29.4742 32.0112 27.793 33.6458 25.7328 33.6458ZM38.2837 35C41.1185 35 43.4177 32.7644 43.4177 30C43.4177 27.2436 41.1185 25 38.2837 25C35.4406 25 33.1331 27.2436 33.1331 30C33.1331 32.7644 35.4406 35 38.2837 35ZM38.2837 33.6458C36.2152 33.6458 34.5258 32.0112 34.5258 30C34.5258 27.9968 36.2152 26.3542 38.2837 26.3542C40.3521 26.3542 42.0251 27.9888 42.0251 30C42.0251 32.0192 40.3521 33.6458 38.2837 33.6458ZM21.1262 29.0144H19.6181C19.2143 29.0144 19 29.2147 19 29.6154V29.9439C19 30.3445 19.2143 30.5529 19.6181 30.5529H21.1262V29.0144ZM42.8739 30.5529H44.3902C44.794 30.5529 45 30.3445 45 29.9439V29.6154C45 29.2147 44.794 29.0144 44.3902 29.0144H42.8739V30.5529ZM30.4631 30.2885C30.8752 30.0401 31.452 29.9119 32.0042 29.9119C32.5481 29.9119 33.1249 30.0401 33.5452 30.2885V28.8381C33.0755 28.6218 32.4656 28.5417 32.0042 28.5417C31.5344 28.5417 30.9246 28.6218 30.4631 28.8381V30.2885Z" fill="#EAF0FD"/>
</svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Improve Access to the World for those with Severe Vision Loss</h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-leading p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Empower Robotic Companies with Real World Training Data and Models</h4>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-leading p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Leverage Nearby Interaction to Cultivate Natural Spatial Interaction</h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
