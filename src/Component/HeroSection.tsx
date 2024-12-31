const HeroSection: React.FC = () => {
  return (
    <div className="font-robotoCondensed w-full min-h-screen bg-[#1a237e] text-white pt-32 mt-10 ">
      {/* Hero Content */}
      <div className="w-full">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Unlock Web3 Success by Partnering with Antier
          </h1>
          <p className="text-lg mb-8">
            Accelerate your Web3 journey with Antier CoPilot, a tailored
            partnership program designed to turn your vision into reality.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md">
            Speak With Copilot Expert
          </button>
        </div>

        {/* Cards Section */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 mt-16 pb-16">
            <div className="bg-white p-8 rounded-lg text-gray-800">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                CoPilot Enterprises
              </h2>
              <p>
                Deliver cutting-edge Web3 solutions to your clients. Expand
                business offerings.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-gray-800">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                CoPilot Channel Partners
              </h2>
              <p>
                Grow your business, unlock new revenue streams, and expand your
                service offerings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
