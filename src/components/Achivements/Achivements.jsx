import "./Achivements.css";

export default function Achievements() {
  return (
    <>
      <div className="flex flex-col w-4/5 md:w-4/5 lg:w-3/4 mx-auto bg-gray-300 mt-16 p-6 rounded-lg w-screen">
        <div className="flex flex-row justify-center mb-8">
          <div className="text-2xl font-bold text-center text-black border-2 border-black px-4 py-2">
            Achievements
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Achievement 1 */}
          <div className="flex flex-col items-center bg-gray-200 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 hover:shadow-xl">
            <div className="text-lg font-semibold text-center mt-4 text-black p-2">
              1st Place - EPITOME’24 Hackathon
            </div>
            <div className="text-sm text-center px-4 py-4 text-gray-700">
              Secured 1st place out of 30+ teams by developing a website for smart education, enhancing digital learning experiences at Gokaraju Rangaraju Institute of Engineering.
            </div>
            <button
              onClick={() => window.open("/GRIET.JPG", "_blank")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-auto mb-4 hover:bg-blue-600 transition-all"
            >
              View
            </button>
          </div>

          {/* Achievement 2 */}
          <div className="flex flex-col items-center bg-gray-200 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 hover:shadow-xl">
            <div className="text-lg font-semibold text-center mt-4 text-black p-2">
              5th Place - National-level Ideathon
            </div>
            <div className="text-sm text-center px-4 py-4 text-gray-700">
              Ranked 5th out of 100+ teams by creating and demonstrating a prototype with advanced user interaction design features to enhance usability and engagement.
            </div>
            <button
              onClick={() => window.open("/Ideathon.jpg", "_blank")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-auto mb-4 hover:bg-blue-600 transition-all"
            >
              View
            </button>
          </div>

          {/* Achievement 3 */}
          <div className="flex flex-col items-center bg-gray-200 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 hover:shadow-xl">
            <div className="text-lg font-semibold text-center mt-4 text-black p-2">
              2nd Place - HackSphere Hackathon
            </div>
            <div className="text-sm text-center px-4 py-4 text-gray-700">
              Secured 2nd place among 50+ teams by developing a real-time collaboration tool prototype within 24 hours at BITS Pilani, Hyderabad.
            </div>
            <button
              onClick={() =>
                window.open("https://www.bits-pilani.ac.in/", "_blank")
              }
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-auto mb-4 hover:bg-blue-600 transition-all"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
