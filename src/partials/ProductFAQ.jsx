import React from 'react';

function ProductFAQ() {
  return (
    <section id="questions" aria-labelledby="questions-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <h2 id="questions-heading" className="h2 mb-8">About PingPath</h2>
        <dl className="space-y-8 text-gray-600">
          <div>
            <dt className="text-xl font-bold text-gray-900 mb-2">Who is PingPath for?</dt>
            <dd>PingPath is designed for blind and visually impaired people who want audio descriptions and information about their indoor surroundings. It combines spatial audio, AI captioning, voice questions, and Siri integration.</dd>
          </div>
          <div>
            <dt className="text-xl font-bold text-gray-900 mb-2">How does indoor pathfinding work?</dt>
            <dd>PingPath uses spatial audio, AI, and LiDAR to help locate objects and explore paths around indoor obstacles. Pathfinding is an early experimental feature and should not be used without someone to assist with navigation.</dd>
          </div>
          <div>
            <dt className="text-xl font-bold text-gray-900 mb-2">Does PingPath require a LiDAR phone?</dt>
            <dd>The app is optimized for LiDAR-enabled phones and also works with standard cameras. Capabilities differ by hardware. Check the <a className="text-blue-600 underline" href="https://apps.apple.com/us/app/pingpath-blind-ai-tools/id1644421594">current App Store listing</a> for device and iOS compatibility.</dd>
          </div>
          <div>
            <dt className="text-xl font-bold text-gray-900 mb-2">Can I ask about my surroundings using my voice?</dt>
            <dd>Yes. PingPath supports AI captions and questions about your environment, along with Siri integration for voice controls. The <a className="text-blue-600 underline" href="https://andreas.craft.me/nnL9M4RftSjD6F">support guide</a> provides more information.</dd>
          </div>
          <div>
            <dt className="text-xl font-bold text-gray-900 mb-2">Who makes PingPath, and where can I download it?</dt>
            <dd>PingPath is made by Andreas Ink. Download <a className="text-blue-600 underline" href="https://apps.apple.com/us/app/pingpath-blind-ai-tools/id1644421594">PingPath — Blind AI Tools on the App Store</a>, where current pricing and version information are available.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default ProductFAQ;
