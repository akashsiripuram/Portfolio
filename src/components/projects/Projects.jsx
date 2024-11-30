import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col w-4/5 md:w-4/5 lg:w-3/4 mx-auto bg-gray-300 mt-16 p-6 rounded-lg">
        <div className="flex flex-row justify-center mb-8">
          <div className="text-2xl font-bold text-center text-black border-2 border-black px-4 py-2">
            Projects
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 - EduWave */}
          <div className="flex flex-col items-center bg-gray-200 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 hover:shadow-xl">
            <a
              href="https://github.com/akashsiripuram/eduWave.git"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <img
                src="/src/assets/eduWave.png"
                alt="EduWave"
                className="h-48 w-full object-cover mx-auto rounded-t-lg"
              />
              <div className="text-lg font-semibold text-center mt-4 text-black p-2">
                EduWave
              </div>
            </a>
            <div className="text-sm text-center px-4 py-4 text-gray-700">
              EduWave is an online education platform designed to provide users with access to courses and educational materials.
            </div>
          </div>

          {/* Project 2 - Airbnb */}
          <div className="flex flex-col items-center bg-gray-200 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 hover:shadow-xl">
            <a
              href="https://github.com/akashsiripuram/AirBnb.git"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <img
                src="/src/assets/Airbnb.webp"
                alt="Airbnb"
                className="h-48 w-full object-cover mx-auto rounded-t-lg"
              />
              <div className="text-lg font-semibold text-center mt-4 text-black p-2">
                Airbnb Clone
              </div>
            </a>
            <div className="text-sm text-center px-4 py-4 text-gray-700">
              A clone of Airbnb showcasing a full-stack development process with features like booking and property listing.
            </div>
          </div>

          {/* Project 3 - Serenity */}
          <div className="flex flex-col items-center bg-gray-200 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gray-300 hover:shadow-xl">
            <a
              href="https://github.com/akashsiripuram/Serenity.git"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <img
                src="/src/assets/serenity.jpg"
                alt="Serenity"
                className="h-48 w-full object-cover mx-auto rounded-t-lg"
              />
              <div className="text-lg font-semibold text-center mt-4 text-black p-2">
                Serenity
              </div>
            </a>
            <div className="text-sm text-center px-4 py-4 text-gray-700">
              Serenity is an online banking platform that allows users to manage accounts, transactions, and more.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
